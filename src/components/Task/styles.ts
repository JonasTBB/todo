import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    backgroundColor: theme.colors.base.gray500,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonConcluded: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskText: {
    color: theme.colors.base.gray100,
    fontSize: theme.font_size.md,
  },
  taskDone: {
    color: theme.colors.base.gray300,
    fontSize: theme.font_size.md,
    textDecorationLine: 'line-through',
  },
  buttonDeleted: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  }
})