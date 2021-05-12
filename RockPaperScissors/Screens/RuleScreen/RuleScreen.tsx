import React, { FC } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { styles } from './RuleScreen.style'
import {
    useFonts,
    BarlowSemiCondensed_600SemiBold,
    BarlowSemiCondensed_700Bold,
} from '@expo-google-fonts/barlow-semi-condensed'
import { FontAwesome } from '@expo/vector-icons'
import ImagesRules from '../../assets/image-rules.svg'

interface RuleScreenProps {
    navigation: any
}

export const RuleScreen: FC<RuleScreenProps> = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        BarlowSemiCondensed_600SemiBold,
        BarlowSemiCondensed_700Bold,
        'BarlowSemiCondensed-Bold': require('../../assets/fonts/BarlowSemiCondensed-Bold.ttf'),
    })

    const handlePress = () => {
        navigation.navigate('Home')
    }

    if (!fontsLoaded) {
        return <Text> Loading... </Text>
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ruleTextContainer}>
                <Text style={styles.ruleText}>RULES</Text>
            </View>
            <View>
                <ImagesRules />
            </View>
            <TouchableOpacity onPress={handlePress}>
                <FontAwesome name="times" size={35} color="grey" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
