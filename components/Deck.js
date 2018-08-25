import React, {Component} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { connect}from 'react-redux'
import { white } from '../utils/colors'


class Deck extends Component {
    render(){
        const { title } = this.props 
        return (
            <View styles ={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>{title}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 15,
    },
    card:{
        backgroundColor: '#fff', 
        marginLeft: 30, 
        marginRight:30,
        marginTop: 10,
        padding: 50,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
        width: 0,
        height: 3
        },
    },
    cardText:{
        fontSize: 40,
        textAlign: 'center'
    }
})


export default Deck