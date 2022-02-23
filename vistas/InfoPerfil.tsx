import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export const InfoPerfil = () => {
  return (
    <View>
      <Text>Cargá tu información de perfil</Text>
      <View style={styles.filaFormulario}>
        <Text>Nombre</Text>
        <TextInput style={styles.inputNombre} maxLength={40} />
      </View>
      <View style={styles.filaFormulario}>
        <Text>Edad</Text>
        <TextInput style={styles.inputNombre} maxLength={3} />
      </View>
      <View style={styles.filaFormulario}>
        <Text>Mail</Text>
        <TextInput style={styles.inputNombre} maxLength={40} />
      </View>
      <View style={styles.filaFormulario}>
        <Text>Teléfono</Text>
        <TextInput style={styles.inputNombre} maxLength={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filaFormulario: {flexDirection: 'row', marginTop: 20, alignItems: 'center'},
  inputNombre: {
    borderColor: '#000000',
    borderWidth: 1,
    marginLeft: 15,
    height: 35,
    width: 100,
  },
});
