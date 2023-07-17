import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} width={100} height={100}/>
    </View>
  )
}