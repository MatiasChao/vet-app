import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../../components/Loading";
import Login from "./Login";
import { Dashboard } from "../Dashboard";

export default function Account() {
  const [login, setLogin] = useState(Boolean);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      console.log("USER: ", user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if(login === null) return <Loading isVisible = {true} text="Cargando..." />
  return login ? <Dashboard /> : <Login />
}
