import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IListItem} from '../screens/ListScreen';
import ExtendedLine from './ExtendedLine';
import {ThemeContext} from '../../App';

interface IProps {
  item: IListItem;
}

const ListCard = ({item}: IProps): JSX.Element => {
  const {appColors} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: appColors.secondary}]}>
      <View style={{flex: 1}}>
        <View>
          <Text style={styles.title}>{item?.title}</Text>
        </View>
        <View style={styles.marginVertical}>
          <ExtendedLine />
        </View>
        <View>
          <Text style={styles.description}>{item?.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  description: {
    fontSize: '1rem',
      color: 'black',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '.93rem',
    marginVertical: '.5rem',
    borderRadius: '.5rem',
    padding: '.8rem',
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  marginVertical: {
    marginVertical: '.5rem',
  },
});

export default ListCard;
