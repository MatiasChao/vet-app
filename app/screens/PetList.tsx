import React, { useState } from 'react'
import { Text , View, StyleSheet } from 'react-native'
import { ListItem, Avatar, Button } from 'react-native-elements'

import PetService from '../services/pet.service';

export const PetList = ({}) => {

    const pet = {
        id: '12345',
        name: 'Hammer',
        photo: "require('../../assets/hammer.jpeg')",
        owner: 'owner.id',
        weight: 33,
        breed: 'Bulldog Inglés'
    }
    const [petList, setPetList] = useState([pet])

    const getAllPetsByUserId = () => {
        
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
                />
            </View>
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