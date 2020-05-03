import firebase from "firebase";
import clientCredentials from "../../../credentials/client";

function firebaseInit() {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials);
    }
  } catch (e) {
    console.error(e);
  }
}
firebaseInit();
