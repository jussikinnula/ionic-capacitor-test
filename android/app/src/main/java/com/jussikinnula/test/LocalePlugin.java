package com.jussikinnula.test;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Locale;

@CapacitorPlugin(name = "Locale")
public class LocalePlugin extends Plugin {
  @PluginMethod()
  public void getCountryCode(PluginCall call) {
    JSObject ret = new JSObject();
    // getCountry() will default to "US" on devices without SIM card inserted
    final String countryCode = Locale.getDefault().getCountry();;
    ret.put("countryCode", countryCode);
    call.resolve(ret);
  }
}
