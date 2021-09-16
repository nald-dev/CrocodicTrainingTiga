import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'

import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import NavigatorParameters from 'models/navigators'
import NoteType from 'models/note'
import Note from '@components/note'

type PropsType = {
  route: RouteProp<NavigatorParameters, 'Home'>,
  navigation: StackNavigationProp<NavigatorParameters, 'Home'>
}

function Home(props: PropsType) {
  const [ notes, setNotes ] = useState<NoteType[]>([]) 

  useEffect(() => {
    loadData()
  }, [])

  return (
    <SafeAreaView
      style = {{
        flex: 1
      }}
    >
      <ScrollView
        contentContainerStyle = {{
          padding: 20
        }}
        style = {{
          flex: 1
        }}
      >
        {
          notes.map(item => {
            return (
              <Note
                key = {item.id}
                value = {item.note}
                onPress = {() => props.navigation.navigate('Detail', {
                  note: item.note
                })}
              />
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )

  async function loadData() {
    fetch('https://moon.crocodic.net/latihan-api/public/note/list?user_id=1')
    .then(res => res.json())
    .then(resJSON => {
      if (resJSON.api_status == 1) {
        setNotes(resJSON.data)
      }
    })
    .catch(err => console.log(err))
  }
}

export default Home