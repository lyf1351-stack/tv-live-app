package com.tvlive.app;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import android.os.Bundle;
import android.view.View;

/**
 * Main Application class for VideoViewer app
 */
public class MainApplication extends ReactApplication {

    @Override
    protected String getMainComponentName() {
        return "tv-live-app";
    }

    @Override
    protected boolean isDebug() {
        return BuildConfig.DEBUG;
    }
}
