#import <Capacitor/Capacitor.h>

CAP_PLUGIN(LocalePlugin, "Locale",
           CAP_PLUGIN_METHOD(getCountryCode, CAPPluginReturnPromise);
)
