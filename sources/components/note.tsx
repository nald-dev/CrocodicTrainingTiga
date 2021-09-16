import React, { Props } from 'react'
import { TouchableOpacity, Text } from 'react-native'

type PropsType = {
  onPress: () => void,
  value: string
}

function Note(props: PropsType) {
  return (
    <TouchableOpacity
      activeOpacity = {0.6}
      onPress = {props.onPress}
      style = {{
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingVertical: 10
      }}
    >
      <Text
        style = {{
          fontSize: 16
        }}
      >
        {props.value}
      </Text>
    </TouchableOpacity>
  )
}

export default Note