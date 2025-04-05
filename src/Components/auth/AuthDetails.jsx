import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Вы вышли"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <div>
          <p>{`Вы авторизованы как ${authUser.email}`}</p>
          <button onClick={userSignOut}>Выйти</button>
        </div>
      ) : (
        <div>
          <p>Вы не авторизованы</p>
          <button>Войти</button>
          <button>Регистрация</button>
        </div>
      )}
    </div>
  );
};

export default AuthDetails;
