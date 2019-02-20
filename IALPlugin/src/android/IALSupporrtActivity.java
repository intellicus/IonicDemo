package com.intellicus.poc.plugin;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.intellicus.android.BrowseActivity;
import com.intellicus.android.Constants;
import com.intellicus.android.DownloadHandler;
import com.intellicus.android.EntityListActivity;
import com.intellicus.android.IntellicusServerConnectionHandler;
import com.intellicus.android.OlapReportViewerActicity;
import com.intellicus.android.RealTimeAdhocReportViewerActivity;
import com.intellicus.android.adapter.BaseEntity;
import com.intellicus.android.bean.EntityType;
import com.intellicus.android.bean.ServerInfo;
import com.intellicus.android.bean.co.CubeObject;
import com.intellicus.android.bean.xml.response.ReportsBean;
import com.intellicus.android.http.task.LoginRequest;
import com.intellicus.android.lib.IALConfigurationInfo;
import com.intellicus.android.lib.IALUtils;
import com.intellicus.android.lib.IntellicusAndroidApp;
import com.intellicus.android.manager.ReportDownloadManager;
import com.intellicus.android.sql.DBHelper;
import com.intellicus.android.sql.DashboardDBHelper;
import com.intellicus.android.sql.EntityListSchema;
import com.intellicus.android.sql.OLAPDBHelper;
import com.intellicus.android.test.TestableContextFactory;
import com.intellicuslib.android.execptions.IntellicusLibError;

import java.util.ArrayList;

/**
this class is responsible for creation of server connection and download the entity
*/

public class IALSupporrtActivity extends Activity {

  ProgressBar progressIndicator;
  TextView progressUpdate;
  private  String entityId;
  private  String entityName = "Intellicus";
  EntityType entityType = EntityType.REPORT;
  private ServerInfo defaultServer;
  private  String serverUrl ;
  private  String username ;
  private  String password ;
  private String designMode = Constants.DESIGN_MODE_ADHOC;


   public static String KEY_SERVER_URL = "com.intellicus.poc.serverurl";
  public static String KEY_PASSWORD = "com.intellicus.poc.password";
  public static String KEY_USERNAME = "com.intellicus.poc.username";

  public static String KEY_REPORT_DESIGN_MODE = "com.intellicus.poc.report.designmode";


  /**this method will got called on create of acti*/
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Bundle extras = getIntent().getExtras();
    String package_name = getApplication().getPackageName();
    setContentView(getApplication().getResources().getIdentifier("ial_support_activity", "layout", package_name));
    entityId = extras.getString(Constants.KEY_ENTITY_ID);

	// checking for required information
	//if any mandetory inforamtion is missing  it will show a toaster
    if(TextUtils.isEmpty(entityId)){
      showError( "           Error:\n" +
        "Report Id can not be blank.");

      return;
    }
    if(extras.containsKey(KEY_SERVER_URL)){
      serverUrl = extras.getString(KEY_SERVER_URL);
    }
    if(extras.containsKey(KEY_USERNAME)){
      username = extras.getString(KEY_USERNAME);
    } if(extras.containsKey(KEY_PASSWORD)){
      password = extras.getString(KEY_PASSWORD);
    }

    if(TextUtils.isEmpty(serverUrl) || TextUtils.isEmpty(username) ||TextUtils.isEmpty(password) ){
      showError( "         Error:\n" +
                    "Invalid Server Information.");

      return;
    }

    if(extras.containsKey(Constants.KEY_ENTITY_TYPE)){
      entityType = EntityType.valueOf(extras.getString(Constants.KEY_ENTITY_TYPE));
    }
    if(extras.containsKey(KEY_REPORT_DESIGN_MODE)){
      designMode = extras.getString(KEY_REPORT_DESIGN_MODE);
    }
    if(extras.containsKey(Constants.KEY_NAME)){
      entityName = extras.getString(Constants.KEY_NAME);
    }
    progressIndicator =   findViewById(getApplication().getResources().getIdentifier("progressIndicator", "id", package_name));
    progressUpdate =   findViewById(getApplication().getResources().getIdentifier("progressUpdate", "id", package_name));
    IALConfigurationInfo configurationInfo = IntellicusAndroidApp.getInstance().getConfigurationInfo();
    defaultServer = configurationInfo.getDefaultServer();

	//chacking if it is already connected to server
	if(defaultServer == null) {
		// if not connected to server, it will first authenticate device with server
      handleLoginAction();
	  // checking  if report is already fetched during previous call
    }else if(!isReportCached(entityId,entityType)){
		// if report is not found in local cache it will download it from server
      downloadReport();
    }else{
       // opening the report
        showReport(entityId, entityType);

    }
  }

  @Override
  protected void onStart() {
    super.onStart();
    if(TextUtils.isEmpty(entityId)){
      finish();
    }
  }
/**
method to show report based on its designmode
*/
  private void showReport(String entityId, EntityType entityType) {

    if(designMode.equals(Constants.DESIGN_MODE_OLAP)){
      showOLAPReport(entityId, entityType);
    }else if(designMode.equals(Constants.DESIGN_MODE_ADHOC )) {
      showAdhocReport(entityId, entityType);
    }

    hideProgressBar();

  }


/**
method to invoke view OLAP report
*/
  private void showOLAPReport(String entityId,EntityType entityType) {
    // reading downloaded entity information from DB
    BaseEntity entity = readEntityFromDB(entityId,entityType);
       long uniqueRowId = entity.getUniqueRowId();
    long orlRowId = OLAPDBHelper.getInstance().getORLIdForSubscriberReportId(uniqueRowId);
    long cubeRowId = DashboardDBHelper.getCubeIdForORL(orlRowId);
    CubeObject cubeObject = OLAPDBHelper.getInstance().readCube(cubeRowId);

    // creting object of OlapReportViewerActicity to view OLAP report
    Intent intent = new Intent(getApplicationContext(), OlapReportViewerActicity.class);
    //setting entity information to view
    intent.putExtra(BrowseActivity.COLOUMN_UNIQUE_ID, cubeObject.getUniqueId());
    intent.putExtra(BrowseActivity.COLOUMN_NAME, entityName);
    intent.putExtra(EntityListActivity.REQUESTED_ENTITY_ROW_ID, cubeObject.getUniqueRowId());
    intent.putExtra(EntityListActivity.REPORT_UNIQUE_ID, uniqueRowId);
    intent.putExtra(Constants.KEY_ORL_ID, orlRowId);

    //starting acivity
    startActivityForResult(intent,5000);
  }


/**
method to invoke view Adhoc  report
*/
  private void showAdhocReport(String entityId, EntityType entityType) {
    // creting object of RealTimeAdhocReportViewerActivity to view Adhoc report
    Intent intent = new Intent(getApplicationContext(), RealTimeAdhocReportViewerActivity.class);
    BaseEntity entity = readEntityFromDB(entityId,entityType);
    //setting entity information to view
    intent.putExtra(Constants.KEY_ENTITY_ID, entity.getUniqueRowId());
    intent.putExtra(BrowseActivity.COLOUMN_NAME, entityName);
    //starting acivity
    startActivityForResult(intent,5000);
  }

 
 /*** method  to download report from server **/
  private void downloadReport() {
    //creating report Object
    ReportsBean item = initAdhocReportObject();
    //Save the Report with intellicus db
    long rowPostionInserted = DBHelper.getInstance().insertEntityEntry(entityType, item, false);
    item.setUniqueRowId(rowPostionInserted);

    //creating list of Report to be downloaded, here in case we have
//are downloading single Report
    ArrayList<BaseEntity> entityListBean = new ArrayList<>();
    entityListBean.add(item);

//Creating Report Download manager, it is responsible for
//downloading Report from Intellicus Server we also need to pass a
//DownloadHandler object through which it will notify about download status

    ReportDownloadManager entityDownloadManager = new ReportDownloadManager(this, entityListBean, handler, false);
    entityDownloadManager.setDownloadParameters(true);
    entityDownloadManager.setDirtyParameters(false);

    //start the task executer to start the download of Report
    entityDownloadManager.execute();

//Show the loading alert till we download the Report completely
    showProgressBar("Downloading Report");

  }



/**
method to check if report is previously cached or not
*/
  private boolean isReportCached(String entityId,EntityType entityType) {
    BaseEntity entity = readEntityFromDB(entityId,entityType);
    if(entity == null){
      return false;
    }
    int status = getEntityStatus(entity,entityType);
    return status == EntityListSchema.UPDATE_STATUS_SUCCESS;
  }

/**
method to check if report download status
*/
  public int getEntityStatus(BaseEntity entity, EntityType entityType) {

    int status = EntityListSchema.UPDATE_STATUS_FAILED;
    EntityListSchema entityListSchema = EntityListSchema.getNewInstanse(entityType);
    if (DBHelper.getInstance().isTableExist(entityListSchema.getTableName())) {
      String whereClause = EntityListSchema.KEY_ID + "=? ";
      String whereArgs[] = new String[]{String.valueOf( entity.getUniqueRowId() )};
      Cursor cursor = DBHelper.getInstance().queryOnReadableDB(entityListSchema.getTableName(), new String[]{EntityListSchema.KEY_UPDATE_STATUS}, whereClause, whereArgs, null, null, null, null);
      if (cursor != null) {
        if (cursor.moveToFirst()) {
          status =   cursor.getInt(0);
        }
        cursor.close();
      }
    }
    return status;
  }
/**
this method will handle the authentication process
it will notify caller about authentication status via IntellicusServerConnectionHandler object
*/
  private void handleLoginAction() {
    showProgressBar("Authenticating With Server");
    LoginRequest loginRequest = new LoginRequest(IALSupporrtActivity.this);
    //Set server URL
    loginRequest.setServerName(serverUrl);
    //Set user ID
    loginRequest.setUserName(username);
    //Set User Password
    loginRequest.setPassWord(password);
    loginRequest.setDBName("");
    loginRequest.setLocation("MOBILE");
    loginRequest.setIntellicusServerConnectionHandler(intellicusServerConnectionHandler);
    if (loginRequest.validateInput()) {
      loginRequest.execute();

    }

  }





 



  private BaseEntity readEntityFromDB(String entityId,EntityType entityType) {
    try {

      BaseEntity entity = IALUtils.getEntity(entityId, defaultServer, entityType);

      return entity;
    }catch (Exception e){

    }
    return null;

  }

  private ReportsBean initAdhocReportObject() {

    //Create a Report object, which we want to download
    ReportsBean reportItem = new ReportsBean();

    //id is the unique id of QReport on Intellicus Report Server
    reportItem.id = entityId;

    //Category ID the unique id of folder on Intellicus Report Server in which Report is saved
    reportItem.categoryID = "";


    //Source Server Unique id the unique id of the Intellicus Server from where we want to download the Report
    reportItem.setServerKey(defaultServer.getuniqueKey());


//USE   STUDIO/ADHOC based on your report
    reportItem.dsgnMode = TextUtils.isEmpty(designMode)? Constants.DESIGN_MODE_ADHOC : designMode;
    return reportItem;
  }

  
  
  private IntellicusServerConnectionHandler intellicusServerConnectionHandler = new IntellicusServerConnectionHandler() {

    @Override
    public void onSucces(String message) {
      IALConfigurationInfo configurationInfo = IntellicusAndroidApp.getInstance().getConfigurationInfo();
      defaultServer = configurationInfo.getDefaultServer();
      downloadReport();

    }

    @Override
    public void onCancelled() {
      showError("");
      finish();
    }

    @Override
    public void onError(IntellicusLibError error) {
      showError(error.getDiscription());
      finish();
    }
  };

  DownloadHandler handler = new DownloadHandler() {
    @Override
    public void onDownloadComplete() {
      showProgressBar("Opening Report");
      showReport(entityId,entityType);
    }

    @Override
    public void publishProgress(Bundle bundle) {

    }

    @Override
    public void onDownloadFailure(IntellicusLibError intellicusLibError) {
      showError(intellicusLibError.getDiscription());
      finish();
    }

    @Override
    public void onDownloadCancelled() {
      showError("");
    }
  };
   @Override
  protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    if(requestCode == 5000){
      finish();
    }
    super.onActivityResult(requestCode, resultCode, data);
  }

  private void hideProgressBar() {
    if(progressIndicator != null){
      progressIndicator.setVisibility(View.GONE);
    }

  }
  private void showProgressBar(String msg){
    if(progressIndicator != null){
      progressIndicator.setVisibility(View.VISIBLE);
    }
    if(progressUpdate!= null){
      progressUpdate.setVisibility(View.VISIBLE);
      progressUpdate.setText(msg);
    }

  }

   private void showError(String s) {
    Toast.makeText(getApplicationContext(),s,Toast.LENGTH_SHORT).show();
  }

}
