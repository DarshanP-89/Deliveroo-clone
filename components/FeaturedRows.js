import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestrauntCards from './RestrauntCards'

const FeaturedRows = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15
      }}
        showsHorizontalScrollIndicator={false} className="pt-4">

        {/*restraunt cards*/}
        <RestrauntCards
          id={123}
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqVGT8ptWw59_wmtw6G_jJw5eMEjqWJC77Q&usqp=CAU"
          title="Yo!! Vadapav"
          rating={4.5}
          genre="Indian"
          address="Vijay Chaar Rasta"
          short_Description="This is a short description"
          dishes={[]}
          long={50}
          lat={25}
        />
        <RestrauntCards
          id={123}
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqVGT8ptWw59_wmtw6G_jJw5eMEjqWJC77Q&usqp=CAU"
          title="Yo!! Vadapav"
          rating={4.5}
          genre="Indian"
          address="123 Main ST."
          short_Description="This is a short description"
          dishes={[]}
          long={50}
          lat={25}
        />
        <RestrauntCards
          id={123}
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqVGT8ptWw59_wmtw6G_jJw5eMEjqWJC77Q&usqp=CAU"
          title="Yo!! Vadapav"
          rating={4.5}
          genre="Indian"
          address="123 Main ST."
          short_Description="This is a short description"
          dishes={[]}
          long={50}
          lat={25}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRows