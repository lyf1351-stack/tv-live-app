import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TvScreen from './src/screens/TvScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <TvScreen />
    </SafeAreaProvider>
  );
};

export default App;
