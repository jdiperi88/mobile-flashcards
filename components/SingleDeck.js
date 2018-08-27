import React, {Component} from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import { connect}from 'react-redux'
import { white, blue } from '../utils/colors'
import Deck from './Deck';

class SingleDeck extends Component {
    static navigationOptions = ({ navigation }) =>{

        return ({
            title: 'Deck Choice'
            }
        )
    }
    submit=()=>{
        console.log('worked')
    }
    render(){
        const {title,questions  } = this.props 
        return (
            <View styles ={styles.container}>
                <View>
                    <Deck
                        title={title}
                        questions={questions} 
                    />
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=> this.props.navigation.navigate('AddCard')}
                    >
                        <Text style={styles.buttonText}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.button,{backgroundColor:'green'}]}
                        onPress={()=> this.props.navigation.navigate('Quiz')}
                    >
                        <Text style={styles.buttonText}>Start Quiz </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
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

function mapStateToProps({FLASH_CARDS, page}){
    const title = page
    const questions = FLASH_CARDS[page].questions
    return {
        FLASH_CARDS,
        questions,
        title
    }
}
export default connect(mapStateToProps)(SingleDeck)