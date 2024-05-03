import styled from 'styled-components/native';
import { SectionList, Text, SectionListProps } from 'react-native';

export interface Item {
  id: string;
  name: string;
}

export interface Section {
  title: string;
  data: Item[];
}

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Content = styled.View`
  display: flex;
  width: 85%;
  justify-content: space-between;
  flex-direction: row;
`;

export const StyledSectionList = styled(SectionList).attrs<SectionListProps<Item, Section>>({})<SectionListProps<Item, Section>>`
  /* flex: 1; */
  background-color: #f5f5f5;
`;

export const StyledItem = styled(Text)`
  padding: 10px;
  font-size: 18px;
  height: 44px;
`;

export const SectionHeader = styled(Text)`
  padding: 5px 10px;
  background-color: #eee;
  font-size: 14px;
  font-weight: bold;
`;