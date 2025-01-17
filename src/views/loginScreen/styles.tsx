// Form.styles.ts
import styled from "styled-components/native";

const colors = {
  border: "#ccc",
  buttonBackground: "#007bff",
  buttonText: "#fff",
  error: "red",
};

const spacing = {
  small: "8px",
  medium: "12px",
};


const Form = styled.View`
  width: 100%;
`;

const Input = styled.TextInput`
  border: 1px solid ${colors.border};
  padding: ${spacing.small};
  margin-bottom: ${spacing.medium};
  border-radius: 4px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: ${colors.buttonBackground};
  padding: ${spacing.medium};
  border-radius: 4px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${colors.buttonText};
  font-weight: bold;
`;

const ErrorText = styled.Text`
  color: ${colors.error};
  margin-bottom: ${spacing.small};
`;

export const Styles = {
  Form,
  Input,
  LoginButton,
  ButtonText,
  ErrorText,
}
