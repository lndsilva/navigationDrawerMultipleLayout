import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutStack } from "./Stacks/AppStack";

import SettingsScreen from "./components/SettingsScreen";
import CourseListScreen from "./components/CourseList";
import ProfileScreen from "./components/Profile";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          //tabBarShowLabel: false,
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "#333",
        }}
      >
        <Tab.Screen name="Course List" component={CourseListScreen} 
          options={{
            tabBarIcon: () => <Icon name='list-circle' size={20}/>
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: () => <Icon name={'person'} size={20} />,
            //tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen}
          options={{
            tabBarIcon: () => <Icon name='settings' size={20}/>
          }}
        />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name={'information-circle'} size={20} />,
          }}
          
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
