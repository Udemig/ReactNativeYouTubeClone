import {Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/navigations/BottomNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
