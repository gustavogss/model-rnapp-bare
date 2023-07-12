import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cabeçalho</Text>
    </View>
  )
}