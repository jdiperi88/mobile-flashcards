import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { connect}from 'react-redux'
import { white } from '../utils/colors'
import { getDecks, FLASH_CARDS } from '../utils/api'
import { handleReceiveDecks } from '../actions'
import {blue} from '../utils/colors'
import Deck from './Deck';
import { NavigationActions } from 'react-navigation'

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
        const {FLASH_CARDS} =this.props
        return (
            <View styles ={styles.container}>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardText}>My Decks</Text>
                </View>
                {FLASH_CARDS === null ? 
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=> this.props.navigation.navigate('NewDeck')}
                    >
                        <Text style={styles.buttonText}>Please Add A Deck</Text>
                    </TouchableOpacity>
                :
                (FLASH_CARDS && Object.keys(FLASH_CARDS).map((card)=>{
                    return (
                        <Deck 
                            title={card}
                        />
                    )
                }))
                    
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        padding: 15,
    },
    cardContainer:{
        backgroundColor: '#fff', 
        marginLeft: 30, 
        marginRight:30,
        marginTop: 10,
        padding: 20,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
        width: 0,
        height: 3
        },
    },
    cardText: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: blue,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
      },
      buttonText :{
        color: white,
        fontSize: 20,
      },
})

function mapStateToProps({FLASH_CARDS}){
    return {
        FLASH_CARDS
    }
}
export default connect(mapStateToProps)(DeckList)