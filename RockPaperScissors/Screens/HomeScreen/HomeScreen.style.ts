import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ruleText: {
        fontFamily: 'BarlowSemiCondensed_700Bold',
        fontSize: 20,
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: 'white',
    },
    ruleTextContainer: {},
    imageRules: {
        fontFamily: 'BarlowSemiCondensed_700Bold',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '111%',
    },
})
