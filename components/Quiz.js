import React, {Component} from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import { connect}from 'react-redux'
import { white, blue } from '../utils/colors'
import Deck from './Deck';
import Question from './Question';

class Quiz extends Component {

    state={
        cardNumber: 0,
        grade: 0,
        cardSide: true,
        questionNum:0,
        revealGrade: false
    }
    componentDidMount(){
        this.setState({
            questionNum: this.props.questions.length
        })
    }
    handleCardSide = ()=>{
        this.setState({
            cardSide:!this.state.cardSide
        })
    }
    handleAnswer= (answer)=>{
        let {cardNumber} = this.state
        if(answer){
            this.setState({
                grade: this.state.grade+=1,
                cardNumber: cardNumber+=1
            })
        }else{
            this.setState({
                cardNumber: cardNumber+=1
            })
        }
    }
    
    submit=()=>{
        let {grade, questionNum} = this.state
        this.setState({
            grade: `${Math.floor((grade/questionNum)*100)}%`,
            revealGrade: true
        })
    }
    render(){
        const {title,questions  } = this.props
        let {cardNumber, cardSide, grade, revealGrade, questionNum} = this.state 
        return (
            <View styles ={styles.container}>
                {
                        cardNumber < questionNum 
                    ?
                <View>
                    <Question
                        question={questions[cardNumber].question}
                        answer={questions[cardNumber].answer}
                        cardSide={cardSide}
                        handleCardSide={this.handleCardSide} 
                    />
                    <TouchableOpacity 
                        style={[styles.button,{backgroundColor:'green'}]}
                        onPress={()=> this.handleAnswer(true)}
                    >
                        <Text style={styles.buttonText}>Correct!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.button,{backgroundColor:'red'}]}
                        onPress={()=> this.handleAnswer(false)}
                    >
                        <Text style={styles.buttonText}>Incorrect!</Text>
                    </TouchableOpacity>
                </View>
                :
                 revealGrade
                 ?
                 <View style={styles.card}>
                    <Text style={styles.cardText}>
                        You earned a {grade}
                    </Text>
                    <Text style={styles.cardText}>
                        
                    </Text>
                    <TouchableOpacity 
                        style={[styles.button,{backgroundColor:'purple'}]}
                        onPress={()=> this.props.navigation.navigate('Deck')}
                    >
                        <Text style={styles.buttonText}>Back to Decks</Text>
                    </TouchableOpacity>
                </View>
                 :
                    <View style={styles.card}>
                        <Text style={styles.cardText}>
                            Click to see your grade! 
                        </Text>
                        <TouchableOpacity 
                            style={[styles.button,{backgroundColor:'purple'}]}
                            onPress={()=> this.submit()}
                        >
                            <Text style={styles.buttonText}>Grade</Text>
                        </TouchableOpacity>
                    </View>
                }

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