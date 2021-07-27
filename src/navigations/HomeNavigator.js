import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AUTH_PAGE, CLAIM_PAGE, HOME_PAGE, LOGIN_PAGE,INCIDENT_PAGE } from '../constants/routeNames';
import HomeScreen from '../screens/HomeScreen';
import ClaimScreen from '../screens/ClaimScreen';
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';
import IncidentScreen from '../screens/IncidentScreen';

const HomeNavigator = () => {
    const Home = createStackNavigator();
    return (
        <Home.Navigator initialRouteName={HOME_PAGE} 
        screenOptions={{ headerStyle: { backgroundColor: '#8e419c' } ,
        headerTintColor: '#fff'}}>
            <Home.Screen name={HOME_PAGE} component={HomeScreen}/>
            <Home.Screen name={CLAIM_PAGE} component={ClaimScreen}/>
            <Home.Screen name={AUTH_PAGE} component={AuthScreen}/>
            <Home.Screen name={LOGIN_PAGE} component={LoginScreen}/>
            <Home.Screen name={INCIDENT_PAGE} component={IncidentScreen}/>
        </Home.Navigator>
    )
}

export default HomeNavigator
