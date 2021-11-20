import React, { useState, useEffect } from 'react'
// import * as firebase from 'firebase'
import UserLogged from './UserLogged'
import UserGuest from './UserGuest'
// import Loading from '../../components/Loading'
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native'

import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Account() {

    const [login, setLogin] = useState(null)
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            console.log("USER: ", user);
            !user ? setLogin(false) : setLogin(true)
        })
    }, [])

    // if(login === null) return <Loading isVisible = {true} text="Cargando..." />
    return login ? <UserLogged /> : <UserGuest />

    return <Text> Hola Account </Text>
}