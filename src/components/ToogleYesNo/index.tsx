import React, { useState } from 'react';
import { Text } from 'react-native';

import { Container, ButtonYes, ButtonNo, StatusTrue, StatusFalse } from './styles';

interface ToggleButtonProps {
  onSelectionChange: (selection: 'SIM' | 'NÃO') => void;
}

export function ToggleYesNoButton({ onSelectionChange }: ToggleButtonProps) {
  const [selectedOption, setSelectedOption] = useState<'SIM' | 'NÃO'>('SIM');

  const handleSelection = (option: 'SIM' | 'NÃO') => {
    setSelectedOption(option);
    onSelectionChange(option);
  };

  return (
    <Container>
      <ButtonYes
        isSelected={selectedOption === 'SIM'}
        onPress={() => handleSelection('SIM')}
      >
        <StatusTrue />
        <Text>Sim</Text>
      </ButtonYes>
      <ButtonNo
        isSelected={selectedOption === 'NÃO'}
        onPress={() => handleSelection('NÃO')}
      >
        <StatusFalse />
        <Text>Não</Text>
      </ButtonNo>
    </Container>
  );
}
