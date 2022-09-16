import * as Notifications from 'expo-notifications';

export async function getPushNotificationsToken() {
    const { granted } = await Notifications.getPermissionsAsync();

    if (!granted) {
        await Notifications.requestPermissionsAsync();
    }

    if (granted) {
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log("NOTIFICATION TOKEN", pushToken.data)
    }
}