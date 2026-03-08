import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
          headerShown: false,

          tabBarActiveTintColor: '#25D366',
          tabBarInactiveTintColor: '#8E8E93',

          tabBarLabelPosition: "below-icon",//icones em cima

          tabBarStyle: {
          backgroundColor: '#0B1014',
          height: 70,
          paddingBottom: 8,//centraliza icones
          paddingTop: 6,
          borderTopWidth: 0,
        },

          tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Conversas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="update"
        options={{
          title: 'Atualizações',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="progress-clock"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="communities"
        options={{
          title: 'Comunidades',
          tabBarLabel: 'Comunidades',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="calls"
        options={{
          title: 'Chamadas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}