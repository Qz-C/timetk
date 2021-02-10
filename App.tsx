import React, {FC} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { OpenRealmBehaviorType } from 'realm';

import Home from './src/screens/newTask'

const App:FC = () => {
  return (
      <Home></Home>
  );
};

export default App;
