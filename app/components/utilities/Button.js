import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';

export default function Button({ label , ...props }) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props} style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: [t.selfStretch, t.bgGreen600, t.itemsCenter, t.pY3, t.rounded, {
    marginVertical: 10,
  }],
  buttonLabel: [t.textWhite, t.textLg]
};