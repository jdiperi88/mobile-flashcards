import React, {Component} from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import { white, blue } from '../utils/colors'

class Question extends Component {

    submit=()=>{
        console.log('worked')
    }
    render(){
        const {question, answer, cardSide, handleCardSide} = this.props
        console.log(question)
        return (
            <View style={styles.card}>
                <View>
                    <Text style={styles.cardHeader}>
                        {cardSide ? 'Question:' : 'Answer:'}
                    </Text>
                </View>
                <View>
                    {
                        cardSide
                    ?
                        <Text style={styles.cardText}>
                            {question}
                        </Text>
                    :
                        <Text style={styles.cardText}>
                            {answer}
                        </Text>
                    }
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>handleCardSide()}>
                    <Text style={styles.buttonText}>
                        {cardSide ? 'Answer' : 'Question'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff', 
        marginLeft: 30, 
        marginRight:30,
        marginTop: 10,
        padding: 30,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
        width: 0,
        height: 3
        },
    },
    cardHeader:{
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10
    },
    cardText:{
        fontSize: 20,
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
        fontSize: 15,
      },

})

export default Question