import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import { Overlay, Input, Button } from 'react-native-elements'

export default function CreatePet() {
  const [isBillingDifferent, setIsBillingDifferent] = useState(false);

  const toggleBilling = () => {
    setIsBillingDifferent((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Nombre" />
      <Input placeholder="Especie" />
      <Input placeholder="Fecha Nacimiento" />
      <Input placeholder="Raza" />
      <Input placeholder="Edad" />
      <Input placeholder="Sexo" />
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