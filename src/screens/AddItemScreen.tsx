import React, { useEffect, useState, useRef, useContext } from "react";
import {TextInput} from 'react-native-paper';
import {
  View,
  TextInput as NativeTextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ThemeButton from '../components/ThemeButton';
import {IListItem} from './ListScreen';
import GenUtils from '../utils/GenUtils';
import {useDispatch} from 'react-redux';
import {addItem, editItem} from '../redux/itemSlice';
import {isEmpty} from 'lodash';
import SnackbarUtil, {EDuration} from '../utils/SnackBar';
import { ThemeContext } from "../../App";

const AddItem = ({navigation, route}): JSX.Element => {
  const item = route?.params?.item;
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const { appColors } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 0);
    if (!isEmpty(item)) {
      setTitle(item?.title);
      setDescription(item.description);
      setIsEdit(true);
    }
  }, []);

  const handleBackPress = (): void => {
    navigation.goBack();
  };

  const handleButtonPress = (): void => {
    if (isEmpty(title?.trim())) {
      SnackbarUtil.showSnackbar(
        "Title can't be empty",
        EDuration.Short,
        'Hide',
        "red",
        "red",
      );
      return;
    } else if (isEmpty(description?.trim())) {
      SnackbarUtil.showSnackbar(
        "Description can't be empty",
        EDuration.Short,
        'Hide',
        "red",
        "red",
      );
      return;
    }

    let obj: IListItem = {};
    obj.title = title?.trim();
    obj.description = description?.trim();
    if (isEdit) {
      obj.id = item?.id;
      dispatch(editItem(obj));
    } else {
      obj.id = GenUtils.getUUID();
      dispatch(addItem(obj));
    }
    Keyboard.dismiss();
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}
        style={styles.flex}>
        <View style={styles.inputContainer}>
          <TextInput
            label={'Title'}
            value={title}
            onChangeText={t => {
              setTitle(t);
            }}
            autoCorrect={false}
            mode="outlined"
            ref={inputRef}
            multiline={true}
            style={{width: '100%'}}
            theme={{
              colors: {
                text: "red",
                primary: "red",
                background: "red",
              },
            }}
            render={innerProps => (
              <NativeTextInput
                {...innerProps}
                style={[
                  innerProps.style,
                  Platform.OS === 'android'
                    ? {
                        paddingTop: 8,
                        paddingVertical: 8,
                        textAlignVertical: 'center',
                      }
                    : {},
                ]}
              />
            )}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            label={'Description'}
            multiline
            mode="outlined"
            numberOfLines={4}
            theme={{
              colors: {
                text: "red",
                primary: "red",
                background: "red",
              },
            }}
            value={description}
            onChangeText={t => {
              setDescription(t);
            }}
          />
        </View>
      </TouchableOpacity>
      <ThemeButton
        title={isEdit ? 'Edit' : 'Add'}
        onPress={() => {
          handleButtonPress();
        }}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  inputContainer: {
    marginHorizontal: '.7rem',
    marginVertical: '.4rem',
  },
  flex: {
    flex: 1,
  },
});

export default AddItem;
