import React from 'react';
import {View, TouchableOpacity, ScrollView, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

interface IHeader {
  onBackPress?: Function;
  back?: boolean;
  title: string;
}

const Header = ({onBackPress, back = false, title}: IHeader) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowFar}>
        <View style={styles.row1}>
          {back ? (
            <TouchableOpacity
              style={{
                fontSize: 30,
                color: "red",
                fontWeight: 'bold',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                onBackPress ? onBackPress() : null;
              }}>
              <Icon
                name={'arrow-back-outline'}
                color={'white'}
                size={styles._iconSize.fontSize}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <ScrollView horizontal={true}>
          <Text style={styles.text}>{title}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.6rem',
    marginBottom: '.5rem',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowFar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: '1.3rem',
    lineHeight: '2rem',
    fontWeight: 'bold',
    color: "red",
    marginLeft: 15,
    textAlignVertical: 'center',
  },
  iconSize: {
    fontSize: '1.8rem',
  },
});

export default Header;
