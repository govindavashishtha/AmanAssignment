import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../screens/ListScreen';
import AddItemScreen from '../screens/AddItemScreen';

const Stack = createStackNavigator();

const MyStack = (): JSX.Element => {
  const List = ({navigation, route}) => {
    return <ListScreen navigation={navigation} route={route} />;
  };

  const AddItem = ({navigation, route}) => {
    return <AddItemScreen navigation={navigation} route={route} />;
  };

  return (
    <Stack.Navigator initialRouteName={'List'}>
      <Stack.Screen name="Home" component={List} />
      <Stack.Screen name="AddItem" component={AddItem} />
    </Stack.Navigator>
  );
};

export default MyStack;
