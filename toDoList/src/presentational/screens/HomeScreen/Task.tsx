import React, { useState } from 'react';
import styled from 'styled-components/native';

import Trash from '@/assets/trash.svg';

type TaskProps = {
  taskName: string;
  onTaskRemove: () => void;
};

const Task = ({ taskName, onTaskRemove }: TaskProps) => {
  return (
    <StyledCard>
      <StyledMarker />
      <StyledTaskText numberOfLines={2}>{taskName}</StyledTaskText>
      <StyledTrash onPress={onTaskRemove}>
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
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.gray300};
`;

const StyledMarker = styled.TouchableOpacity`
  height: 17.45px;
  width: 17.45px;
  border: 2px;
  border-radius: 99px;
  border-color: ${({ theme }) => theme.colors.blue};
`;

const StyledTaskText = styled.Text`
  flex: 1;
  color: white;
  font-size: 14px;
  margin: 0 8px;
  font-family: ${({ theme }) => theme.fonts.Inter_Regular};
`;

const StyledTrash = styled.TouchableOpacity``;

export default Task;
