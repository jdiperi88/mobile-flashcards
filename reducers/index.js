import { RECEIVE_DECKS,ADD_DECK, ADD_PAGE, ADD_QUESTION, CLEAR_DECKS } from '../actions'
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
        case ADD_QUESTION:
             state.FLASH_CARDS[action.question.title].questions.push({question :action.question.question,answer:action.question.answer})
            return {
                [FLASH_CARDS]: {
                    ...state[FLASH_CARDS]
                },
                page: action.question.title   
            }
        case CLEAR_DECKS:
           return {
               [FLASH_CARDS]: null
           }
        default:
            return state
    }
}

export default decks