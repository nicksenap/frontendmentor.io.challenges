import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        borderColor: 'hsl(217, 16%, 45%)',
        borderWidth: 3,
        width: '90%',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    titleText: {
        color: 'white',
        fontFamily: 'BarlowSemiCondensed_700Bold',
        fontSize: 25,
        textTransform: 'uppercase',
    },
    score: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    scoreText: {
        fontFamily: 'BarlowSemiCondensed_600SemiBold',
        fontSize: 15,
        textTransform: 'uppercase',
    },
    scoreNumber: {
        fontFamily: 'BarlowSemiCondensed_700Bold',
        fontSize: 50,
        color: 'hsl(229, 64%, 46%)',
    },
})
