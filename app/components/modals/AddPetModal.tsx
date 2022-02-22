import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Overlay, Input, Button } from 'react-native-elements'
import CreatePet from '../forms/CreatePet';
import DrawerNavigator from "../forms/CreatePet";


export default function AddPetModal ({addPetModal, setAddPetModal, setPetList}) {

    const addPet = (data: any) => {
        console.log("aca llega?")
        setPetList(data);
    }

    return (
        <Overlay isVisible={addPetModal} onBackdropPress={() => setAddPetModal(!addPetModal)}>
            <ScrollView>
                <View style={styles.viewForm}>
                    <CreatePet setPetList = {addPet} />
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