import React, { useEffect, useState } from 'react';
import LoginScreen from '../views/loginScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../types/TNavigation';
import { instanceAxios, instanceAxiosLogin } from '../services/axios';
import { Alert } from 'react-native';
import HomeScreen from '../views/homeScreen';
import { CarBrand } from '../types/THome';

type TProps = NativeStackScreenProps<StackNavigatorParamList, 'Home'>

const HomeController: React.FC<TProps> = ({navigation, route}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBrans, setIsBrands] = useState<CarBrand[]>()

  const getBrands = async () => {
		setIsLoading(true)
    instanceAxios.get('')
    .then(function (response) {
      setIsBrands(response.data)
			setIsLoading(false)
		})
		.catch(function (error) {
			setIsLoading(false)
			Alert.alert(error.response.data.message);
		});
  };

  useEffect(() => {
    getBrands()
  },[])

  const handlePress = (id: string, brand: string) => {
    navigation.navigate('Model', {brand: brand, id: id})
  };

  return <HomeScreen carBrands={isBrans} handlePress={handlePress} isLoading={isLoading} />;
};

export default HomeController;