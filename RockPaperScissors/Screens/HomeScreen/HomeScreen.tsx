import React, { FC } from 'react'
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'
import { styles } from './HomeScreen.style'
import { ScoreBoard } from '../../components/ScoreBoard/ScoreBoard'
import {
    useFonts,
    BarlowSemiCondensed_600SemiBold,
    BarlowSemiCondensed_700Bold,
} from '@expo-google-fonts/barlow-semi-condensed'

interface HomeScreenProps {
    navigation: any
}

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        BarlowSemiCondensed_600SemiBold,
        BarlowSemiCondensed_700Bold,
    })

    const handlePress = () => navigation.navigate('Rule')

    if (!fontsLoaded) {
        return <Text> Loading... </Text>
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScoreBoard></ScoreBoard>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.ruleText}>Rules</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
