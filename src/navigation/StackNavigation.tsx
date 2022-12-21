import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../screens/ListScreen';
import AddItemScreen from '../screens/AddItemScreen';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Stack = createStackNavigator();

const MyStack = (): JSX.Element => {
  const {appColors} = useContext(ThemeContext)
  const List = ({navigation, route}) => {
    return <ListScreen navigation={navigation} route={route} />;
  };

  const AddItem = ({navigation, route}) => {
    return <AddItemScreen navigation={navigation} route={route} />;
  };

  return (
    <Stack.Navigator initialRouteName={'List'} 
    screenOptions={() => ({
      headerStyle: {
        backgroundColor: appColors.appBackground
      }
    })}>
      <Stack.Screen name="Home" component={List} 
          options={{title: 'All Items',
          headerTitleStyle: {
            color: appColors.text
          },}} />
      <Stack.Screen name="AddItem" component={AddItem} options={{title: 'Add New Items',
          headerTitleStyle: {
            color: appColors.text
          },}} />
    </Stack.Navigator>
  );
};

export default MyStack;
