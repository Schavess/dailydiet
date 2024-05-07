import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, selectedOption === 'SIM' ? styles.selectedSim : styles.unselected]}
        onPress={() => handleSelection('SIM')}
      >
        <Text>SIM</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selectedOption === 'NÃO' ? styles.selectedNao : styles.unselected]}
        onPress={() => handleSelection('NÃO')}
      >
        <Text>NÃO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  },
  selectedSim: {
    backgroundColor: 'lightgreen',
  },
  selectedNao: {
    backgroundColor: 'lightcoral',
  },
  unselected: {
    backgroundColor: 'lightgray',
  },
});
