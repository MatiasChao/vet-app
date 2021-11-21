import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

export default function Login() {

    const toastRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({email: String})

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                navigation.navigate('Home')
            }
        })
        return unsubscribe;
    }, [])

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log("USER: ", user)
        } catch (error) {
            console.log("Error al registrarse: ", error)
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("USER: ", user)
            });
            // console.log("USER: ", user)
        } catch (error) {
            console.log("Error al registrarse: ", error)
        }
    }

    const logout = async () => {
           await signOut(auth);
    }

    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        > 
            {/* <Image 
                source = {require('../../../assets/img/logo.png')} 
                resizeMode = 'contain'
                style = { styles.logo }
            /> */}

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => login()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => register()}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Registrarme</Text>
                </TouchableOpacity>
            </View>

            <Text>{user?.email}</Text>
        </KeyboardAvoidingView>
    )
}

// function CreateAccount() {

//     const navigation = useNavigation()

//     return (
//         <Text style={styles.textRegister}>
//             ¿Aún no tienes una cuenta? { ' ' }
//             <Text
//                 style={styles.btnRegister}
//                 onPress={() => navigation.navigate('register')}>
//                 Regístrate
//             </Text>
//         </Text>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    },
    logo: {
        width: '100%',
        height: 130,
        marginTop: 10
    },
    viewCointainer: {
        marginRight: 40,
        marginLeft: 40
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color: '#00a680',
        fontWeight: 'bold'
    },
    divider: {
        backgroundColor: '#00a680',
        margin: 40
    }
})