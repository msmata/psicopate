import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {Picker} from '@react-native-community/picker';

const radioButtonSexoData: RadioButtonProps[] = [
  {
    id: '1',
    label: 'Femenino',
    value: 'F',
  },
  {
    id: '2',
    label: 'Masculino',
    value: 'M',
  },
];

const radioButtonUbicacionData: RadioButtonProps[] = [
  {
    id: '1',
    label: 'CABA',
    value: 'CABA',
  },
  {
    id: '2',
    label: 'GBA',
    value: 'GBA',
  },
];

export const InfoPerfil = () => {
  const [radioButtonSexo, setRadioButtonSexo] =
    useState<RadioButtonProps[]>(radioButtonSexoData);

  const [radioButtonUbicacion, setRadioButtonUbicacion] = useState<
    RadioButtonProps[]
  >(radioButtonUbicacionData);

  const [localidadSeleccionada, setLocalidadSeleccionada] = useState();

  const onPressRadioButtonSexo = (radioButtonsArray: RadioButtonProps[]) => {
    setRadioButtonSexo(radioButtonsArray);
  };

  const onPressRadioButtonUbicacion = (
    radioButtonsArray: RadioButtonProps[],
  ) => {
    setRadioButtonUbicacion(radioButtonsArray);
  };

  return (
    <View>
      <Text>Cargá tu información de perfil</Text>
      <FilaFormulario>
        <Text>Nombre</Text>
        <InputTexto maxLength={40} />
      </FilaFormulario>
      <RadioGroup
        radioButtons={radioButtonSexo}
        layout="row"
        onPress={onPressRadioButtonSexo}
      />
      <FilaFormulario>
        <Text>Edad</Text>
        <InputTexto maxLength={3} />
      </FilaFormulario>
      <FilaFormulario>
        <Text>Mail</Text>
        <InputTexto maxLength={40} />
      </FilaFormulario>
      <FilaFormulario>
        <Text>Teléfono</Text>
        <InputTexto maxLength={40} />
      </FilaFormulario>
      <RadioGroup
        radioButtons={radioButtonUbicacion}
        layout="row"
        onPress={onPressRadioButtonUbicacion}
      />
      <Picker
        selectedValue={localidadSeleccionada}
        onValueChange={(itemValue: any) => setLocalidadSeleccionada(itemValue)}>
        <Picker.Item label="Palermou" value="palermo" />
        <Picker.Item label="La Matanza" value="mordor" />
      </Picker>
      <Button title="Continuar" />
    </View>
  );
};

const FilaFormulario = styled(View)({
  flexDirection: 'row',
  marginTop: 20,
  alignItems: 'center',
});

const InputTexto = styled(TextInput)({
  borderColor: '#000000',
  borderWidth: 1,
  marginLeft: 15,
  height: 35,
  width: 100,
});
