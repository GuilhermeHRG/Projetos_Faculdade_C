import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Senhas } from './pages/senhas';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#fff',
                    },
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={30} color={'#034159'} name="home" />;
                        }
                        return <Ionicons size={size} color={color} name="home-outline" />;
                    },
                }}
            />

            <Tab.Screen
                name="senhas"
                component={Senhas}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#fff',
                    },
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={30} color={'#034159'} name="lock-closed" />;
                        }
                        return <Ionicons size={size} color={color} name="lock-closed-outline" />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}
