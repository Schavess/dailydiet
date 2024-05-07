import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Container, DateTimeButton, ButtonText } from './styles'

import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DatePickerProps {
  value: Date;
  mode: 'date' | 'time';
  onDateChange: (date: Date) => void; // Adiciona a propriedade onDateChange
}

export function DatePicker({ value, mode, onDateChange }: DatePickerProps) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate ? new Date(selectedDate) : new Date(date);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onDateChange(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  const dateFormat = mode === 'date' ? "dd/MM/yyyy" : "HH:mm";

  return (
    <Container>
      <DateTimeButton onPress={showMode} >
        <ButtonText>{format(value, dateFormat, { locale: ptBR })}</ButtonText>
      </DateTimeButton>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </Container>
  );
};
