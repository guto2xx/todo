import { useState, useEffect } from 'react'
import { View, Image, FlatList, Text, Alert } from 'react-native'
import { styles } from './styles'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Task } from '../../components/task'
import { StatusText } from '../../components/statusText'
import { cliboardIcon } from '../../../assets'

type Task = {
  text: string
  finished: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState('')
  const [taskFinishedCount, setTaskFinishedCount] = useState(0)

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

  function handleFinishTask(text: string) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.text !== text) {
          task.finished = !task.finished
        }
        return task
      })
    )
  }

  useEffect(() => {
    const count = Object.values(tasks).reduce((acc, curr) => {
      if (curr.finished) ++acc
      return acc
    }, 0)

    setTaskFinishedCount(count)
  }, [tasks])

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

      <View style={styles.statusBox}>
        <StatusText
          text="Criadas"
          color="blue"
          value={tasks.length}
        ></StatusText>
        <StatusText
          text="Concluidas"
          color="purple"
          value={taskFinishedCount}
        ></StatusText>
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
              onFinish={(text: string): void => {
                handleFinishTask(text)
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyWrapper}>
              <Image style={styles.listEmptyIcon} source={cliboardIcon}></Image>
              <Text style={(styles.listEmptyText, styles.bold)}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
