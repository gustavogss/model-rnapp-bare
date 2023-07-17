import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../pages/Home';
import {Feather} from '@expo/vector-icons'
import global from '../../theme/global';
import { theme } from '../../theme';

const Tab = createBottomTabNavigator();

export function TabBar() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,        
        tabBarHideOnKeyboard: true,        
        tabBarActiveTintColor: theme.colors.secondColor,
        tabBarStyle: {
          backgroundColor: theme.colors.textColorDark,
          borderTopWidth: 0,           
        }
      }}
    >
      <Tab.Screen 
      name="homeButton" 
      component={Home} 
      options={{
        tabBarIcon: ({color, size})=>{
            return <Feather name='homeButton' color={theme.colors.iconColor} size={24}/>
        },
      }}
      />      
    </Tab.Navigator>
  );
}