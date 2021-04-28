import Capacitor
import Foundation

@objc(LocalePlugin)
public class LocalePlugin: CAPPlugin {
    @objc func getCountryCode(_ call: CAPPluginCall) {
        let countryCode = NSLocale.current.regionCode ?? "";
        call.resolve([
            "countryCode": countryCode
        ])
    }
}
