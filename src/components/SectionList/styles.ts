import styled, { css } from 'styled-components/native';
import { SectionList, Text, SectionListProps } from 'react-native';

interface Item {
  id: string;
  hour: string;
  name: string;
  inDiet: boolean;
}

interface Section {
  title: string;
  data: Item[];
}

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  display: flex;
  width: 85%;
  justify-content: space-between;
  `;

export const StyledSectionList = styled(SectionList).attrs<SectionListProps<Item, Section>>({})<SectionListProps<Item, Section>>`
  /* flex: 1; */
  /* background-color: #f5f5f5; */
  `;

export const SectionHeader = styled(Text)`
  padding: 5px 10px;
  /* background-color: #eee; */
  font-weight: bold;
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.LG}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;