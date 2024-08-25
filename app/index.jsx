import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import OnboardOne from "./(Onboarding)/OnboardOne";
import OnboardTwo from "./(Onboarding)/OnboardTwo";
import OnboardThree from "./(Onboarding)/OnboardThree";
import {router} from "expo-router";
import {icons} from "../constants"

const OnboardingView = ({activeItem}) => {
    const screens = [
        <OnboardOne key="1"/>,
        <OnboardTwo key="2"/>,
        <OnboardThree key="3"/>,
    ];

    return (
        <Animatable.View
            key={activeItem}
            animation="slideInRight"
            duration={500}
            style={{flex: 1}}
        >
            {screens[activeItem]}
        </Animatable.View>
    );
}

const Index = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleNext = () => {
        if (activeItem < 2) {
            setActiveItem(activeItem + 1);
        } else {
            router.push("/Register");
        }
    };

    return (
        <SafeAreaView style={{flex: 1}} className="bg-primary">
            <OnboardingView activeItem={activeItem}/>
            {activeItem !== 2 && <View className="flex-row justify-between items-center mx-2 mb-2">
                <TouchableOpacity onPress={() => router.replace('/Register')}>
                    <Text className="text-gray-200 text-center text-lg">Skip</Text>
                </TouchableOpacity>
                <View className="flex-row items-center justify-center">
                    <Text
                        className={`rounded-full w-[12px] h-[12px] ${activeItem === 0 ? 'bg-secondary' : 'bg-gray-100'}`}></Text>
                    <Text
                        className={`rounded-full mx-2 w-[12px] h-[12px] ${activeItem === 1 ? 'bg-secondary' : 'bg-gray-100'}`}></Text>
                    <Text
                        className={`rounded-full w-[12px] h-[12px] ${activeItem === 2 ? 'bg-secondary' : 'bg-gray-100'}`}></Text>
                </View>
                <TouchableOpacity
                    onPress={handleNext}
                    className="bg-secondary p-5 rounded-full items-center justify-center">
                    <Image
                        source={icons.arrowRM}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            }
        </SafeAreaView>
    );
}

export default Index;
