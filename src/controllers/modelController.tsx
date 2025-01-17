import React, { useEffect, useState } from 'react';
import LoginScreen from '../views/loginScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../types/TNavigation';
import { instanceAxios, instanceAxiosLogin } from '../services/axios';
import { Alert } from 'react-native';
import HomeScreen from '../views/homeScreen';
import { CarBrand } from '../types/THome';
import ModelScreen from '../views/modelScreen';

type TProps = NativeStackScreenProps<StackNavigatorParamList, 'Model'>

const ModelController: React.FC<TProps> = ({navigation, route}) => {

  const {brand, id} = route.params

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModels, setIsModels] = useState<CarBrand[]>()

  const getBrands = async () => {
		setIsLoading(true)
    instanceAxios.get(`/${id}/modelos`)
    .then(function (response) {
      setIsModels(response.data.modelos)
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

  const handlePress = () => {
    navigation.goBack();
  };

  return <ModelScreen navigation={handlePress} brandName={brand} carModels={isModels} isLoading={isLoading} />;
};

export default ModelController;