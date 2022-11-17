import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import FeaturedRows from '../components/FeaturedRows';
import {
    ChevronDownIcon,
    UserIcon,
} from 'react-native-heroicons/outline';
import * as Icons from "react-native-heroicons/outline";


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitle: "TESTING",
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* <Text className="text-red-500 w-full"> */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "http://1.bp.blogspot.com/--ucL-rXn-Ec/VLwta4arOvI/AAAAAAAABHU/LzjxpJ_cA-g/s1600/wallpaper-for-facebook-profile-photo-738967.jpg"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full" />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/*Search*/}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
                    <Icons.MagnifyingGlassIcon size={20} color="gray" />
                    <TextInput placeholder='Restraunts and Cuisines' keyboardType='default' />
                </View>
                <Icons.AdjustmentsHorizontalIcon color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100" contentContainerStyle={
                { paddingBottom: 100 }
            }>
                {/*Categories*/}
                <Categories />

                {/*Featured Rows*/}
                <FeaturedRows id="123" title="Featured" description="Paid placements for our Partners" />
                
                {/*Offers */}
                <FeaturedRows id="1234" title="Excting Offers" description="Why to let go these offers?" />
                
                {/*Discounts */}
                <FeaturedRows id="12345" title="Discounts near you" description="Explore your neighbourhood" />
            </ScrollView>
        </SafeAreaView>

    )
}

export default HomeScreen