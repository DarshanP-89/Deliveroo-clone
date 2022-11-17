import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIeIGS_qexOBcAXpQwo4kk_iLuo6mL31RpA&usqp=CAU" title="testing1"/>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIeIGS_qexOBcAXpQwo4kk_iLuo6mL31RpA&usqp=CAU" title="testing2"/>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIeIGS_qexOBcAXpQwo4kk_iLuo6mL31RpA&usqp=CAU" title="testing3"/>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIeIGS_qexOBcAXpQwo4kk_iLuo6mL31RpA&usqp=CAU" title="testing4"/>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIeIGS_qexOBcAXpQwo4kk_iLuo6mL31RpA&usqp=CAU" title="testing5"/>
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIeIGS_qexOBcAXpQwo4kk_iLuo6mL31RpA&usqp=CAU" title="testing6"/>
    </ScrollView>
  )
}

export default Categories