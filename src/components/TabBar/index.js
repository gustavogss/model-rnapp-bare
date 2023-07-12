import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../pages/Home';
import {Feather} from '@expo/vector-icons'
import global from '../../theme/global';

const Tab = createBottomTabNavigator();

export function TabBar() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,        
        tabBarHideOnKeyboard: true,        
        tabBarActiveTintColor: '#f8f8f6',
        tabBarStyle: {
          backgroundColor: '#212121',
          borderTopWidth: 0,           
        }
      }}
    >
      <Tab.Screen 
      name="homeButton" 
      component={Home} 
      options={{
        tabBarIcon: ({color, size})=>{
            return <Feather name='homeButton' color={global.iconColor} size={24}/>
        },
      }}
      />      
    </Tab.Navigator>
  );
}