import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Dashboard from './src/screens/dashbord';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden/>
      <Dashboard />
    </SafeAreaView>
  )
}

export default App
