// PushNotificationHandler.js
import React, { useEffect } from "react";
import { onMessage } from "firebase/messaging";
import { messaging } from "./firebase";

const PushNotificationHandler = () => {
  useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log("Pesan diterima: ", payload);
      alert(`Notifikasi: ${payload.notification.title}`);
    });
  }, []);

  return <div>Handler Push Notification</div>;
};

export default PushNotificationHandler;
