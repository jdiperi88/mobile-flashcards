import {
	RECEIVE_DECKS,
	ADD_DECK,
	ADD_PAGE,
	ADD_QUESTION,
	CLEAR_DECKS
} from "../actions";
import { FLASH_CARDS } from "../utils/api";
function decks(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks
			};
		case ADD_DECK:
			return {
				[FLASH_CARDS]: {
					...state[FLASH_CARDS],
					[action.deck.title]: {
						title: action.deck.title,
						questions: []
					}
				}
			};
		case ADD_PAGE:
			return {
				...state,
				...action.page
			};
		case ADD_QUESTION:
			const { question, answer, title } = action.question;
			let arr = [
				...state[FLASH_CARDS][title]["questions"],
				{ question, answer }
			];
			return {
				[FLASH_CARDS]: {
					...state[FLASH_CARDS],
					[title]: {
						title,
						questions: [
							...state[FLASH_CARDS][title]["questions"],
							{ question, answer }
						]
					}
				},
				page: title
			};
		case CLEAR_DECKS:
			return {
				[FLASH_CARDS]: null
			};
		default:
			return state;
	}
}

export default decks;
