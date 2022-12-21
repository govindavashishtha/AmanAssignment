import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IButton} from './AddButton';

const ThemeButton = ({title, onPress, textUpperCase}: IButton): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.button}>
        {textUpperCase
          ? title.toUpperCase() : title}
      </Text>
    </TouchableOpacity>
  );
};
export default ThemeButton;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "red",
    padding:'1rem',
    margin:  '1rem',
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: '3.5rem',
  },
  button: {
    color: "red",
    fontSize: '1.12rem',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
