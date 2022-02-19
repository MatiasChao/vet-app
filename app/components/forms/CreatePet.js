import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View, Button } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import { Overlay, Input } from 'react-native-elements'
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreatePet({ setPetList }) {
  const [isBillingDifferent, setIsBillingDifferent] = useState(false);
  const [name, setName] = useState("")
  const [especie, setEspecie] = useState("")
  const [nacimiento, setNacimiento] = useState("")
  const [raza, setRaza] = useState("")
  const [edad, setEdad] = useState("")
  const [sexo, setSexo] = useState("")
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  ////// to deleteeee //////

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const toggleBilling = () => {
    setIsBillingDifferent((prev) => !prev);
  };

  const shortDate = () =>{
    var month = date.getMonth() + 1
    var day = date.getDay();
    var year = date.getFullYear();
    var shortStartDate = month + "/" + day + "/" + year;
    return shortStartDate;
  }

  //// END TO DELETE ///

  const addPet = () => {
    let pet = {
      id: '12345',
      name: name,
      photo: "require('../../assets/hammer.jpeg')",
      especie: especie,
      nacimiento: nacimiento,
      raza: raza,
      edad: edad,
      sexo: sexo
    }
    setPetList(pet);
  }

  return (
    <View>
      <Input placeholder="Nombre" onChangeText={(text) => setName(text)} />
      <Input placeholder="Especie" onChangeText={(text) => setEspecie(text)} />
      <View>
        <View style={{ flexDirection: 'row', flex: 1 }}>
        <Button onPress={showDatepicker} title="Show" />
          <Input styles={{ width: '80%' }} value={shortDate()} />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      {/* <Input placeholder="Fecha Nacimiento" onChangeText={(text) => setNacimiento(text)} /> */}
      <Input placeholder="Raza" onChangeText={(text) => setRaza(text)} />
      <Input placeholder="Edad" onChangeText={(text) => setEdad(text)} />
      <Input placeholder="Sexo" onChangeText={(text) => setSexo(text)} />
      <Button
        title='Agregar mascota'
        containerStyle={styles.btnAddArticle}
        buttonStyle={styles.btnSendOrder}
        onPress={() => addPet()} />
    </View>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800, t.text2xl, t.pT4],
  buttons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
};