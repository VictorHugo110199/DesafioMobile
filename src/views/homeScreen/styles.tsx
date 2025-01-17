import styled from "styled-components/native";

const Header = styled.View`
  padding: 16px;
  background-color: #007bff;
  align-items: center;
`;

const UserName = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.View`
  flex: 1;
  padding: 16px;
`;

const Touchable = styled.TouchableOpacity`
  margin-bottom: 8px;
`;

const CarBrandItem = styled.View`
  padding: 12px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const CarBrandText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const Styles = {
  Header,
  UserName,
  Content,
  Touchable,
  CarBrandItem,
  CarBrandText,
};