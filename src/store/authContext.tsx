import React, { useState, useEffect } from "react";
import { getUserInfo, postLogin, postLogout } from "../api/stateAPI";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email: string, password: string) => {},
  onUserInfo: () => {},
  token: "",
  refreshToken: "",
  userId: 0,
});

export const AuthContextProvider = (props: any) => {
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const token: string | null = localStorage.getItem("access_token");
    const refreshToken: string | null = localStorage.getItem("refresh_token");
    const userId: string | null = localStorage.getItem("userId");

    if (token !== null && refreshToken !== null) {
      if (!userLoggedIn && token?.length > 0 && refreshToken?.length > 0) {
        setuserLoggedIn(true);
        setToken(token);
        setRefreshToken(refreshToken);
        setUserId(Number(userId));
      }
    }
  }, []);

  const logoutHandler = () => {
    // Do something to log the user out
    if (token !== null && userLoggedIn) {
      postLogout(token)
        .then((data: any) => {
          if (data.status === 200) {
            localStorage.setItem("access_token", "");
            localStorage.setItem("refresh_token", "");
            setuserLoggedIn(false);
            setToken("");
            setRefreshToken("");
          } else {
            localStorage.setItem("access_token", "");
            localStorage.setItem("refresh_token", "");
            setuserLoggedIn(false);
            setToken("");
            setRefreshToken("");
          }
        })
        .catch((error) => {
          // Handle error
          console.log(error);
        });
    }
  };

  const userInfoHandler = () => {
    // Do something to log the user out
    if (token !== null && userLoggedIn) {
      // call useinfor api to get the user details
      getUserInfo(token)
        .then((data: any) => {
          if (data.status === 200) {
            setUserId(data.data.userId);
            localStorage.setItem("userId", data.data.userId);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const loginHandler = (email: string, password: string) => {
    postLogin({
      username: email,
      password: password,
    })
      .then((data: any) => {
        if (data.status === 200) {
          localStorage.setItem("access_token", data.data.access_token);
          localStorage.setItem("refresh_token", data.data.refresh_token);
          setuserLoggedIn(true);
          setToken(data.data.access_token);
          setRefreshToken(data.data.refresh_token);
        }
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: userLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onUserInfo: userInfoHandler,
        token: token,
        refreshToken: refreshToken,
        userId: userId,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
