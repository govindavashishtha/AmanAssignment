import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../screens/ListScreen';
import AddItemScreen from '../screens/AddItemScreen';
import {useContext} from 'react';
import {ThemeContext} from '../../App';

const Stack = createStackNavigator();

const MyStack = (): JSX.Element => {
  const {appColors} = useContext(ThemeContext);
  const List = ({navigation, route}) => {
    return <ListScreen navigation={navigation} route={route} />;
  };

  const AddItem = ({navigation, route}) => {
    return <AddItemScreen navigation={navigation} route={route} />;
  };

  return (
    <Stack.Navigator
      initialRouteName={'List'}
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: appColors.primary,
        },
      })}>
      <Stack.Screen
        name="Home"
        component={List}
        options={{
          headerStyle: {
            backgroundColor: appColors.appBackground,
          },
          headerTintColor: appColors.text,
          title: 'Your Items',
          headerTitleStyle: {
            color: appColors.text,
          },
          headerBackTitleStyle: {
            color: appColors.text,
          },
        }}
      />
      <Stack.Screen
        name="AddItem"
        component={AddItem}
        options={{
          headerStyle: {
            backgroundColor: appColors.appBackground,
          },
          headerTintColor: appColors.text,
          title: 'Add Item',
          headerTitleStyle: {
            color: appColors.text,
          },
          headerBackTitleStyle: {
            color: appColors.text,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
