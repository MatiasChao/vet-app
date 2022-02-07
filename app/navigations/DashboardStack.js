import React from 'react'


import { Dashboard } from '../screens/Dashboard';
import { Button, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function DashboardStack() {

    const navigation = useNavigation();

    const goToMyAccount = () => {
        navigation.navigate('account');
      };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='dashboard'
                component={Dashboard}
                options={{
                    title: "Hola",
                    // headerShown: false,
                    // headerLeft: () => (        
                    //     <Icon type="material-community" name={'account'} size={22} />         
                    // )
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            style={styles.button}
                            type={'clear'}
                            color="#fff"
                            icon={
                                <Icon
                                    name="menu"
                                    type="material-community"
                                    color="black"
                                    size={24}
                                />
                            }
                        />
                    ),
                    headerRight: (props) =>
                        // <View>
                            <Button
                                {...props}
                                icon={
                                    <Icon
                                        name="account-edit"
                                        type="material-community"
                                        color="black"
                                        size={24}
                                    />
                                }
                                style={styles.button}
                                onPress={() => goToMyAccount()}
                                type={'clear'}
                            />
                        // </View>
                }}

            />
            {/* <Stack.Screen
                name="account"
                component={Account}
                options={{title: 'Mi Cuenta'}}
            /> */}
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
    },
});
