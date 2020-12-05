import React from 'react'
import { StyleSheet, Image, TextInput, View, TouchableOpacity, FlatList, Text } from 'react-native'
import { color, image } from '../themes'
import { musics } from '../data'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    const navigation = useNavigation()

    function handleAdd() {
        navigation.navigate('UpdateScreen')
    }

    function handleLogout() {
        navigation.navigate('LoginScreen')
    }

    const renderItem = ({ item }) => {
        function handleItem() {
            navigation.navigate('PlayScreen')
        }
        function handleEdit() {
            navigation.navigate('UpdateScreen', {
                item
            })
        }
        return (
            <TouchableOpacity style={styles.item} onPress={handleItem}>
                <Image source={image.itemSmall} />
                <View style={styles.textContainer}> 
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.duration}>{item.duration}</Text>
                </View>
                <TouchableOpacity style={{ padding: 10 }} onPress={handleEdit}>
                    <Image source={image.edit} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container} >
            <View style={styles.inputContainer}>
                <Image source={image.search}/>
                <TextInput 
                    style={styles.input}
                    placeholder='Buscar'
                    placeholderTextColor='silver'
                />
                <TouchableOpacity onPress={handleLogout}>
                    <Image source={image.logout}/>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={musics}
                keyExtractor={(item) => String(item.id)}
                renderItem={renderItem}
                style={styles.list}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 86, paddingTop: 20 }}
            />
            <TouchableOpacity style={styles.fab} onPress={handleAdd}>
                <Image source={image.plus}/>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.roxo,
        alignItems: 'center'
    }, 
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: color.branco,
        alignItems: 'center',
        justifyContent: 'center',
        width: '92%',
        height: 73,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 15,
        borderRadius: 20
    },
    input: {
        flex: 1,
        height: 30,
        paddingLeft: 15,
        fontSize: 20
    },
    list: {
        width: '90%'
    },
    item: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        marginLeft: 20
    },
    name: {
        color: color.branco,
        fontSize: 20
    },
    duration: {
        color: color.cinza,
        fontSize: 16
    },
    fab: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: color.rosa,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})
