import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },

  blue: {
    color: '#4EA8DE',
  },

  purple: {
    color: '#8284FA',
  },

  valueWrapper: {
    width: 24,
    height: 19,
    borderRadius: 999,
    backgroundColor: '#333333',

    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  value: {
    color: '#D9D9D9',
    fontSize: 12,
    fontFamily: 'Inter-Bold',
  },
})
