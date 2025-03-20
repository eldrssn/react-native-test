import { fetchMatches } from '@/api';
import { Header } from '@/components/header';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  useEffect(() => {
    const fetch = async () => {
      const matches = await fetchMatches();
      console.log('matches', matches);
    };

    fetch();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello world!</Text> */}
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 4,
    backgroundColor: '#06080c',
  },
  text: {
    color: 'black',
    fontSize: 40,
  },
});
