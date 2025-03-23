import { Header } from '@/components/header';
import { List } from '@/components/list';
import StatusSelect from '@/components/status-select';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <StatusSelect />
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle: 'solid',
    paddingTop: 16,
    backgroundColor: '#06080c',
    marginBottom: -34,
  },
  text: {
    color: 'black',
    fontSize: 40,
  },
});
