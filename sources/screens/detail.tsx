import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import NavigatorParameters from 'models/navigators'

type PropsType = {
  route: RouteProp<NavigatorParameters, 'Detail'>,
  navigation: StackNavigationProp<NavigatorParameters, 'Detail'>
}

function Detail(props: PropsType) {
  return (
    <SafeAreaView
      style = {{
        flex: 1
      }}
    >
      <View
        style = {{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text
          style = {{
            fontSize: 24 
          }}
        >
          {props.route.params.note}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Detail
