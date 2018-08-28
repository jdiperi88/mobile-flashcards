import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { white, blue } from "../utils/colors";
import Deck from "./Deck";
import Question from "./Question";
import { setLocalNotification, clearLocalNotification } from "../utils/api";
class Quiz extends Component {
	state = {
		cardNumber: 0,
		grade: 0,
		cardSide: true,
		questionNum: 0,
		revealGrade: false
	};
	componentDidMount() {
		this.setState({
			questionNum: this.props.questions.length
		});
	}
	handleCardSide = () => {
		this.setState({
			cardSide: !this.state.cardSide
		});
	};
	handleAnswer = answer => {
		if (answer) {
			this.setState(prev => ({
				grade: (prev.grade += 1),
				cardNumber: (prev.cardNumber += 1)
			}));
		} else {
			this.setState(prev => ({
				cardNumber: (prev.cardNumber += 1)
			}));
		}
	};

	submit = () => {
		this.setState(prev => ({
			grade: `${Math.floor((prev.grade / prev.questionNum) * 100)}%`,
			revealGrade: true
		}));
		clearLocalNotification().then(setLocalNotification);
	};

	playAgain = () => {
		this.setState({
			grade: 0,
			cardNumber: 0
		});
	};
	render() {
		const { title, questions } = this.props;
		let { cardNumber, cardSide, grade, revealGrade, questionNum } = this.state;
		return (
			<View styles={styles.container}>
				{cardNumber < questionNum ? (
					<View>
						<Question
							question={questions[cardNumber].question}
							answer={questions[cardNumber].answer}
							cardSide={cardSide}
							handleCardSide={this.handleCardSide}
							questionNum={questionNum}
							cardNumber={cardNumber}
						/>
						<TouchableOpacity
							style={[styles.button, { backgroundColor: "green" }]}
							onPress={() => this.handleAnswer(true)}
						>
							<Text style={styles.buttonText}>Correct!</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.button, { backgroundColor: "red" }]}
							onPress={() => this.handleAnswer(false)}
						>
							<Text style={styles.buttonText}>Incorrect!</Text>
						</TouchableOpacity>
					</View>
				) : revealGrade ? (
					<View style={styles.card}>
						<Text style={styles.resultsText}>You earned a {grade}</Text>
					</View>
				) : (
					<View style={styles.card}>
						<Text style={styles.resultsText}>Click to see your grade!</Text>
						<TouchableOpacity
							style={[styles.button, { backgroundColor: "purple" }]}
							onPress={() => this.submit()}
						>
							<Text style={styles.buttonText}>Grade</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.button, { backgroundColor: "blue" }]}
							onPress={() => this.playAgain()}
						>
							<Text style={styles.buttonText}>Try Again</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.button, { backgroundColor: "green" }]}
							onPress={() => this.props.navigation.navigate("DeckList")}
						>
							<Text style={styles.buttonText}>Back To Decks</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "blue",
		padding: 15,
		justifyContent: "center",
		alignItems: "center"
	},
	card: {
		backgroundColor: "#fff",
		marginLeft: 30,
		marginRight: 30,
		marginTop: 10,
		padding: 50,
		shadowOpacity: 0.8,
		shadowColor: "rgba(0, 0, 0, 0.24)",
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	cardText: {
		fontSize: 40,
		textAlign: "center"
	},
	resultsText: {
		fontSize: 20,
		textAlign: "center"
	},
	button: {
		padding: 10,
		backgroundColor: blue,
		alignSelf: "center",
		borderRadius: 5,
		margin: 20,
		shadowRadius: 3,
		shadowOpacity: 0.8,
		shadowColor: "rgba(0, 0, 0, 0.24)",
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	buttonText: {
		color: white,
		fontSize: 20
	}
});

function mapStateToProps({ FLASH_CARDS, page }) {
	const title = page;
	const questions = FLASH_CARDS[page].questions;
	return {
		questions,
		title
	};
}
export default connect(mapStateToProps)(Quiz);
