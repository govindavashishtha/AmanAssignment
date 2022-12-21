import React, { useContext } from "react";
import {View, FlatList, TouchableOpacity, Button} from 'react-native';
import AddButton from '../components/AddButton';
import EStyleSheet from 'react-native-extended-stylesheet';
import ListCard from '../components/ListCard';
import {useDispatch, useSelector} from 'react-redux';
import {deleteItem} from '../redux/itemSlice';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ConfirmDialog from '../components/ConfirmBox';
import { ThemeContext } from "../../App";

export interface IListItem {
  id: string;
  title: string;
  description: string;
}

const ListScreen = ({navigation, route}): JSX.Element => {
  const itemsList = useSelector(state => state.item);
  const { appColors } = useContext(ThemeContext);
  const handlePress = (): void => {
    navigation.navigate('AddItem');
  };
  const dispatch = useDispatch();
  let row: Array<IListItem> = [];
  let prevOpenedRow;

  const deleteCurrItem = ({item}: {item: IListItem}): void => {
    ConfirmDialog(
      `Delete ${item?.title}`,
      'Sure to delete?',
      () => {
        dispatch(deleteItem(item?.id));
      },
      () => {
        // cancel pressed
      },
    );
  };

  const renderItem = ({item, index}, onClick): JSX.Element => {
    const closeRow = (index): void => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick): JSX.Element => {
      return (
        <View style={styles.deleteButton}>
          <Button color="red" onPress={onClick} title="Delete" />
        </View>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={ref => (row[index] = ref)}
        rightOpenValue={-100}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('AddItem', {item: item});
          }}>
          <ListCard item={item} />
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <>
      <View style={{
        flex: 1,
        backgroundColor: appColors.screenBackground
      }}>
        <FlatList
          data={itemsList}
          renderItem={item =>
            renderItem(item, () => {
              deleteCurrItem(item);
            })
          }
          keyExtractor={item => item?.id}
        />
      </View>
      <AddButton
        textUpperCase={false}
        title={'New Item'}
        onPress={() => {
          handlePress();
        }}
      />
    </>
  );
};

const styles = EStyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  deleteButton: {
    marginHorizontal: '.5rem',
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
  },
});

export default ListScreen;
