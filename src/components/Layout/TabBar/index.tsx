/* eslint-disable @typescript-eslint/no-unused-vars */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Image,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopColor: 'rgba(0, 0, 0, 0.5)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(255, 255, 255, 0)',
        justifyContent: 'space-around',
        paddingTop: 8,
        paddingBottom: insets.bottom + 10,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        position: 'relative',
        backgroundColor: '#fff',
      }}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isActions = route.name === 'Partiaf';
        const itemColor = 'rgba(0, 0, 0,0.8)';

        let iconName = '';
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home-sharp' : 'home-outline';
            break;
          default:
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Animated.View key={route.name}>
            <TouchableOpacity onPress={onPress}>
                <View style={{alignItems: 'center'}}>                  
                    <Icon name={iconName} size={25} color="rgba(0,0,0,0.8)" />
                </View>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default TabBar;