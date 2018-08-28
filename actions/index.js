export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_PAGE = "ADD_PAGE";
export const ADD_QUESTION = "ADD_QUESTION";
export const CLEAR_DECKS = "CLEAR_DECKS";
function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks
	};
}

export function handleReceiveDecks(decks) {
	return dispatch => {
		dispatch(receiveDecks(decks));
	};
}

function addDeckTitle(deck) {
	return {
		type: ADD_DECK,
		deck
	};
}

export function handleAddDeckTitle(deck) {
	return dispatch => {
		dispatch(addDeckTitle(deck));
	};
}

function addPage(page) {
	return {
		type: ADD_PAGE,
		page
	};
}

export function handleAddPage(page) {
	return dispatch => {
		dispatch(addPage(page));
	};
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}

export function handleAddQuestion(question) {
	return dispatch => {
		dispatch(addQuestion(question));
	};
}

function clearDecks() {
	return {
		type: CLEAR_DECKS
	};
}

export function handleClearDecks() {
	return dispatch => {
		dispatch(clearDecks());
	};
}
