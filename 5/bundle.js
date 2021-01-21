/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: MONTHS, MONTH_DAYS, timeConvertToMs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_DAYS", function() { return MONTH_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeConvertToMs", function() { return timeConvertToMs; });
const MONTHS = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];

const MONTH_DAYS = {
  '0': 31,
  '1': 28,
  '2': 31,
  '3': 30,
  '4': 31,
  '5': 30,
  '6': 31,
  '7': 31,
  '8': 30,
  '9': 31,
  '10': 30,
  '11': 31
};

const timeConvertToMs = {
  MINUTE: 60000,
  HOUR: 360000,
  DAY: 86400000,
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: addEventToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventToList", function() { return addEventToList; });
/* harmony import */ var _mock_generate_trip_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/generate-trip-events */ "./src/mock/generate-trip-events.js");
/* harmony import */ var _view_header_trip_cost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/header-trip-cost */ "./src/view/header-trip-cost.js");
/* harmony import */ var _view_header_nav_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/header-nav-menu */ "./src/view/header-nav-menu.js");
/* harmony import */ var _view_header_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/header-filters */ "./src/view/header-filters.js");
/* harmony import */ var _view_trip_sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/trip-sorting */ "./src/view/trip-sorting.js");
/* harmony import */ var _view_trip_events_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/trip-events-container */ "./src/view/trip-events-container.js");
/* harmony import */ var _view_trip_info_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/trip-info-container */ "./src/view/trip-info-container.js");
/* harmony import */ var _view_trip_info_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/trip-info-route */ "./src/view/trip-info-route.js");
/* harmony import */ var _view_render_event_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/render-event-form */ "./src/view/render-event-form.js");
/* harmony import */ var _view_render_trip_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/render-trip-event */ "./src/view/render-trip-event.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./src/utils.js");












const RENDER_EVENTS_COUNT = 4;
const events = Object(_mock_generate_trip_events__WEBPACK_IMPORTED_MODULE_0__["generateEvents"])(RENDER_EVENTS_COUNT);

// Обработчики события смены формы на список и наоборот

const addEventToList = (eventListElement, event) => {
  const tripEvent = new _view_render_trip_event__WEBPACK_IMPORTED_MODULE_9__["default"](event);
  const eventSwitchButton = tripEvent.getElement().querySelector(`.event__rollup-btn`);
  const tripForm = new _view_render_event_form__WEBPACK_IMPORTED_MODULE_8__["default"](event, event.counter);
  const eventEditForm = tripForm.getElement();

  const eventSwitchButtonHandler = () => {
    eventListElement.replaceChild(tripForm.getElement(), tripEvent.getElement());
  };

  const formSwitchSubmitHandler = (evt) => {
    evt.preventDefault();
    eventListElement.replaceChild(tripEvent.getElement(), tripForm.getElement());
  };

  eventSwitchButton.addEventListener(`click`, eventSwitchButtonHandler);
  eventEditForm.addEventListener(`submit`, formSwitchSubmitHandler);

  Object(_utils__WEBPACK_IMPORTED_MODULE_10__["renderElement"])(eventListElement, tripEvent.getElement());
};

// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);


const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);

Object(_utils__WEBPACK_IMPORTED_MODULE_10__["renderElement"])(tripMainElement, new _view_trip_info_container__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), `prepend`);
const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);

Object(_utils__WEBPACK_IMPORTED_MODULE_10__["renderElement"])(tripInfoContainer, new _view_trip_info_route__WEBPACK_IMPORTED_MODULE_7__["default"](events).getElement());
Object(_utils__WEBPACK_IMPORTED_MODULE_10__["renderElement"])(tripInfoContainer, new _view_header_trip_cost__WEBPACK_IMPORTED_MODULE_1__["default"](events).getElement());


Object(_utils__WEBPACK_IMPORTED_MODULE_10__["renderElement"])(tripControlsFirstHeaderElement, new _view_header_nav_menu__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), `insertAfter`);
Object(_utils__WEBPACK_IMPORTED_MODULE_10__["renderElement"])(tripControlsSecondHeaderElement, new _view_header_filters__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), `insertAfter`);

// сортировка

Object(_utils__WEBPACK_IMPORTED_MODULE_10__["renderElement"])(tripEventsElement, new _view_trip_sorting__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement());

const tripSortElement = tripEventsElement.querySelector(`.trip-sort`);

Object(_utils__WEBPACK_IMPORTED_MODULE_10__["renderElement"])(tripSortElement, new _view_trip_events_container__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), `insertAfter`);

const eventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// форма
// renderElement(eventsListElement, new RenderEventFormView(events[getRandomInteger(0, events.length)], events.counter).getElement(),`insertBefore`);

// Создание моков

events.forEach((event) => {
  addEventToList(eventsListElement, event);
// renderElement(eventsListElement, new TripEventView(event).getElement());
});


/***/ }),

/***/ "./src/mock/generate-trip-events.js":
/*!******************************************!*\
  !*** ./src/mock/generate-trip-events.js ***!
  \******************************************/
/*! exports provided: getTripEventData, generateEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripEventData", function() { return getTripEventData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEvents", function() { return generateEvents; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-utils */ "./src/mock/mock-utils.js");
/* harmony import */ var _trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip-events-mocks */ "./src/mock/trip-events-mocks.js");
/* harmony import */ var _view_trip_event_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/trip-event-time */ "./src/view/trip-event-time.js");





const getTripEventData = () => {
  const event = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomItemArr"])(_trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__["eventTypes"]);
  const startDate = new Date(Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomStartDate"])());
  const endDate = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getEndDate"])(startDate);
  const incCounter = () => {
    let counter = 1;
    return counter++;
  };
  const photos = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["generateRandomPhoto"])();
  const hasOffers = Math.random() > 0.5;
  const differenceDate = Object(_view_trip_event_time__WEBPACK_IMPORTED_MODULE_3__["getTimeDiff"])(startDate, endDate);

  return {
    eventType: event,
    eventDestination: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomItemArr"])(_trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__["eventDestinations"]),
    eventOffers: hasOffers ? Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomOffers"])(_trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__["offers"]) : null,
    destinationDescription: Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["generateRandomDescription"])(),
    destinationPhoto: photos,
    startTime: startDate,
    parsedStartDate: Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["parseDate"])(startDate),
    endTime: endDate,
    timeDiff: differenceDate,
    action: _trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__["eventTypeActionsMap"][event],
    isFavorite: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    price: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(10, 1000),
    counter: incCounter(),
  };
};

const generateEvents = (count) => {
  return new Array(count).fill(``).map(getTripEventData);
};


/***/ }),

/***/ "./src/mock/mock-utils.js":
/*!********************************!*\
  !*** ./src/mock/mock-utils.js ***!
  \********************************/
/*! exports provided: generateRandomDescription, generateRandomPhoto, getRandomStartDate, getEndDate, getDateDiffer, getRandomOffers, parseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomDescription", function() { return generateRandomDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomPhoto", function() { return generateRandomPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomStartDate", function() { return getRandomStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndDate", function() { return getEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateDiffer", function() { return getDateDiffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomOffers", function() { return getRandomOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _trip_events_mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-events-mocks */ "./src/mock/trip-events-mocks.js");



const generateRandomDescription = () => {
  const count = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 5);
  let description = ``;

  for (let i = 0; i <= count; i++) {

    description += _trip_events_mocks__WEBPACK_IMPORTED_MODULE_1__["infoDescriptions"][i];
  }

  return description;
};

const generateRandomPhoto = () => {
  const generatePhoto = () => {

    return `http://picsum.photos/248/152?r=` + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 999);
  };

  return new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 4)).fill(``).map(generatePhoto);
};

const getRandomStartDate = () => {
  const year = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(2020, 2022);
  const month = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 12);
  const day = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 31);
  const hour = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 23);
  const minutes = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 59);

  return new Date(year, month, day, hour, minutes);
};

const getEndDate = (startDate) => {
  return new Date(Date.parse(startDate) + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 3) * 3600000);
};

const getDateDiffer = (startDate, endDate) => {
  return endDate - startDate;
};

const getRandomOffers = (offers) => {
  const offersCount = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 5);
  const randomOffers = [];

  for (let i = 0; i < offersCount; i++) {
    const offer = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomItemArr"])(offers);
    if (randomOffers.indexOf(offer) === -1) {
      randomOffers.push(offer);
    }
  }

  return randomOffers;
};

const parseDate = (date) => {
  const receivedDate = date.getDate();
  const receivedMonth = date.getMonth();
  const receivedYear = date.getFullYear();

  return Date.parse((new Date(receivedYear, receivedMonth, receivedDate)).toString());
};


/***/ }),

/***/ "./src/mock/trip-events-mocks.js":
/*!***************************************!*\
  !*** ./src/mock/trip-events-mocks.js ***!
  \***************************************/
/*! exports provided: eventTypes, eventDestinations, infoDescriptions, eventTypeActionsMap, offers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTypes", function() { return eventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventDestinations", function() { return eventDestinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoDescriptions", function() { return infoDescriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTypeActionsMap", function() { return eventTypeActionsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offers", function() { return offers; });
const eventTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`,
  `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];

const eventDestinations = [`Amsterdam`, `Minsk`, `Geneva`, `Vladivostok`, `New York`, `London`, `Paris`, `Bruxelles`];

const infoDescriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const eventTypeActionsMap = {
  'Taxi': `to`,
  'Bus': `to`,
  'Train': `to`,
  'Ship': `to`,
  'Transport': `to`,
  'Drive': `to`,
  'Flight': `to`,
  'Check-in': `in`,
  'Sightseeing': `in`,
  'Restaurant': `in`,
};

const offers = [
  {
    id: `luggage`,
    title: `Add luggage`,
    price: 38,
  },
  {
    id: `comfort`,
    title: `Switch to comfort class`,
    price: 100,
  },
  {
    id: `meal`,
    title: `Add meal`,
    price: 15,
  },
  {
    id: `seats`,
    title: `Choose seats`,
    price: 5,
  },
  {
    id: `train`,
    title: `Travel by train`,
    price: 40,
  },
  {
    id: `taxi`,
    title: `Order a taxi`,
    price: 25,
  },
  {
    id: `breakfast`,
    title: `Add breakfast`,
    price: 11,
  },
  {
    id: `carrent`,
    title: `Rent a car`,
    price: 60,
  },
  {
    id: `wi-fi`,
    title: `Access to Wi-Fi`,
    price: 3,
  },
];


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, getRandomItemArr, createElement, renderElement, renderTemplate, sortTripEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItemArr", function() { return getRandomItemArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTripEvents", function() { return sortTripEvents; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomItemArr = (arr) => {

  return arr[getRandomInteger(0, arr.length - 1)];
};

const createElement = (template) => { // позволяет получить элемент для вставки в дом-дерево
  const newElement = document.createElement(`div`);

  newElement.innerHTML = template;

  return newElement.firstChild;
};

const renderElement = (container, element, position = `append`) => {
  const parentContainer = typeof container === `string` ? document.querySelector(container) : container;

  switch (position) {
    case `append`:
      parentContainer.append(element);
      break;
    case `prepend`:
      parentContainer.prepend(element);
      break;
    case `insertBefore`:
      parentContainer.parentNode.insertBefore(element, parentContainer);
      break;
    case `insertAfter`:
      parentContainer.parentNode.insertBefore(element, parentContainer.nextSibling);
      break;
  }
};

const renderTemplate = (container, template) => {
  container.append(template);
};

const sortTripEvents = (events) => {
  return events.slice().sort((a, b) => a.start - b.start);
};


/***/ }),

/***/ "./src/view/get-days-and-dates.js":
/*!****************************************!*\
  !*** ./src/view/get-days-and-dates.js ***!
  \****************************************/
/*! exports provided: getDateAndTimeFormFormat, getEventsDates, getTripDaysWithDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateAndTimeFormFormat", function() { return getDateAndTimeFormFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventsDates", function() { return getEventsDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripDaysWithDates", function() { return getTripDaysWithDates; });
const getDateAndTimeFormFormat = (date) => {
  const year = date.getFullYear().toString().slice(2, 4);

  const dateValues = Array.of(date.getDate(), date.getMonth() + 1, date.getHours(), date.getMinutes()).map((value) => {
    return value < 10 ? `0` + value : value;
  });

  const [day, month, hours, minutes] = dateValues;

  return day + `/` + month + `/` + year + ` ` + hours + `:` + minutes;
};

const getEventsDates = (events) => {
  return events.map((event) => {
    return new Date(event.startTime.getFullYear(), event.startTime.getMonth(), event.startTime.getDate());
  });
};

const getTripDays = (daysCounters) => {
  const tripDaysArr = Array.of(1);

  for (let i = 1; i < daysCounters.length; i++) {
    tripDaysArr.push(tripDaysArr[i - 1] + daysCounters[i]);
  }

  return tripDaysArr;
};

const createTripDays = (sortedDates) => {
  const allTripEventsDates = getEventsDates(sortedDates);
  const tripDays = [];

  allTripEventsDates.forEach((date) => {
    const dateUTCFormat = Date.parse(date);

    if (tripDays.indexOf(dateUTCFormat) === -1) {
      tripDays.push(dateUTCFormat);
    }
  });

  tripDays.sort((a, b) => a - b).forEach((date) => date);

  return tripDays;
};

const getTripDaysWithDates = (sortedTripEvents) => {
  const uniqueTripEventsDates = createTripDays(sortedTripEvents);
  const tripDays = getTripDays(uniqueTripEventsDates);

  return tripDays.map((day, index) => {
    return {
      counter: day,
      date: uniqueTripEventsDates[index],
    };
  });
};



/***/ }),

/***/ "./src/view/header-filters.js":
/*!************************************!*\
  !*** ./src/view/header-filters.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderFilters; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const renderFilter = () => {
  return (`<form class="trip-filters" action="#" method="get">
            <div class="trip-filters__filter">
              <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
              <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
            </div>
            <div class="trip-filters__filter">
              <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
              <label class="trip-filters__filter-label" for="filter-future">Future</label>
            </div>
            <div class="trip-filters__filter">
              <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
              <label class="trip-filters__filter-label" for="filter-past">Past</label>
            </div>
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`).trim();
};

class HeaderFilters {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return renderFilter();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/header-nav-menu.js":
/*!*************************************!*\
  !*** ./src/view/header-nav-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderNavMenu; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createNavMenuTemplate = () => {
  return (`<nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
              <a class="trip-tabs__btn" href="#">Stats</a>
            </nav>`).trim();
};

class HeaderNavMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNavMenuTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/header-trip-cost.js":
/*!**************************************!*\
  !*** ./src/view/header-trip-cost.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderTripCost; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const renderTripCostTemplate = (tripEvents) => {
  const countOffersCost = (offers) => {
    return offers === null ? 0 : offers.reduce((total, cost) => total + cost.price, 0);
  };

  const getEventsCost = (events) => {
    return events.reduce((total, cost) => total + cost.price + countOffersCost(cost.eventOffers), 0);
  };

  return (`<p class="trip-info__cost">Total: &euro;&nbsp;<span class="trip-info__cost-value">${getEventsCost(tripEvents)}</span></p>`).trim();
};

class HeaderTripCost {
  constructor(tripEvents) {
    this._element = null;
    this._tripEvents = tripEvents;
  }

  getTemplate() {
    return renderTripCostTemplate(this._tripEvents);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/render-event-form.js":
/*!***************************************!*\
  !*** ./src/view/render-event-form.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderEventForm; });
/* harmony import */ var _mock_trip_events_mocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/trip-events-mocks */ "./src/mock/trip-events-mocks.js");
/* harmony import */ var _trip_event_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-event-time */ "./src/view/trip-event-time.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");




const renderEventOffers = (offers) => {
  return offers.map((offer, index) => {
    const {id, title, price} = offer;
    const isChecked = Math.random() > 0.5;
    return (
      `<div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}-${index + 1}"
              type="checkbox" name="event-offer-${id}" ${isChecked ? `checked` : ``}>
          <label class="event__offer-label" for="event-offer-${id}-${index + 1}">
          <span class="event__offer-title">${title}</span>
              &plus;
              &euro;&nbsp;<span class="event__offer-price">${price}</span>
          </label>
      </div>`
    );
  })
    .join(``);
};

const renderOffers = (offers) => {
  const eventOffers = renderEventOffers(offers);
  return `<section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>
              <div class="event__available-offers">
                  ${eventOffers}
              </div>
          </section>`;
};

const renderOptions = (destinations) => {
  return destinations.map((destination) => {
    return `<option value="${destination}"></option>`;
  }).join(`\n`);
};

const renderTypesList = (types) => {
  return types.map((type, id) => {
    return `<div class="event__type-item">
              <input id="event-type-${type.toLowerCase()}-${id + 1}" class="event__type-input  visually-hidden"
                   type="radio" name="event-type" value="${type}">
              <label class="event__type-label  event__type-label--${type.toLowerCase()}"
                  for="event-type-${type.toLowerCase()}-${id + 1}">${type}</label>
              </div>`;
  }).join(`\n`);
};

const renderPhotos = (photos) => {
  return photos.map((photo) => {
    return `<img class="event__photo" src="${photo}" alt="Event photo">`;
  }).join(`\n`);
};

const createEventForm = (events, id) => {
  const {eventType, eventDestination, destinationDescription, destinationPhoto, eventOffers, price, action, startTime} = events;

  const eventTypesList = renderTypesList(_mock_trip_events_mocks__WEBPACK_IMPORTED_MODULE_0__["eventTypes"].slice(0, 7));
  const activitiesTypesList = renderTypesList(_mock_trip_events_mocks__WEBPACK_IMPORTED_MODULE_0__["eventTypes"].slice(7, 10));
  const eventOptions = renderOptions(_mock_trip_events_mocks__WEBPACK_IMPORTED_MODULE_0__["eventDestinations"]);
  const eventPhotos = renderPhotos(destinationPhoto);
  const startDate = Object(_trip_event_time__WEBPACK_IMPORTED_MODULE_1__["getEventTimeFormat"])(startTime);
  const offers = eventOffers !== null ? renderOffers(eventOffers) : ``;

  return `<form class="trip-events__item  event  event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType.toLowerCase()}.png" alt="Event ${eventType.toLowerCase()} icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">
      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Transfer</legend>
          <div class="event__type-item">
            ${eventTypesList}
          </div>
        </fieldset>
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Activity</legend>
          <div class="event__type-item">
            ${activitiesTypesList}
          </div>
        </fieldset>
      </div>
    </div>
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-${id}">
        ${eventType} ${action}
      </label>

<input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${eventDestination}" list="destination-list-1">
      <datalist id="destination-list-${id}">
        ${eventOptions}
      </datalist>
    </div>
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${id}">
        From
      </label>
      <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${startDate}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${id}">
        To
      </label>
      <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="18/03/19 00:00">
    </div>
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-${id}">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${price}">
    </div>
    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">
    ${offers}
  <p class="event__destination-description">${destinationDescription}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${eventPhotos}
          </div>
        </div>
      </section>
  </section>
</form>`;
};

class RenderEventForm {
  constructor(events, id) {
    this._events = events;
    this._id = id;
  }

  getTemplate() {
    return createEventForm(this._events, this._id);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/render-trip-event.js":
/*!***************************************!*\
  !*** ./src/view/render-trip-event.js ***!
  \***************************************/
/*! exports provided: renderOffers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderOffers", function() { return renderOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderTripEvent; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _trip_event_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-event-time */ "./src/view/trip-event-time.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");




const renderEventOffers = (offers) => {
  return offers.map((offer, index) => {
    const {id, title, price} = offer;
    const isChecked = Math.random() > 0.5;
    return (
      `<div class="event__offer-selector">
<input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}-${index + 1}" type="checkbox" name="event-offer-${id} ${isChecked ? `checked` : ``}">
<label class="event__offer-label" for="event-offer-${id}-${index + 1}">
<span class="event__offer-title">${title}</span>
            &plus;
            &euro;&nbsp;
            <span class="event__offer-price">${price}</span>
            </div>`
    );
  })
    .join(`\n`);
};

const renderOffers = (offers) => {
  const eventOffers = renderEventOffers(offers);

  return (`<section class="event__section event__section--offers">
<div class="event__available-offers">${eventOffers}</div>
</section>`);
};

const renderTripEventTemplate = (event) => {
  const {eventType, eventDestination, eventOffers, price, action, startTime, endTime, timeDiff} = event;

  const tripEventOffers = eventOffers !== null ? renderOffers(eventOffers) : ``;
  const start = Object(_trip_event_time__WEBPACK_IMPORTED_MODULE_1__["getEventTimeFormat"])(startTime);
  const end = Object(_trip_event_time__WEBPACK_IMPORTED_MODULE_1__["getEventTimeFormat"])(endTime);

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${startTime.toISOString()}">${_const__WEBPACK_IMPORTED_MODULE_2__["MONTHS"][startTime.getMonth() - 1]} ${startTime.getDate()}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType}.png" alt="Event ${eventType} icon">
                </div>
                <h3 class="event__title">${eventType} ${action} ${eventDestination}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${startTime.toISOString()}">${start}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${endTime.toISOString()}">${end}</time>
                  </p>
                  <p class="event__duration">${timeDiff}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${tripEventOffers}
                </ul>
                <button class="event__favorite-btn" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
};

class RenderTripEvent {
  constructor(event) {
    this._element = null;
    this._event = event;
  }

  getTemplate() {
    return renderTripEventTemplate(this._event);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-time.js":
/*!*************************************!*\
  !*** ./src/view/trip-event-time.js ***!
  \*************************************/
/*! exports provided: getTimeDiff, getEventTimeFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeDiff", function() { return getTimeDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTimeFormat", function() { return getEventTimeFormat; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");


const getTimeDiff = (start, end) => {
  const diffInMs = end - start;

  const days = Math.trunc(diffInMs / _const__WEBPACK_IMPORTED_MODULE_0__["timeConvertToMs"].DAY);
  const daysString = days > 0 ? days + `D ` : ``;

  const hours = Math.trunc(diffInMs % _const__WEBPACK_IMPORTED_MODULE_0__["timeConvertToMs"].DAY / _const__WEBPACK_IMPORTED_MODULE_0__["timeConvertToMs"].HOUR);
  const hoursString = hours > 0 ? hours + `H ` : ``;

  const minutes = Math.trunc(diffInMs % _const__WEBPACK_IMPORTED_MODULE_0__["timeConvertToMs"].DAY % _const__WEBPACK_IMPORTED_MODULE_0__["timeConvertToMs"].HOUR / _const__WEBPACK_IMPORTED_MODULE_0__["timeConvertToMs"].MINUTE);
  const minutesString = minutes > 0 ? minutes + `M` : ``;

  return daysString + hoursString + minutesString;
};

const getEventTimeFormat = (time) => {
  const timeValueArr = Array.of(time.getHours(), time.getMinutes()).map((value) => {
    return value < 10 ? `0` + value : value;
  });

  return timeValueArr.join(`:`);
};


/***/ }),

/***/ "./src/view/trip-events-container.js":
/*!*******************************************!*\
  !*** ./src/view/trip-events-container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventsContainer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createTripEventsContainer = () => {
  return (`<ul class="trip-events__list"></ul>`).trim();
};

class TripEventsContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripEventsContainer();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-info-container.js":
/*!*****************************************!*\
  !*** ./src/view/trip-info-container.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfoContainer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createTripInfoContainerTemplate = () => {
  return (`<section class="trip-main__trip-info  trip-info"></section>`).trim();
};

class TripInfoContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripInfoContainerTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-info-route.js":
/*!*************************************!*\
  !*** ./src/view/trip-info-route.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfoRoute; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _get_days_and_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-days-and-dates */ "./src/view/get-days-and-dates.js");





const MAXIMUM_CITIES_SHOWN = 3;

const getTripRoute = (tripEvents) => {
  const tripEventsSortedByDate = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["sortTripEvents"])(tripEvents);
  const tripEventsCities = tripEventsSortedByDate.map((tripEvent) => tripEvent.eventDestination);
  return tripEventsCities.length <= MAXIMUM_CITIES_SHOWN ? tripEventsCities.join(` - `) : tripEventsCities.slice(0, 1) + `— … —` + tripEventsCities.slice(tripEventsCities.length - 1);
};

const getTripDates = (startDate, endDate) => {
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();
  const endMonth = endDate.getMonth();
  const endDay = endDate.getDate();
  const sameMonthString = `${_const__WEBPACK_IMPORTED_MODULE_0__["MONTHS"][startMonth]} ${startDay} &nbsp;&mdash;&nbsp; ${endDay}`;
  const differentMonthString = `${_const__WEBPACK_IMPORTED_MODULE_0__["MONTHS"][startMonth]} ${startDay} &nbsp;&mdash;&nbsp; ${_const__WEBPACK_IMPORTED_MODULE_0__["MONTHS"][endMonth]} ${endDay}`;
  return startMonth === endMonth ? sameMonthString : differentMonthString;
};

const renderTripRoute = (eventsList) => {
  const title = getTripRoute(eventsList);
  const tripDates = Object(_get_days_and_dates__WEBPACK_IMPORTED_MODULE_2__["getEventsDates"])(eventsList).sort((a, b) => a - b);
  const tripDatesString = getTripDates(tripDates[0], tripDates[tripDates.length - 1]);
  return (`<div class="trip-info__main">
            <h1 class="trip-info__title">${title}</h1>
            <p class="trip-info__dates">${tripDatesString}</p>
          </div>`).trim();
};

class TripInfoRoute {
  constructor(eventsList) {
    this._element = null;
    this._eventsList = eventsList;
  }

  getTemplate() {
    return renderTripRoute(this._eventsList);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-sorting.js":
/*!**********************************!*\
  !*** ./src/view/trip-sorting.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripSorting; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createTripSortingTemplate = () => {
  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`).trim();
};

class TripSorting {
  constructor() {
    this._element = null; // готовим элемент для вставки
  }

  getTemplate() {
    return createTripSortingTemplate(); // получаем шаблон
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate()); // получаем элемент
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map