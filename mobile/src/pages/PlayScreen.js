import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Text, Dimensions, Animated, Easing } from 'react-native'
import { color, image } from '../themes'

const { width } = Dimensions.get('window')

const PROGRESS_WIDTH = width * 0.8

const PlayScreen = () => {
    const { params } = useRoute()
    const data = params.data
    const [index, setIndex] = useState(params?.index || 0)
    const [isPlaying, setPlaying] = useState(false)
    const animSlider = useRef(new Animated.Value(0)).current
    const animImage = useRef(new Animated.Value(0)).current
    const item = data[index]

    const animatedSlider = Animated.timing(animSlider, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true
    })
    const animatedImage = Animated.loop(
        Animated.timing(animImage, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true
        })
    )

    const navigation = useNavigation()

    function handleBackButton() {
        navigation.goBack()
    }

    function handlePlayPause() {
        if(!isPlaying) {
            animSlider.setValue(0)
            animatedSlider.start(() => {
                animatedImage.stop()
                animImage.setValue(0)
                setPlaying(false)
            })
            animatedImage.start()
        } else {
            animatedSlider.stop()
            animatedImage.stop()
        }
        setPlaying(!isPlaying)
    }

    function handleSkip(value) {
        return () => {
            const nextIndex = index + value
            if(nextIndex >= 0 && nextIndex < data.length) {
                setIndex(index + value) 
                animatedSlider.stop()
                animatedImage.stop()
                animImage.setValue(0)
                animSlider.setValue(0)
                setPlaying(false)
            }
        }
    }

    const rotate = animImage.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const translateX = animSlider.interpolate({
        inputRange: [0, 1],
        outputRange: [-PROGRESS_WIDTH, 0]
    })

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
                <Image source={image.arrowLeft}/>
            </TouchableOpacity>
            <View style={styles.content} >
                <Animated.Image source={image.itemBig} style={[styles.image, {
                    transform: [
                        { rotate }
                    ]
                }]} />
                <Text style={styles.name} >{item.name}</Text>
                <View style={styles.progressContainer}>
                    <View style={styles.sliderContainer}>
                        <Animated.View style={[styles.slider, {
                            transform: [
                                { translateX }
                            ]
                        }]} />
                    </View>
                    <View style={styles.timeContainer} >
                        <Text style={{color: color.branco}} >00:00</Text>
                        <Text style={{color: color.cinza}} >{item.duration}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer} >
                    <TouchableOpacity style={styles.skip} onPress={handleSkip(-1)}>
                        <Image source={image.skipBack}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.fab} onPress={handlePlayPause}>
                        <Image source={image[!isPlaying ? 'play' : 'pause']}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skip} onPress={handleSkip(1)}>
                        <Image source={image.skipForward}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PlayScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.roxo
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        justifyContent: 'space-between'
    },
    backButton: {
        padding: 15
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    fab: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: color.rosa,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16
    },
    skip: {
        padding: 10
    },
    image: {
        width: 220,
        height: 220,
        marginVertical: 50
    },
    name: {
        fontSize: 22,
        color: color.branco
    },
    progressContainer: {
        width: PROGRESS_WIDTH
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    sliderContainer: {
        backgroundColor: '#4B2560',
        marginTop: 40,
        overflow: 'hidden',
        borderRadius: 7
    },
    slider: {
        backgroundColor: color.roxoClaro,
        padding: 10,
        width: PROGRESS_WIDTH
    },
})
