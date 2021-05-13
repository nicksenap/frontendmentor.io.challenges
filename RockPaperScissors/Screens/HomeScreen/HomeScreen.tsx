import React, { FC } from 'react'
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './HomeScreen.style'
import { ScoreBoard } from '../../components/ScoreBoard/ScoreBoard'
import { GameBoard } from '../../components/GameBoard/GameBoard'
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
            <LinearGradient
                colors={['hsl(214, 47%, 23%)', 'hsl(237, 49%, 15%)']}
                style={styles.background}
            />
            <ScoreBoard />
            <GameBoard />
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.ruleText}>Rules</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
