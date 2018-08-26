import React, {Component} from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import { connect}from 'react-redux'
import { white, blue } from '../utils/colors'
import Deck from './Deck';
import Question from './Question';

class Quiz extends Component {

    submit=()=>{
        console.log('worked')
    }
    render(){
        const {title,questions  } = this.props 
        return (
            <View styles ={styles.container}>
                <View>
                    {
                    questions.map(question=>{
                        <Question
                            question={question} 
                        />
                    })

                    }
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=> this.props.navigation.navigate('AddCard')}
                    >
                        <Text style={styles.buttonText}>Correct!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.button,{backgroundColor:'green'}]}
                        onPress={()=> this.props.navigation.navigate('AddCard')}
                    >
                        <Text style={styles.buttonText}>Incorrect!</Text>
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
        questions,
        title
    }
}
export default connect(mapStateToProps)(Quiz)