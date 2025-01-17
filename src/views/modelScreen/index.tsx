import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Alert, TouchableOpacity, Platform } from 'react-native';
import { useAuth } from '../../contexts/authContext';
import { Styles } from './styles';
import { Screen } from '../../components/screen';
import { CarBrand } from '../../types/THome';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ModelProps {
  isLoading: boolean;
  carModels?: CarBrand[];
  brandName: string;
  navigation: () => void;
};

const ModelScreen: React.FC<ModelProps> = ({isLoading, carModels, brandName, navigation}) => {

  const { user } = useAuth(); 

  const renderItem = ({ item }: { item: CarBrand }) => (
    <TouchableOpacity>
      <Styles.CarBrandItem>
        <Styles.CarBrandText>{item.nome}</Styles.CarBrandText>
      </Styles.CarBrandItem>
    </TouchableOpacity>
  );

  return (
    <Screen
      flex={1}
      background-color={'#f9f9f9'} 
      paddingTop={Platform.OS === "ios" ? 60 : 20}
    >
      <Styles.Header>
        <Styles.ArrowView onPress={navigation}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Styles.ArrowView>
        <Styles.UserName>{brandName}</Styles.UserName>
      </Styles.Header>

      <Styles.Content>
        {isLoading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={carModels}
            keyExtractor={(item) => item.codigo}
            renderItem={renderItem}
          />
        )}
      </Styles.Content>
    </Screen>
  );
};

export default ModelScreen;
