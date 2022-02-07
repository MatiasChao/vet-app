import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Overlay, Input, Button } from 'react-native-elements'

export default function AddPetModal ({addPetModal, setAddPetModal}) {

 
    return (
        <Overlay isVisible={addPetModal} onBackdropPress={() => setAddPetModal(!addPetModal)}>
            <View style = { styles.viewForm }>    
                <Input 
                    placeholder = 'Nombre'
                    containerStyle = { styles.input }
                    // onChange = { e => onChangeSetArticle(e.nativeEvent.text, 'articleName') }
                />
                <Text>Lista animales</Text>
                <Text>Lista razas dependiendo animal que elije</Text>
                {/* <View style = { styles.container }>
                    <CheckBox
                        center
                        title='Kilogramo'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle = { styles.checkbox }
                        checked={article.articleWeightType === 'kilogramo'}
                        onPress = { e => onChangeSetArticle('kilogramo', 'articleWeightType') }
                    />
                    <CheckBox
                        center
                        title='Tira'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle = { styles.checkbox }
                        checked={article.articleWeightType === 'tira'}
                        onPress = { e => onChangeSetArticle('tira', 'articleWeightType') }
                    />
                </View> */}
                {/* <View style = { styles.container }>
                    <CheckBox
                        center
                        title='Unidad'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle = { styles.checkbox }
                        checked={article.articleWeightType === 'unidad'}
                        onPress = { e => onChangeSetArticle('unidad', 'articleWeightType') }
                    />
                </View> */}
                {/* <Input 
                    placeholder = 'Cantidad'
                    containerStyle = { styles.input }
                    onChange = { e => onChangeSetArticle(e.nativeEvent.text, 'articleCount') }
                /> */}
                {/* {
                    showAddArticleError && 
                    <Text style = { styles.textAddArticleError }>
                        Los campos no pueden ser vacios
                    </Text>
                } */}
                <Button 
                    title = 'Agregar mascota'
                    containerStyle = { styles.btnAddArticle }
                    buttonStyle = { styles.btnSendOrder }
                    onPress = { () => console.log() }
                />
            </View>
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