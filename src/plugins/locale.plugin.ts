import { registerPlugin } from '@capacitor/core';

export interface LocalePlugin {
  getCountryCode(): Promise<{ countryCode: string }>;
}

export const Locale = registerPlugin<LocalePlugin>('Locale');
