import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, MD3LightTheme, adaptNavigationTheme} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {MagicSheetPortal} from 'react-native-magic-sheet';
import 'react-native-gesture-handler';
import Home from './screen/Home';
import UIComponent from './screen/UIComponent';
import MyTab from './screen/MyTab';
import MyDrawer from './screen/MyDrawer';
import MyTop from './screen/MyTop';
import Web from './screen/Web';

const Stack = createNativeStackNavigator();
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

export default function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
        <GestureHandlerRootView style={{flex: 1}}>
            <BottomSheetModalProvider>
                <MagicSheetPortal />  
                <NavigationContainer theme={LightTheme}>
                  <Stack.Navigator initialRouteName="Home" screenOptions={{}}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="UIComponent" component={UIComponent} />
                    <Stack.Screen name="Tab" component={MyTab} />
                    <Stack.Screen name="Drawer" component={MyDrawer} />
                    <Stack.Screen name="Top" component={MyTop} />
                    <Stack.Screen name="Web" component={Web} />
                  </Stack.Navigator>
                </NavigationContainer>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    </PaperProvider>
  );
}