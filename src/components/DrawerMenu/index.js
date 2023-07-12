import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../../pages/Home';

const Drawer = createDrawerNavigator();

export function DrawerMenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
      name="homeMenu" 
      component={Home} 
      />    
    </Drawer.Navigator>
  );
}