import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Overlay, Input, Button } from 'react-native-elements'
import CreatePet from './CreatePet';
import DrawerNavigator from "./CreatePet";


export default function AddPetModal ({addPetModal, setAddPetModal}) {

 
    return (
        <Overlay isVisible={addPetModal} onBackdropPress={() => setAddPetModal(!addPetModal)}>
            <ScrollView>
                <View style={styles.viewForm}>
                    <CreatePet />
                    <Button
                        title='Agregar mascota'
                        containerStyle={styles.btnAddArticle}
                        buttonStyle={styles.btnSendOrder}
                        onPress={() => console.log()}
                    />
                </View>
            </ScrollView>
           
        </Overlay>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        marginLeft: 10,
        marginRight: 10
    },
    input: {
        marginBottom: 10
    },
    scrollView: {
        height: '100%',
        marginTop: 20
    },
    btnContainer: {
        marginTop: 50,
        width: '90%',
        marginLeft: '5%'
    },
    btnSendOrder: {
        backgroundColor: '#00a680'
    },
    btnAddArticle: {
        marginTop: 10,
        width: '90%',
        marginLeft: '5%',
        marginBottom: 15
    },
})