import React, { FC } from 'react'
import { View, TouchableOpacity } from 'react-native'
import BgTriangle from '../../assets/bg-triangle.svg'
import IconRock from '../../assets/icon-rock.svg'
import IconScissors from '../../assets/icon-scissors.svg'
import IconPaper from '../../assets/icon-paper.svg'
import { LinearGradient } from 'expo-linear-gradient'

interface GameBoardProps {}

export const GameBoard: FC<GameBoardProps> = () => {
    return (
        <View
            style={{
                position: 'relative',
            }}
        >
            <View
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    left: 40,
                    width: '50%',
                }}
            >
                <BgTriangle />
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                    width: '85%',
                }}
            >
                <TouchableOpacity>
                    <LinearGradient
                        colors={['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)']}
                        style={{
                            padding: 20,
                            borderRadius: 75,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'white',
                                padding: 20,
                                borderRadius: 55,
                                height: 110,
                                width: 110,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <IconPaper />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)']}
                        style={{
                            padding: 20,
                            borderRadius: 75,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'white',
                                padding: 20,
                                borderRadius: 55,
                                height: 110,
                                width: 110,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <IconScissors />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 150 }}>
                    <LinearGradient
                        colors={['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)']}
                        style={{
                            padding: 20,
                            borderRadius: 75,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'white',
                                padding: 20,
                                borderRadius: 55,
                                height: 110,
                                width: 110,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <IconRock />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}
