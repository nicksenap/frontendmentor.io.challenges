import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { styles } from './ScoreBoard.style'
import Logo from '../../assets/logo.svg'
interface ScoreBoardProps {}

export const ScoreBoard: FC<ScoreBoardProps> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Rock</Text>
                <Text style={styles.titleText}>Paper</Text>
                <Text style={styles.titleText}>Scissors</Text>
                {/* <Logo /> */}
            </View>
            <View style={styles.score}>
                <Text style={styles.scoreText}>Score</Text>
                <Text style={styles.scoreNumber}>12</Text>
            </View>
        </View>
    )
}
