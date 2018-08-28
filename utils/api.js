import { AsyncStorage } from "react-native";
export const FLASH_CARDS = "FLASH_CARDS";
import { Notifications, Permissions } from "expo";
const NOTIFICATION_KEY = "flash_cards_notifications";
export function addCard(question) {
	return AsyncStorage.getItem(FLASH_CARDS).then(data => {
		let obj = JSON.parse(data);
		obj[question.title].questions = [
			...obj[question.title].questions,
			{ question: question.question, answer: question.answer }
		];
		return AsyncStorage.setItem(FLASH_CARDS, JSON.stringify(obj)).then(
			item => {}
		);
	});
}

export function clearAllDecks() {
	return AsyncStorage.setItem(FLASH_CARDS, JSON.stringify(null)).then(
		item => {}
	);
}
export function addDeckTitle(title) {
	return AsyncStorage.getItem(FLASH_CARDS).then(data => {
		let obj = {
			...JSON.parse(data),
			[title]: {
				title,
				questions: []
			}
		};
		return AsyncStorage.setItem(FLASH_CARDS, JSON.stringify(obj)).then(
			item => {}
		);
	});
}

export function getDecks() {
	return AsyncStorage.getItem(FLASH_CARDS).then(data => {
		let obj = JSON.parse(data);
		if (obj === null) {
			return AsyncStorage.setItem(FLASH_CARDS, JSON.stringify(null)).then(
				item => {
					return AsyncStorage.getItem(FLASH_CARDS);
				}
			);
		} else {
			return AsyncStorage.getItem(FLASH_CARDS);
		}
	});
}

// notifications
export function clearLocalNotification() {
	return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
		Notifications.cancelAllScheduledNotificationsAsync
	);
}

function createNotification() {
	return {
		title: "Study Time!",
		body: "👋 don't forget to study your decks for today!",
		ios: {
			sound: true
		},
		android: {
			sound: true,
			priority: "high",
			sticky: false,
			vibrate: true
		}
	};
}

export function setLocalNotification() {
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then(data => {
			if (data === null) {
				Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
					if (status === "granted") {
						Notifications.cancelAllScheduledNotificationsAsync();

						let tomorrow = new Date();
						tomorrow.setDate(tomorrow.getDate() + 1);
						tomorrow.setHours(20);
						tomorrow.setMinutes(0);

						Notifications.scheduleLocalNotificationAsync(createNotification(), {
							time: tomorrow,
							repeat: "day"
						});

						AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
					}
				});
			}
		});
}
