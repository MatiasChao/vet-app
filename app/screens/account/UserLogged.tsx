import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import Toast from 'react-native-easy-toast'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// import Loading from '../../components/Loading'
// import InfoUser from './InfoUser'
// import AccountOptions from '../../components/Account/AccountOptions'

export default function UserLogged() {

    const [userInfo, setUserInfo] = useState()
    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState('')
    const [realoadUserInfo, setReloadUserInfo] = useState(false)
    const toastRef = useRef()

    const auth = getAuth();

    useEffect(() => {
        (async () => {
            const user = auth.currentUser

            setUserInfo(user)
        })()
        setReloadUserInfo(false)
    }, [realoadUserInfo])

    return(
        <View style={styles.viewUserInfo}> 

            {/* {
                userInfo &&
                <InfoUser 
                    userInfo = { userInfo }
                    toastRef = { toastRef }
                    loading = { loading }
                    setLoading = { setLoading }
                    setLoadingText = { setLoadingText }
                />
            }

            <AccountOptions
                userInfo = { userInfo }
                toastRef = { toastRef }
                setReloadUserInfo = { setReloadUserInfo }
            /> */}

            <Button 
                title = 'Cerrar sessión' 
                buttonStyle = {styles.btnCloseSession}    
                titleStyle = {styles.btnCloseSessionText}
                onPress = {() => firebase.auth().signOut()} 
            />
            {/* <Toast 
                ref = { toastRef }
                position = 'center'
                opacity = { 0.9 }
            /> */}
            {/* <Loading 
                text = { loadingText }
                isVisible = { loading }
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfo: {
        minHeight: '100%',
        backgroundColor: '#f2f2f2'
    },
    btnCloseSession: {
        marginTop: 30,
        borderRadius: 0,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e3e3e3',
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnCloseSessionText: {
        color: '#00a680'
    }
})