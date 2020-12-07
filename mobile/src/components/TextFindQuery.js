import React from 'react'
import { StyleSheet, Text } from 'react-native'

import splitQueryText from '../utils/splitQueryText'
import { color } from '../themes'

const TextFindQuery = ({ style, children, query }) => {
  const splits = splitQueryText(children, query)

  return (
    <Text style={style}>
      {splits.map((str, index) => {
        if (str.toLowerCase() === query.toLowerCase()) {
          return (
            <Text key={`${index}`} style={styles.bold}>
              {str}
            </Text>
          )
        }
        return str
      })}
    </Text>
  )
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    textDecorationLine: 'none',
    color: color.rosa
  }
})

export default TextFindQuery