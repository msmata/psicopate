import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {InfoPerfil} from '../../../vistas/InfoPerfil';

storiesOf('InfoPerfil', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <InfoPerfil />);
