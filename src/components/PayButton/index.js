import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Button, Label }from './styles';

export default function PayButton({ onPress, focused }){
  return(
    <TouchableWithoutFeedback onPress={onPress} >
      <Button
        colors={
          focused
          ? ['#00fc6c', '#00ac4a']
          : ['#00ac4a', '#00fc6c']
        }
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30} 
          color={focused ? '#fff' : '#fff'} />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  )
}