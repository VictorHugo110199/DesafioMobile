import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Alert, TouchableOpacity, Platform } from 'react-native';
import { useAuth } from '../../contexts/authContext';
import { Styles } from './styles';
import { Screen } from '../../components/screen';
import { CarBrand } from '../../types/THome';

interface HomeProps {
  isLoading: boolean;
  carBrands?: CarBrand[];
  handlePress: (id: string, brand: string) => void
};

const HomeScreen: React.FC<HomeProps> = ({isLoading, carBrands, handlePress}) => {

  const { user } = useAuth(); 

  const renderItem = ({ item }: { item: CarBrand }) => (
    <TouchableOpacity onPress={() => handlePress(item.codigo, item.nome)}>
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
        <Styles.UserName>{user?.user || 'User'}!</Styles.UserName>
      </Styles.Header>

      <Styles.Content>
        {isLoading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={carBrands}
            keyExtractor={(item) => item.codigo}
            renderItem={renderItem}
          />
        )}
      </Styles.Content>
    </Screen>
  );
};

export default HomeScreen;