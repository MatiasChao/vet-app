import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Text , View, StyleSheet } from 'react-native'
import { ListItem, Avatar, Button } from 'react-native-elements'
import AddPetModal from '../components/modals/AddPetModal';
import { auth } from '../firebase/firebase';

import PetService from '../services/pet.service';

export const PetList = ({}) => {

    const pet = {
        id: '12345',
        name: 'Hammer',
        photo: "require('../../assets/hammer.jpeg')",
        especie: 'Perro',
        nacimiento: "nacimiento",
        raza : 'Bulldog Inglés',
        edad: "20",
        sexo : "masculino"
      }
    const [petList, setPetList] = useState([pet])
    const [user, setUser] = useState({})
    const [addPetModal, setAddPetModal] = useState(false);

    useEffect(() => {
        // getAllPetsByUserId();
        if(user) {
            console.log("User Logged: ", user)
        }
    }, [])

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const addPetList = (pet : any) => {
        console.log("datazo?", pet);
        setPetList([...petList,pet]);
        setAddPetModal(false)
    }

    const getAllPetsByUserId = async () => {
        try {
            await PetService.instance.getAllPetsByUserId();
        } catch (error) {
            console.log("Error al obtener la mascotas del usuario ", error)
        }
    }

    return (
        <View>
            <View>
                {
                    petList && petList.map((pet, i) => (
                        <ListItem key={i} bottomDivider>
                          <Avatar source={{uri: pet.photo}} />
                          <ListItem.Content>
                            <ListItem.Title>{pet.name}</ListItem.Title>
                            <ListItem.Subtitle>{pet.breed}</ListItem.Subtitle>
                          </ListItem.Content>
                        </ListItem>
                      ))
                }
            </View>

            <View>
            <Button
                title="Agregar mascota"
                type="outline"
                onPress={() => setAddPetModal(true)}
                />
            </View>

            {
                addPetModal &&  <AddPetModal addPetModal = { addPetModal } setAddPetModal = { setAddPetModal } setPetList = {addPetList} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
}) 