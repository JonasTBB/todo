import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
  },
  header: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: theme.colors.base.gray700,
    height: '20%',
    padding: 24,
  },
  logo: {
    marginTop: 112,
  },
  form: {
    flexDirection: 'row',
    marginTop: 36,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.regular,
    marginRight: 12,
    borderWidth: 1,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: theme.colors.brand.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listHeader: {
    marginTop: 55,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: "space-between",
    height: 50,
  },
  textCreated: {
    color: theme.colors.brand.blue,
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.bold,
  },
  textConcluded: {
    color: theme.colors.brand.purple,
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.bold,
  },
  listEmpty: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  listEmptyText: {
    marginTop: 12,
    color: theme.colors.base.gray100,
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.regular,
  }
})