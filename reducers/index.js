import { RECEIVE_DECKS,ADD_DECK, ADD_PAGE } from '../actions'
import {FLASH_CARDS} from '../utils/api'
function decks(state = {}, action){
    switch(action.type){
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                [FLASH_CARDS]: {
                    [action.deck.title]:{
                        title: action.deck.title,
                        questions: [

                        ]
                    },
                    ...state[FLASH_CARDS]
                },
                    
            }
        case ADD_PAGE:
            return {
                ...state,
                ...action.page
            }
        default:
            return state
    }
}

export default decks