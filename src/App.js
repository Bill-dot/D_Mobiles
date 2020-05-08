import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TouchableOpacityComponent } from 'react-native'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Welcom to Mobile App'

        }

    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.header}>{this.state.text}</Text>
                <FlatList
                    data={mobiles}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        console.log('insideFlatList')
                        return (
                            <View>
                                <Text
                                    style={styles.text}
                                >{item.title}</Text>
                                <TouchableOpacity onPress={()=>this.setState({text:item.title})}>
                                    <Image
                                        source={item.image}
                                        style={{ height: 400, width: null, borderRadius: 10 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}
var mobiles = [
    { title: 'Samsung', image: require('../assets/Images/Samsung-GalaxyM10.jpg'), id: 1 },
    { title: 'OnePlus', image: require('../assets/Images/oneplus-7t.jpg'), id: 2 },
    { title: 'Redmi', image: require('../assets/Images/Redmi_K20_pro.jpg'), id: 3 },
    { title: 'Nokia', image: require('../assets/Images/Nokia.jpg'), id: 4 },
    { title: 'Vivo', image: require('../assets/Images/Vovo-v9.jpg'), id: 5 }
]
const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 20,
        marginLeft: 15,
        marginRight: 10
        // justifyContent: 'center',
        // alignItems: 'center',
    }, text: {
        fontSize: 35,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 30
    }
})

