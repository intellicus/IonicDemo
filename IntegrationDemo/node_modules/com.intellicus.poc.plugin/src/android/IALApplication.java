package com.intellicus.poc.plugin.application;


import android.app.Application;

import com.intellicus.android.lib.IALLibInitializeInfo;
import com.intellicus.android.lib.IntellicusAndroidApp;


public class IALApplication extends Application {
	@Override
	public void onCreate() {
		super.onCreate();
		IALLibInitializeInfo initInfo = new IALLibInitializeInfo();
		initInfo.setApp(this);

	IntellicusAndroidApp instance = IntellicusAndroidApp.getInstance();
	instance.initializeLibrary(initInfo);
	instance.readPersistentInfo();
		
	}
}

