// NotificationPermission.js
import React, { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

const NotificationPermission = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const token = await getToken(messaging, {
          vapidKey: "YOUR_VAPID_KEY",
        });
        console.log("FCM Token:", token);
      } catch (error) {
        console.error("Error getting FCM token:", error);
      }
    };

    requestPermission();
  }, []);

  return <div>Notification Permission Component</div>;
};

export default NotificationPermission;
