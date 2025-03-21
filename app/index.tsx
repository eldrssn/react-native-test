import { fetchMatches } from '@/api';
import { Header } from '@/components/header';
import { List } from '@/components/list';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    padding: 16,
    backgroundColor: '#06080c',
  },
  text: {
    color: 'black',
    fontSize: 40,
  },
});
