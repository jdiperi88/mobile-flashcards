import { AsyncStorage } from 'react-native'
export const FLASH_CARDS = 'FLASH_CARDS'

export function addDeckTitle(title) {
    console.log(title)
}

export function getDecks(){
    return AsyncStorage.getItem(FLASH_CARDS)
}