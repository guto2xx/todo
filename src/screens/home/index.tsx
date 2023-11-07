import { View, Image } from 'react-native'
import { styles } from './styles'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Task } from '../../components/task'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        ></Image>
      </View>

      <View style={styles.inputBox}>
        <Input placeholder="Adicione uma nova tarefa"></Input>
        <Button type="create"></Button>
      </View>

      <View style={styles.taskBox}>
        <Task></Task>
      </View>
    </View>
  )
}
