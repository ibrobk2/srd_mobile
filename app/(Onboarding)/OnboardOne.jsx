import React from 'react'
import {Image, Text, View} from "react-native";
import {images} from "../../constants"

const OnboardOne = () => {
    return (
        <View className="bg-primary w-full h-full justify-center">
            <View className="justify-center items-center">
                <Image
                    className="w-[319.03px] h-[304.41px]"
                    source={images.onboarding1}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text className="text-center text-black-100 text-2xl font-pbold mt-14">Secure Payment
                    Solutions</Text>
                <Text className="text-gray-300 font-pmedium text-[15px] text-center mt-2 leading-6">Experience seamless and secure payments with
                    our
                    integrated payment solutions</Text>
            </View>

        </View>
    )
}
export default OnboardOne
