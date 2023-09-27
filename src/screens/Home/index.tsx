import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { theme } from "../../theme";
import { MaterialCommunityIcons } from '@expo/vector-icons'

type TaskProps = {
  name: string;
  isCompleted: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTask, setNewTask] = useState('')

  function handleTaskAdd() {
    if(tasks.find(task => task.name === newTask)){
      return Alert.alert('Task já existe', 'Já existe uma task na lista com esse nome.')
    }

    if(newTask !== '') {
      setTasks(prevState => [...prevState, {isCompleted: false, name: newTask.trim()}])
      setNewTask('')
    }
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover a task ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.name !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleTaskConcluded(name: string) {
    setTasks(prevState => 
      prevState.map(task => {
        task.name === name ? (task.isCompleted = !task.isCompleted) : null 
        return task
      })
    )
  }

  const tasksCreated = tasks.length
  const tasksConcluded = tasks.filter(tasks => tasks.isCompleted).length

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo}/>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={theme.colors.base.gray300}
            onChangeText={setNewTask}
            value={newTask}
            onSubmitEditing={handleTaskAdd}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <MaterialCommunityIcons name='plus-circle-outline' size={22} color={theme.colors.base.gray100} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.textCreated}>
          {`Criadas ${tasksCreated}`}
        </Text>
        <Text style={styles.textConcluded}>
          {`Concluídas ${tasksConcluded}`}
        </Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(tasks) => tasks.name}
        renderItem={({ item }) => (
          <Task
            key={item.name}
            name={item.name}
            isCompleted={item.isCompleted}
            onRemove={() => handleTaskRemove(item.name)}
            onConcluded={() => handleTaskConcluded(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Image source={require('../../assets/Clipboard.png')}/>
            <Text style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}