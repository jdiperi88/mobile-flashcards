import React, {Component} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { connect}from 'react-redux'
import { white } from '../utils/colors'


class DeckList extends Component {
    render(){
        return (
            <View styles ={styles.container}>
                <Text>DeckList</Text>
            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15,
    }
}


export default DeckList