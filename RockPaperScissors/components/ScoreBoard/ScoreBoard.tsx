import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { styles } from './ScoreBoard.style'
interface ScoreBoardProps {}

export const ScoreBoard: FC<ScoreBoardProps> = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Rock</Text>
                <Text>Paper</Text>
                <Text>Scissors</Text>
            </View>
            <View>
                <Text>Score</Text>
                <Text>12 </Text>
            </View>
        </View>
    )
}
