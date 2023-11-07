import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
  },

  logoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 173,
    width: '100%',
    backgroundColor: '#0D0D0D',
  },

  logo: {},

  inputBox: {
    width: '90%',
    alignItems: 'center',
    marginTop: -27,
    flexDirection: 'row',
  },

  taskBox: {
    width: '90%',
    alignItems: 'center',
  },

  listEmptyText: {
    color: '#F2F2F2',
  },

  statusBox: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 32,
    paddingLeft: 6,
  },
})
