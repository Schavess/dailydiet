import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  `;

export const DateTimeButton = styled(TouchableOpacity)`
  width: 95%;
  height: 56px;
  justify-content: center;
  /* background-color: #4a90e2; */
  border: 1px solid #bbb;
  border-radius: 5px;
  /* padding: 10px 20px; */
  margin: 5px;
`;

export const ButtonText = styled(Text)`
  color: black;
  font-size: 12px;
  text-align: center;
`;
