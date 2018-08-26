import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage} from 'react-native'
import { connect}from 'react-redux'
import { white, blue,purple } from '../utils/colors'
import { addTitle } from '../utils/api'
import {handleAddDeckTitle, handleAddPage, handleAddQuestion, handleReceiveDecks} from '../actions'
import { NavigationActions } from 'react-navigation'

class AddCard extends Component {
    state ={
        question: '',
        answer: '',
        error: false
    }
    componentDidMount(){
    }
    handleQuestionChange(question){
        console.log(question, this.state)
        if(question.length === 0){
            this.setState({
                error:true
            })
        }else{
            this.setState({
                question,
                error:false
            })
        }
    }
    handleAnswerChange(answer){
        if(answer.length === 0){
            this.setState({
                error:true
            })
        }else{
            this.setState({
                answer,
                error:false
            })
        }
    }
    submit = () =>{
        const { title} = this.props
        const { question, answer } = this.state
        const {dispatch} = this.props
        dispatch(handleAddQuestion({title, question, answer}))
        this.props.navigation.navigate('SingleDeck')
    }

    render(){
        const {question,answer, error } = this.state
        return (
            <View styles ={styles.deckContainer}>
                    <View>
                        <View>
                            <Text style={styles.header}>Add a question to your Deck!</Text>
                        </View>
                        <View style={styles.center}>
                            <View style ={styles.input}>
                                <TextInput
                                    placeholder="Enter question here!"
                                    onChangeText={(question) => {
                                        this.handleQuestionChange(question
                                    )}}
                                    style={{fontSize: 20, textAlign: 'center'}}
                                />
                            </View>        
                        </View>
                        { error &&
                        <View style={styles.errorContainer}>
                            <Text style={styles.error}>Please enter at least one character!</Text>
                        </View>
                        }
                        <View style={styles.center}>
                            <View style ={styles.input}>
                                <TextInput
                                    placeholder="Enter answer here!"
                                    onChangeText={(question) => {
                                        this.handleAnswerChange(question
                                    )}}
                                    style={{fontSize: 20, textAlign: 'center'}}
                                />
                            </View>        
                        </View>
                        { error &&
                        <View style={styles.errorContainer}>
                            <Text style={styles.error}>Please enter at least one character!</Text>
                        </View>
                        }
                        { (question || answer) !='' &&            
                        <View>
                            <TouchableOpacity 
                                style={styles.button}
                                onPress={(e)=>this.submit()}
                            >
                                <Text style={styles.buttonText}>Add Deck</Text>
                            </TouchableOpacity>
                        </View>
                        }
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 100

    },
    center:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
      input: { 
        backgroundColor:white,
        padding: 20,
        borderColor: '#000',
        borderRadius: 8,
        width: 280,
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 20,
      },
      error:{
          color: 'red',
          textAlign: 'center',
          fontSize: 10,
      },
      errorContainer: {
          
      }
})

function mapStateToProps({FLASH_CARDS, page}){
    const title = page
    // const questions = FLASH_CARDS[page].questions
    return {
        FLASH_CARDS,
        // questions,
        title
    }
}
export default connect(mapStateToProps)(AddCard)