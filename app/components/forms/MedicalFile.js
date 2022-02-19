import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View, TextInput, Button } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import Input from '../utilities/Input';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function MedicalFile() {
  const [isBillingDifferent, setIsBillingDifferent] = useState(false);
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const toggleBilling = () => {
    setIsBillingDifferent((prev) => !prev);
  };



  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  }
  const [value, onChangeText] = useState('');
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


  const shortDate = () =>{
    var month = date.getMonth() + 1
    var day = date.getDay();
    var year = date.getFullYear();
    var shortStartDate = month + "/" + day + "/" + year;
    return shortStartDate;
  }

  //// END TO DELETE ///

  return (
    <View style={styles.container}>
      <Text style={styles.switchText}>Ficha Clínica</Text>
      <View>
        <View style={{ flexDirection: 'row' }}>
        <Button styles={{ width: '20%', heigth : 20 }}  onPress={showDatepicker} title="Show" />
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
      <Input placeholder="Motivo Consulta" />
      <Text>ANAMNESIS</Text>
      <View
        style={{
          width: '100%',
          backgroundColor: value,
          borderColor: '#000000',
          borderWidth: 1,
        }}>
        <UselessTextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={text => onChangeText(text.value)}
          value={value}
          style={{ padding: 10 }}
        />
      </View>
      <Text>REMOTA</Text>
      <View
        style={{
          width: '100%',
          backgroundColor: value,
          borderColor: '#000000',
          borderWidth: 1,
        }}>
        <UselessTextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={text => onChangeText(text.value)}
          value={value}
          style={{ padding: 10 }}
        />
      </View>
      <Text>PROXIMA</Text>
      <View
        style={{
          width: '100%',
          backgroundColor: value,
          borderColor: '#000000',
          borderWidth: 1,
        }}>
        <UselessTextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={text => onChangeText(text.value)}
          value={value}
          style={{ padding: 10 }}
        />
      </View>
    </View>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800, t.text2xl, t.pT4],
  item: {
    width: '100%', // is 50% of container width,
    padding: '20px !important',
    borderRadius: 10,
    marginVertical: '100px !important',
    backgroundColor: '#2089dc',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
};