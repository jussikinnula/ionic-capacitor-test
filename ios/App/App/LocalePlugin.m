#import <Capacitor/Capacitor.h>

CAP_PLUGIN(LocalePlugin, "LocalePlugin",
           CAP_PLUGIN_METHOD(getCountryCode, CAPPluginReturnPromise);
)
