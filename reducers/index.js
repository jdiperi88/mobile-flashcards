import { RECEIVE_DECKS,ADD_DECK } from '../actions'
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
                    },
                    ...state[FLASH_CARDS]
                },
                    
            }
        default:
            return state
    }
}

export default decks