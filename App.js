import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.greeting}>
        <Text>
          Hello Avazkhon!
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  greeting: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 50,
    color: 'green',
  }
});

export default App;
