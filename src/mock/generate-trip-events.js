import {getRandomItemArr, getRandomInteger} from "../utils";
import {
  getRandomStartDate,
  getEndDate,
  getDateDiffer,
  getRandomOffers,
  generateRandomDescription,
  generateRandomPhoto,
  parseDate,
} from "./mock-utils";
import {eventDestinations, eventTypeActionsMap, eventTypes, offers} from "./trip-events-mocks";

export const getTripEventData = () => {
  const event = getRandomItemArr(eventTypes);
  const startDate = new Date(getRandomStartDate());
  const endDate = getEndDate(startDate);
  const incCounter = () => {
    let counter = 1;
    return counter++;
  };
  const photos = generateRandomPhoto();
  const hasOffers = Math.random() > 0.5;

  return {
    eventType: event,
    eventDestination: getRandomItemArr(eventDestinations),
    eventOffers: hasOffers ? getRandomOffers(offers) : null,
    destinationDescription: generateRandomDescription(),
    destinationPhoto: photos,
    startTime: startDate,
    parsedStartDate: parseDate(startDate),
    endTime: endDate,
    timeDiff: getDateDiffer(startDate, endDate),
    action: eventTypeActionsMap[event],
    isFavorite: Boolean(getRandomInteger(0, 1)),
    price: getRandomInteger(10, 1000),
    counter: incCounter(),
  };
};

export const generateEvents = (count) => {
  return new Array(count).fill(``).map(getTripEventData);
};
