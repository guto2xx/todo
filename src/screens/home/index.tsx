import { useState } from 'react'
import { View, Image, FlatList, Text, Alert } from 'react-native'
import { styles } from './styles'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Task } from '../../components/task'

type Task = {
  text: string
  finished: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState('')

  function handleTaskAdd() {
    if (tasks.some((task) => task.text === taskText)) {
      return Alert.alert(
        'Task duplicada!',
        'Já existe uma task na lista com essa mesma descrição'
      )
    }

    setTasks((prevState) => [
      ...prevState,
      { id: '1', text: taskText, finished: false },
    ])
    setTaskText('')
  }

  function handleTaskRemove(text: string) {
    Alert.alert('Remover', `deseja remover essa tarefa?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.text !== text)
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        ></Image>
      </View>

      <View style={styles.inputBox}>
        <Input
          placeholder="Adicione uma nova tarefa"
          onChangeText={(text: string) => setTaskText(text)}
          value={taskText}
        ></Input>
        <Button type="create" onPress={handleTaskAdd}></Button>
      </View>

      <View style={styles.taskBox}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.text}
          renderItem={({ item }) => (
            <Task
              key={item.text}
              text={item.text}
              onRemove={() => {
                handleTaskRemove(item.text)
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
              de presença.
            </Text>
          )}
        />
      </View>
    </View>
  )
}
