import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: 64,
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderRadius: 8,
    padding: 12,
    paddingRight: 8,
    marginBottom: 8,
  },

  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#F2F2F2',
    lineHeight: 15,
    marginLeft: 8,
  },

  textChecked: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#808080',
    lineHeight: 15,
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },

  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 100,
    borderColor: '#4EA8DE',
  },

  checkboxWrapper: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 8,
    alignItems: 'center',
  },

  deleteWrapper: {
    flexGrow: 0,
    padding: 8,
  },
})
