import React from 'react'
import {View, Text, Image, TouchableOpacity} from "react-native";
import {router} from "expo-router"
import {images} from "../../constants"
import {icons} from "../../constants"

const OnboardingThree = () => {
    return (
        <View className="bg-primary w-full h-full justify-center">
            <View className="justify-center items-center">
                <Image
                    className="w-[319px] h-[242px]"
                    source={images.onboarding3}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text className="w-full text-center text-black-100 text-2xl font-pbold mt-14">Budgeting Made
                    Simple</Text>
                <Text className="text-gray-300 font-pmedium text-[15px] text-center mt-2 mx-2 leading-6">Take control of your finances with our
                    intuitive
                    budgeting tool.</Text>
            </View>

            <View className=" mt-14  mx-2">
                <TouchableOpacity
                    onPress={() => router.replace('/Register')}
                    className="bg-secondary flex-row p-3 rounded-full items-center justify-center">
                    <Image
                        className="w-[15px] h-[15px]"
                        source={icons.vectorUpArrow}
                        resizeMode="contain"
                    />
                    <Text className="ml-3 text-lg text-white"> Get started</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default OnboardingThree
