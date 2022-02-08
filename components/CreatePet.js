import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { t, color } from 'react-native-tailwindcss';

import Input from './Input';
import Button from './Button';

export default function CreatePet() {
  const [isBillingDifferent, setIsBillingDifferent] = useState(false);

  const toggleBilling = () => {
    setIsBillingDifferent((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.switchText}>Mascota</Text>
      <Input placeholder="Nombre" />
      <Input placeholder="Especie" />
      <Input placeholder="Fecha Nacimiento" />
      <Input placeholder="Raza" />
      <Input placeholder="Edad" />
      <Input placeholder="Sexo" />
      {/* <View style={styles.switch}>
        <Text style={styles.switchText}>Billing different</Text>
        <Switch
          trackColor={{ false: color.gray200, true: color.green600 }}
          thumbColor={color.gray100}
          ios_backgroundColor={color.gray800}
          onValueChange={toggleBilling}
          value={isBillingDifferent}
        />
      </View>
      {isBillingDifferent && (
        <>
          <Input placeholder="Billing name" />
          <Input placeholder="Billing email" />
        </>
      )} */}
      <Button label="Cancelar" />
      <Button label="Agregar" />
      {/* </View> */}

    </View>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800, t.text2xl, t.pT4],
  item: {
    width: '50%', // is 50% of container width,
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