import {Alert} from 'react-native';

const ConfirmDialog = (title: string, message: string, confirmFunction: Function, cancelFunction: Function) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        onPress: () => {
          cancelFunction ? cancelFunction() : console.log('Cancel Pressed');
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          confirmFunction();
        },
      },
    ],
    {cancelable: false},
  );

export default ConfirmDialog;