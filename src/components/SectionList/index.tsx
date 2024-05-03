import React from 'react';
import { Container, Content, StyledSectionList, StyledItem, SectionHeader, Section } from './styles';


const sections: Section[] = [
  { title: 'D', data: [{ id: '1', name: 'Devin' }, { id: '2', name: 'Dan' }, { id: '3', name: 'Dominic' }] },
  { title: 'J', data: [{ id: '4', name: 'Jackson' }, { id: '5', name: 'James' }, { id: '6', name: 'Jillian' }, { id: '7', name: 'Jimmy' }, { id: '8', name: 'Joel' }, { id: '9', name: 'John' }, { id: '10', name: 'Julian' }] },
];


export function SectionList() {
  return (
    <Container>
      <Content>
        <StyledSectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <StyledItem>{item.name}</StyledItem>}
          renderSectionHeader={({ section }) => <SectionHeader>{section.title}</SectionHeader>}
        />

      </Content>
    </Container>
  );
};
