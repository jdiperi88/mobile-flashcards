import React, {Component} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { connect}from 'react-redux'
import { white } from '../utils/colors'
import { getDecks, FLASH_CARDS } from '../utils/api'
import { handleReceiveDecks } from '../actions'


class DeckList extends Component {
    componentDidMount(){
        const {dispatch} = this.props
        getDecks()
            .then((data)=>{
                const decks = {FLASH_CARDS:data}
                dispatch(handleReceiveDecks(decks))
            })
    }

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


export default connect()(DeckList)