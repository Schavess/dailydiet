import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  /* align-items: center;
  justify-content: center; */
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;
