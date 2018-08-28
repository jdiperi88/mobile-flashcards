import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { white, blue, purple } from "../utils/colors";
import { addDeckTitle } from "../utils/api";
import { handleAddDeckTitle } from "../actions";
import { NavigationActions } from "react-navigation";

class NewDeck extends Component {
	state = {
		title: "",
		error: false
	};
	componentDidMount() {}
	handleTextChange(title) {
		if (title.length === 0) {
			this.setState({
				error: true
			});
		} else {
			this.setState({
				title,
				error: false
			});
		}
	}
	submit = title => {
		if (!this.state.error) {
			const { dispatch } = this.props;
			addDeckTitle(title);
			dispatch(handleAddDeckTitle({ title }));
			this.toHome();
		}
	};
	toHome = () => {
		this.props.navigation.navigate("DeckList");
	};
	render() {
		const { title, error } = this.state;
		return (
			<View styles={styles.deckContainer}>
				<View>
					<View>
						<Text style={styles.header}>Enter Your New Deck of Knowledge!</Text>
					</View>
					<View style={styles.center}>
						<View style={styles.input}>
							<TextInput
								placeholder="Type deck title here!"
								onChangeText={title => this.handleTextChange(title)}
								style={{ fontSize: 20, textAlign: "center" }}
							/>
						</View>
					</View>
					{error && (
						<View style={styles.errorContainer}>
							<Text style={styles.error}>
								Please enter at least one character!
							</Text>
						</View>
					)}
					{title != "" && (
						<View>
							<TouchableOpacity
								style={styles.button}
								onPress={e => this.submit(title)}
							>
								<Text style={styles.buttonText}>Add Deck</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	deckContainer: {
		flex: 1
	},
	header: {
		textAlign: "center",
		fontSize: 30,
		marginTop: 100
	},
	center: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
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
	},
	input: {
		backgroundColor: white,
		padding: 20,
		borderColor: "#000",
		borderRadius: 8,
		width: 280,
		borderStyle: "solid",
		borderWidth: 1,
		marginTop: 20
	},
	error: {
		color: "red",
		textAlign: "center",
		fontSize: 10
	},
	errorContainer: {}
});

export default connect()(NewDeck);
