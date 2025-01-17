import React, { useState } from 'react';
import LoginScreen from '../views/loginScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../types/TNavigation';
import { instanceAxiosLogin } from '../services/axios';
import { Alert } from 'react-native';
import { useAuth } from '../contexts/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TProps = NativeStackScreenProps<StackNavigatorParamList, 'Login'>

const LoginController: React.FC<TProps> = ({navigation, route}) => {

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {setToken, setUser} = useAuth();

  const handleLogin = async (user: string, password: string) => {

		setIsLoading(true);

    instanceAxiosLogin.post('/signIn', {
      user: user,
      password: password
    }).then( async function (response) {
			if(!response.data.error){
				await AsyncStorage.setItem('token', response.data.user.token);
				setToken(response.data.user.token);
				setUser({user: response.data.user.name});
				setIsLoading(false);
				navigation.navigate('Home')
			}
		})
		.catch(function (error) {
			setIsLoading(false)
			Alert.alert(error.response.data.message);
		});
  };

  return <LoginScreen onLogin={handleLogin} isLoading={isLoading} />;
};

export default LoginController;
