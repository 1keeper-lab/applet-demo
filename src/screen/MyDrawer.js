import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';

const Drawer = createDrawerNavigator();

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Recents" component={RecentsRoute} />
      <Drawer.Screen name="Notifications" component={NotificationsRoute} />
    </Drawer.Navigator>
  );
}