import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import styled from 'styled-components/native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

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

export const InfoPerfil = () => {
  const [radioButtonSexo, setRadioButtonSexo] =
    useState<RadioButtonProps[]>(radioButtonSexoData);

  const onPressRadioButtonSexo = (radioButtonsArray: RadioButtonProps[]) => {
    setRadioButtonSexo(radioButtonsArray);
  };

  return (
    <View>
      <Text>Cargá tu información de perfil</Text>
      <FilaFormulario>
        <Text>Nombre</Text>
        <InputTexto maxLength={40} />
      </FilaFormulario>
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
        radioButtons={radioButtonSexo}
        layout="row"
        onPress={onPressRadioButtonSexo}
      />
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
