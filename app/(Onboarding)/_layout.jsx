import React from 'react'
import {Stack} from "expo-router";

const OnboardingLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="OnboardOne" options={{headerShown: false,}}/>
                <Stack.Screen name="OnboardTwo" options={{headerShown: false,}}/>
                <Stack.Screen name="OnboardThree" options={{headerShown: false,}}/>
            </Stack>
            {/*<StatusBar backgroundColor="#161622" style="light" />*/}
        </>
    )
}
export default OnboardingLayout
