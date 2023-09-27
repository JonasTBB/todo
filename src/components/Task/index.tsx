import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from "../../theme";

type Props = {
  name: string;
  onRemove: () => void;
  onConcluded: () => void;
  isCompleted: boolean;
}

export function Task({ name, onRemove, isCompleted, onConcluded }: Props) {
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.buttonConcluded} onPress={onConcluded}>
          <MaterialCommunityIcons 
          name={isCompleted ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'} 
          size={22} 
          color={isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue}/>
        </TouchableOpacity>

        <Text style={isCompleted ? styles.taskDone: styles.taskText}>
          {name}
        </Text>

        <TouchableOpacity style={styles.buttonDeleted} onPress={onRemove}>
          <MaterialCommunityIcons name='trash-can-outline' size={22} color={theme.colors.base.gray300}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}