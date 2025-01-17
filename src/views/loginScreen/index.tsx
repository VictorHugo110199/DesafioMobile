// src/views/LoginScreen.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components/native';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginUserFormSchema } from '../../validator/schemaLogin';
import { ActivityIndicator } from 'react-native';
import { Styles } from './styles';
import { Screen } from '../../components/screen';

interface LoginProps {
  onLogin: (user: string, password: string) => void;
  isLoading: boolean;
}

const LoginScreen: React.FC<LoginProps> = ({ onLogin, isLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { user: '', password: '' },
    resolver: zodResolver(LoginUserFormSchema)
  });

  const onSubmit = (data: { user: string; password: string }) => {
    onLogin(data.user, data.password);
  };

  return (
    <Screen 
      flex={1}
      padding={16}
      justify-content={'center'}
      aling-itens={'center'}
      background-color={'#f9f9f9'} 
    >
      <Styles.Form>
        <Controller
          name="user"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Styles.Input
              placeholder="User"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.user?.message && <Styles.ErrorText>{errors.user?.message}</Styles.ErrorText>}

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Styles.Input
              placeholder="Password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.password && <Styles.ErrorText>{errors.password.message}</Styles.ErrorText>}

        <Styles.LoginButton disabled={isLoading} onPress={handleSubmit(onSubmit)}>
          {isLoading ? 
            <ActivityIndicator color={'white'}/> 
            : 
            <Styles.ButtonText>Login</Styles.ButtonText>
          }
        </Styles.LoginButton>
      </Styles.Form>
    </Screen>
  );
};

export default LoginScreen;