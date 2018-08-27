#Mobile Flashcards

## How to start the app
* Xcode is required for the iphone simulator or a user can use the android simulator
* Another option is to download the expo app on your phone and can run the app through their device via the expo app
* A user must git clone the repo
* Once cloned, a user must run `npm install` in their terminal
* User must then type `npm start` in their terminal to start the application

## Data

There are two types of objects stored in our database:

* FLASH_CARDS
* NOTIFICATIONS

## FLASH_CARDS

FLASH_CARDS were stored using React Natives `AsyncStorage`:

* sample deck object on the flashcards object
{
  deck_name: {
    title: 'deck_name',
    questions: [
      {
        question: 'What is React-native?',
        answer: 'A library for managing user interfaces and allowing developers the ability to use js to make native applications'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  }

Your code will talk to the database via 5 methods:

* `getDecks()`
* `addCard({question,answer,title})`
* `addDeckTitle(title)`
* `clearAllDecks()`
* `setLocalNotification()`
* `clearNotifications()`

1) `getDecks()` Method

*Description*: Get all flashcard decks from native local storage.  
*Return Value*: Object where the key is FLASH_CARDS and the value an object with title as keys for each flash card.

2) `addCard({question,answer,title})` Method

*Description*: Get all flashcard decks from native local storage.  
*Return Value*: Object where the key is FLASH_CARDS and the value an object with title as keys for each flash card.

3) `addDeckTitle(title)` Method

*Description*: Get all flashcard decks from native local storage.  
*Return Value*: Object where the key is FLASH_CARDS and the value an object with title as keys for each flash card.

3) `clearAllDecks()` Method

*Description*: Deletes all flashcard decks from native local storage.  
*Return Value*: Object where the key is FLASH_CARDS and the value null.

4) `setLocalNotification()` Method

*Description*: if user grants permission, it sets a local notification in native local storage.  

5) `clearNotifications()` Method

*Description*: clears all notifcations and resets another notifcation for the next day.  

# How the app functions

Apart from using local storage to save data, this database is synced up with the redux store. The redux store also has quiz functionality that allows users to quiz themselves on how well they know each deck they have created.

* A user chooses a deck from their deck list and then is navigated to their deck page.
* On the deck page, the user has the ability to quiz themselves on their current knowledge, or add another card to their deck. 
* The quiz will go through each card and after a user clicks correct or incorret using their own self assessment, the app will then proceed to the next card. 
* If the deck runs out of cards the user will be prompted to grade their quiz and will be informed of how well they did receiving a percentage grade.

#Navigation
* This application uses react-navigation and leverages the Tab and stack navigators nested together to create a flawless user flow. 