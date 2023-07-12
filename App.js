import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { Home } from './src/pages/Home'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});