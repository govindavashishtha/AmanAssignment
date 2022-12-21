import React, { useContext } from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ThemeContext } from '../../App';

export interface IButton {
  title: string;
  onPress: any;
  textUpperCase?: boolean;
  lock?: boolean;
}

const AddButton = ({title, onPress, textUpperCase}: IButton): JSX.Element => {
  const {appColors} = useContext(ThemeContext);

  const styles = EStyleSheet.create({
    container: {
      backgroundColor: appColors.appBackground,
      paddingHorizontal: '1rem',
      borderRadius: 5,
      overflow: 'hidden',
      justifyContent: 'center',
      minHeight: Platform.OS === 'ios' ? '3.2rem' : '2.9rem',
      flexDirection: 'row',
      position: 'absolute',
      bottom: '1rem',
      right: '1.5rem',
      alignItems: 'center',
    },
    button: {
      color: appColors.text,
      fontSize: '1rem',
      alignSelf: 'center',
      marginLeft: '.35rem',
      maxWidth: '13rem',
    },
    iconSize: {
      fontSize: '1.3rem',
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon1
        name={'plus'}
        size={styles._iconSize.fontSize}
        color={'white'}
      />
      <Text
        numberOfLines={2}
        style={[styles.button]}>
        {textUpperCase
          ? title.toUpperCase() : title}
      </Text>
    </TouchableOpacity>
  );
};
export default AddButton;


