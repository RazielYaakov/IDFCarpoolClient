import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

export default async() => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  // only asks if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  // On Android, permissions are granted on app installation, so
  // `askAsync` will never prompt the user

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    alert('התראות אינן מאופשרות, לא יהיה ניתן לעדכן אותך על נסיעה חדשה');
    return;
  }

  // Get the token that identifies this device
  let token = Notifications.getExpoPushTokenAsync();

  console.log(token);
  return token;
}
