import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import DocumentosNavigator from './DocumentosNavigator'
import AgendaScreen from '../screens/AgendaScreen'
import TareasScreen from '../screens/TareasScreen';

const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName='TareasTab'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}

    >
      <BottomTabs.Screen
        name="TareasTab"
        component={TareasScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <FontAwesome name="shopping-bag" size={24} color="black" />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Tareas</Text>
            </View>
          )
        }}
      />

      <BottomTabs.Screen
        name="DocsTab"
        component={DocumentosNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <FontAwesome name="shopping-cart" size={24} color="black" />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Documentos</Text>
            </View>
          )
        }}
      />

      <BottomTabs.Screen
        name="AgendaTab"
        component={AgendaScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <MaterialIcons name="list-alt" size={24} color="black" />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Agenda</Text>
            </View>
          )
        }}
      />

    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})