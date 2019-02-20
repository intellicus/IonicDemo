package com.intellicus.poc.plugin;


import android.content.Context;
import android.content.Intent;

import com.intellicus.android.Constants;
import com.intellicus.android.bean.EntityType;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class IALPlugin extends CordovaPlugin {
/***id of the report you want to view, you can get this ID through Intellicus Web client in properties of report.*/
public static final String ENTITY_ID = "EntityId";
/**Title of the report you want to view.*/
public static final String ENTITY_TITLE="EntityTitle";
/**Type of entity you want to view (for this sample we are supporting “REPORT” only )*/
public static final String ENTITY_TYPE = "EntityType";
/**Design Mode of report you want to view, you can find type of report through Intellicus Web client in report properties.(for this sample we are supporting “ADHOC”/”OLAP” only)*/
public static final String REPORT_DESIGN_MODE = "DesignMode";
/**URL of Intellicus server you want to connect*/
public static final String INTELLICUS_SERVER_URL = "ServerUrl";
/**username of active user on Intellicus server*/
public static final String USERNAME = "UserName";
/**password for user*/
public static final String PASSWORD ="Password";


public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }
	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Context context = cordova.getActivity().getApplicationContext();
      if(action.equals("new_activity")) {

      JSONObject jsonObject  = (JSONObject) args.get(0);
      JSONObject data = (JSONObject) jsonObject.get("data");
      String entityId = data.getString(ENTITY_ID);
      String entityTitle = data.getString(ENTITY_TITLE);
      String entityType = data.getString(ENTITY_TYPE);
      String designMode = data.getString(REPORT_DESIGN_MODE);
      String serverURL = data.getString(INTELLICUS_SERVER_URL);
      String username = data.getString(USERNAME);
      String password = data.getString(PASSWORD);
            this.openNewActivity(context,entityId,entityTitle,entityType,designMode,serverURL,username,password);
            return true;
        }
        return false;
    }

    private void openNewActivity(Context context, String entityId, String entityTitle, String entityType,String designMode,String serverURL,String username,String password) {
        Intent intent = new Intent(context, IALSupporrtActivity.class);
        intent.putExtra(Constants.KEY_ENTITY_TYPE, entityType);
      intent.putExtra(Constants.KEY_ENTITY_ID, entityId);
      intent.putExtra(IALSupporrtActivity.KEY_REPORT_DESIGN_MODE, designMode);
      intent.putExtra(Constants.KEY_NAME, entityTitle);
      intent.putExtra(IALSupporrtActivity.KEY_SERVER_URL, serverURL);
      intent.putExtra(IALSupporrtActivity.KEY_USERNAME, username);
      intent.putExtra(IALSupporrtActivity.KEY_PASSWORD, password);

        this.cordova.getActivity().startActivity(intent);
    }
}