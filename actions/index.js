export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

function receiveDecks(decks){
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function handleReceiveDecks(decks) {
    return(dispatch) => {
        dispatch(receiveDecks(decks))
    }
}

function addDeckTitle(deck){
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleAddDeckTitle(deck){
    return(dispatch) =>{
        dispatch(addDeckTitle(deck))
    }
}