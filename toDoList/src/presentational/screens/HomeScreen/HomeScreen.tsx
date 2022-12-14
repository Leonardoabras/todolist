import React, { useState } from 'react';
import styled from 'styled-components/native';

import { FlatList, Alert } from 'react-native';

import Task, { TaskData } from './Task';

import Logo from '@/assets/Logo.svg';
import PlusIcon from '@/assets/plus.svg';

import empty from '@/assets/Empty.png';

const HomeScreen = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [taskName, setTaskName] = useState('');
  const [selected, setSelected] = useState<number[]>([]);

  function handleAddTask() {
    const task: TaskData = { id: Math.random(), name: taskName };
    setTasks(prevState => [task, ...prevState]);
    setTaskName('');
  }

  function handleValidateRemoveTask(id: number) {
    const task = tasks.find(item => item.id === id);
    Alert.alert('Remover a tarefa', `${task?.name} ?`, [
      {
        text: 'Sim',
        onPress: () => handleRemoveTask(id)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  function handleRemoveTask(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id));
  }

  function handleSelectedTask(id: number) {
    setSelected(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(selectedTask => selectedTask !== id);
      }

      return [...prevState, id];
    });
  }

  return (
    <StyledView>
      <StyledHeader>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <StyledTask>
          <StyledAddTask
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={'#F2F2F2'}
            onChangeText={setTaskName}
            value={taskName}
          />
          <StyledButtonAdd onPress={handleAddTask}>
            <PlusIcon />
          </StyledButtonAdd>
        </StyledTask>
      </StyledHeader>
      <StyledContent>
        <StyledContentHeader>
          <StyledCreatedTask>
            <StyledText>Criadas</StyledText>
            <StyledCountTask>
              <StyledCountText>{tasks.length}</StyledCountText>
            </StyledCountTask>
          </StyledCreatedTask>
          <StyledFinishedTask>
            <StyledFinishedText>Concluídas</StyledFinishedText>
            <StyledCountTask>
              <StyledCountText>{selected.length}</StyledCountText>
            </StyledCountTask>
          </StyledFinishedTask>
        </StyledContentHeader>
      </StyledContent>
      <StyledLine />
      <StyledContentTasks>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              data={item}
              onTaskRemove={handleValidateRemoveTask}
              onSelectedTask={handleSelectedTask}
              checked={selected.includes(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <StyledEmptyView>
              <StyledEmptyTasks source={empty} />
            </StyledEmptyView>
          )}
        />
      </StyledContentTasks>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray500};
`;

const StyledHeader = styled.View`
  height: 142px;
  background-color: ${({ theme }) => theme.colors.heading};
`;

const StyledLogo = styled.View`
  align-items: center;
  margin-top: 40px;
`;

const StyledTask = styled.View`
  margin: 40px 24px;
  flex-direction: row;
`;

const StyledAddTask = styled.TextInput`
  flex: 1;
  height: 52px;
  border: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.purpleDark};
  color: ${({ theme }) => theme.colors.gray100};
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray400};
`;

const StyledButtonAdd = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  margin-left: 4px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.blueDark};
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.View`
  margin: 55px 24px 0 24px;
`;

const StyledContentHeader = styled.View`
  flex-direction: row;
`;

const StyledText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.Inter_Bold};
  color: ${({ theme }) => theme.colors.blueDark};
`;

const StyledCountTask = styled.View`
  justify-content: center;
  align-items: center;
  height: 19px;
  width: 25px;
  border-radius: 99px;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.gray400};
`;

const StyledCountText = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fonts.Inter_Bold};
  font-size: 12px;
`;

const StyledCreatedTask = styled.View`
  flex-direction: row;
`;

const StyledFinishedTask = styled.View`
  flex-direction: row;
`;

const StyledFinishedText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.Inter_Bold};
  color: ${({ theme }) => theme.colors.purple};
  margin-left: 145px;
`;

const StyledLine = styled.View`
  margin: 20px 24px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray400};
`;

const StyledContentTasks = styled.View`
  flex: 1;
  margin: 20px 24px;
  border-top: 4px;
  border-color: ${({ theme }) => theme.colors.blueDark};
`;

const StyledEmptyView = styled.View`
  justify-content: center;
  align-items: center;
`;
const StyledEmptyTasks = styled.Image``;
export default HomeScreen;
