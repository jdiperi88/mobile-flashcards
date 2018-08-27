import { AsyncStorage } from 'react-native'
export const FLASH_CARDS = 'FLASH_CARDS'

export function addCard(question) {
    return AsyncStorage.getItem(FLASH_CARDS)
    .then(data=>{
        let obj = JSON.parse(data)
        obj[question.title].questions = [...obj[question.title].questions, {question:question.question,answer:question.answer}]
        return AsyncStorage.setItem(FLASH_CARDS, JSON.stringify(obj))
            .then(item =>{
                console.log(item)
            })
    })
}

export function addDeckTitle(title) {
    return AsyncStorage.getItem(FLASH_CARDS)
    .then(data=>{
        let obj = {...JSON.parse(data),
                    [title]:{
                        title,
                        questions:[]
                    }
                }
        return AsyncStorage.setItem(FLASH_CARDS, JSON.stringify(obj))
            .then(item=>{
                console.log(item)
            })
    })
}

export function getDecks(){
    return AsyncStorage.getItem(FLASH_CARDS)
        .then((data)=>{
            let obj = JSON.parse(data)
            if(obj===null){
                return AsyncStorage.setItem(FLASH_CARDS, JSON.stringify(null))
                    .then(item=>{
                        return AsyncStorage.getItem(FLASH_CARDS)
                    })
            }else{
                return AsyncStorage.getItem(FLASH_CARDS)
            }
        })
}