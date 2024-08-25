import {useFonts} from "expo-font";
import {SplashScreen, Stack} from "expo-router";
import {useEffect} from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        "SF-Bold": require("../assets/fonts/SfBold.otf"),
        "SF-Semi-Bold": require("../assets/fonts/SfSemiBold.otf"),
        "SF-Medium": require("../assets/fonts/SfMedium.otf"),
        "SF-Regular": require("../assets/fonts/SfRegular.otf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="(Onboarding)" options={{headerShown: false}}/>
        </Stack>
    );
};

export default RootLayout;
