import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage} from 'react-native'
import { connect}from 'react-redux'
import { white, blue,purple } from '../utils/colors'
import { addTitle } from '../utils/api'

class NewDeck extends Component {
    state ={
        title: ''
    }
    componentDidMount(){
    }
    submit = (title) =>{
        addTitle(title)
    }
    render(){
        const {title } = this.state
        return (
            <View styles ={styles.deckContainer}>
                    <View>
                        <View>
                            <Text style={styles.header}>Enter Your New Deck of Knowledge!</Text>
                        </View>
                        <View style={styles.center}>
                            <View style ={styles.input}>
                                <TextInput
                                    placeholder="Type deck title here!"
                                    onChangeText={(title) => this.setState({title})}
                                    style={{fontSize: 20, textAlign: 'center'}}
                                    
                                />
                            </View>        
                        </View>             
                        <View styles ={styles.input}>
                            <Text>{title}</Text>
                        </View>
                        <View>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={()=>this.submit(title)}
                        >
                            <Text style={styles.buttonText}>Add Deck</Text>
                        </TouchableOpacity>
                        </View>
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
      metricContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: purple,
      },
})


export default connect()(NewDeck)