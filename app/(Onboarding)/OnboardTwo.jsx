import React from 'react'
import {View, Text, Image} from "react-native";
import {images} from "../../constants"


const OnboardingTwo = () => {
    return (
        <View className="bg-primary w-full h-full justify-center">
            <View className="justify-center items-center">
                <Image
                    className="w-[322.67px] h-[294.88px]"
                    source={images.onboarding2}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text className="w-full text-center text-black-100 text-2xl font-pbold mt-14">Smart Investing Opportunities</Text>
                <Text className="text-gray-300 font-pmedium text-[15px] text-center mt-2 mx-2 leading-6">Explore a world of investment possibilities with our smart investing feature</Text>
            </View>
        </View>

    )
}
export default OnboardingTwo
