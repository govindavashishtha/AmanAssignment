import React, { useContext } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ThemeContext } from '../../App';
import {IButton} from './AddButton';

const ThemeButton = ({title, onPress, textUpperCase}: IButton): JSX.Element => {
  const {appColors} = useContext(ThemeContext);

  const styles = EStyleSheet.create({
    container: {
      backgroundColor: appColors.primary,
      padding:'1rem',
      margin:  '1rem',
      borderRadius: 5,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      height: '3.5rem',
    },
    button: {
      color: "white",
      fontSize: '1.12rem',
      alignItems: 'center',
      fontWeight: 'bold',
    },
  });

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


