import { registerPlugin } from '@capacitor/core';

export interface LocalePlugin {
  getCountryCode(): Promise<{┬ácountryCode: string }>;
}

export const Locale = registerPlugin<LocalePlugin>('Locale');
