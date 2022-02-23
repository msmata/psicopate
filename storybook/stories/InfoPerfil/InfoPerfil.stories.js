import {storiesOf} from '@storybook/react-native';
import React from 'react';
import InfoPerfil from '.';
import CenterView from '../CenterView';

storiesOf('InfoPerfil', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <InfoPerfil />);
