import React from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';


const App = () => {
  
  return (
    <SafeAreaView style={styles.sectionView}>
      <Text>Olá mundo</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionView:{
    width:100,
    height:100,
     backgroundColor:'red'
  }
});

export default App;
