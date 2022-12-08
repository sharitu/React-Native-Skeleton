import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

import HomeScreen from '../screens/Home';
import ClosetScreen from '../screens/Closet';
import PinScreen from '../screens/Pinterest';
import SettingsScreen from '../screens/Settings';
import { useState } from "react";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Tabs = () => {
  const [ isAddScreenActive, setAddScreenActive ] = useState(false); // identify whether Add Item screen is active
  
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='CategoryList'
          component={HomeScreen}
          options={{
            title: 'My Wardrobe'
          }}
        />
        <Stack.Screen
          name='CategoryItems'
          component={ClosetScreen}
          // option={{
          //   title: 'My Wardrobe'
          // }}
        />
      </Stack.Navigator>
    );
  }
  const CustomTabBarButton = ({ children, onPress }) => (
    <Pressable
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...style.shadow
      }}
      onPress={onPress}
    >
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45'
      }}>
        { children }
      </View>
    </Pressable>
  );

  const onAddButtonPress = () => {
    setAddScreenActive(!isAddScreenActive);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        "tabBarShowLabel": false,
        "tabBarStyle":[{
          "position": "absolute",
          "bottom": 25,
          "left": 20,
          "right": 20,
          "elevation": 0,
          "backgroundColor": "#fff",
          "borderRadius": 15,
          "height": 90,
          ...style.shadow
        }, null]
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={
                  require('../assets/home.png')
                }
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#749c94'
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#749c94',
                  fontSize: 12
                }}
              >
                Home
              </Text>
            </View>
          ),
        headerShown: false
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Closet" 
        component={ClosetScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={
                  require('../assets/closet.png')
                }
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#749c94'
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#749c94',
                  fontSize: 12
                }}
              >
                Closet
              </Text>
            </View>
          ),
        }}
      >
      </Tab.Screen>
      <Tab.Screen 
        name="Add" 
        component={ClosetScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={
                isAddScreenActive ? require('../assets/cancel.png') : require('../assets/add.png')
              }
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff'
              }}
              onPress={onAddButtonPress}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              { ...props }
            />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Pin" 
        component={PinScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={
                  require('../assets/office-push-pin.png')
                }
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#749c94'
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#749c94',
                  fontSize: 12
                }}
              >
                Pins
              </Text>
            </View>
          ),
        }}
      >
      </Tab.Screen>
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={
                  require('../assets/setting.png')
                }
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#749c94'
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#749c94',
                  fontSize: 12
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      >
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

export default Tabs;