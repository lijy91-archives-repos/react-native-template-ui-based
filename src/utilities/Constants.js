import { Platform, StatusBar } from 'react-native';

if (!StatusBar.currentHeight) {
  StatusBar.currentHeight = 0;
}

export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export const LOCAL_STORAGE_LOGGED_JWT = 'app:logged_jwt';
export const LOCAL_STORAGE_LOGGED_USER = 'app:logged_user';
