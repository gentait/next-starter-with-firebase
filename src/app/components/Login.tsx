import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/auth";
import clientCredentials from "../../../credentials/client";

export const Login: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  useEffect(() => {
    firebase.initializeApp(clientCredentials);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const handleLogin = (): void => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };
  const handleLogout = (): void => {
    firebase.auth().signOut();
  };
  return (
    <>
      {user ? (
        <div>
          <button onClick={handleLogout}>ログアウト</button>
          <p>{user.displayName}</p>
        </div>
      ) : (
          <button onClick={handleLogin}>Goolgleアカウントでログインする</button>
        )}
    </>
  );
};
