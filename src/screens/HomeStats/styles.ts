import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  `;

export const Content = styled.View`

`;
export const Text = styled.Text``;
