import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountStack from './AccountStack'
import DashboardStack from './DashboardStack'
import PetListStack from './PetListStack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Tab = createBottomTabNavigator()

export default function TabNavigator() {

    const [logged, setLogged] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("USER: ", user);
            !user ? setLogged(false) : setLogged(true)
        })
    }, []);

    return (
        <Tab.Navigator
            initialRouteName={logged ? 'dashboard' : 'login'}
            tabBarOptions={{
                inactiveTintColor: '#646464',
                activeTintColor: '#00a680'
            }}
            // tabBarVisible
            screenOptions={(data) => ({
                tabBarVisible: false,//!!logged,
                tabBarIcon: ({ color }) =>
                    screenOptions(data.route, color, logged),
            })
            }
        >
            {logged ? (
                <>
                    <Tab.Screen
                        name="Inicio"
                        component={DashboardStack}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Tab.Screen
                        name="petStack"
                        component={PetListStack}
                        options={{
                            headerShown: false,
                        }}
                    />
                </>
            )
                :
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false
                    }}
                />
            }
        </Tab.Navigator>
    )
}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "Inicio":
            iconName = "home"
            break;
        case "petStack":
            iconName = "paw"
            break;
        default:
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}