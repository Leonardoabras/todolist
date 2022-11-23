import React from 'react';
import styled, { css } from 'styled-components/native';

import Trash from '@/assets/trash.svg';
import Check from '@/assets/check.svg';

export type TaskData = {
  id: number;
  name: string;
};

type TaskProps = {
  data: TaskData;
  checked?: boolean;
  onSelectedTask: (id: number) => void;
  onTaskRemove: (id: number) => void;
};

const Task = ({ data, checked, onSelectedTask, onTaskRemove }: TaskProps) => {
  return (
    <StyledCard>
      <StyledMarker onPress={() => onSelectedTask(data.id)} isSelected={checked}>
        {checked && <Check />}
      </StyledMarker>
      <StyledTaskText numberOfLines={2} isSelected={checked}>
        {data.name}
      </StyledTaskText>
      <StyledTrash onPress={() => onTaskRemove(data.id)}>
        <Trash />
      </StyledTrash>
    </StyledCard>
  );
};

const StyledCard = styled.View`
  padding: 14px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray400};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 8px;
`;

const StyledMarker = styled.TouchableOpacity<{ isSelected?: boolean }>`
  height: 17.45px;
  width: 17.45px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 9px;

  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      border: 2px solid ${theme.colors.purpleDark};
      background-color: ${theme.colors.purpleDark};
    `}
`;

const StyledTaskText = styled.Text<{ isSelected?: boolean }>`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray100};
  font-size: 14px;
  margin: 0 8px;
  font-family: ${({ theme }) => theme.fonts.Inter_Regular};

  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      color: ${theme.colors.gray300};
      text-decoration-line: line-through;
    `}
`;

const StyledTrash = styled.TouchableOpacity``;

export default Task;
