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
/*! exports provided: RenderPositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPositions", function() { return RenderPositions; });
const RenderPositions = {
  AFTERBEGIN: `afterbegin`,
  BEFOREBEGIN: `beforebegin`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`,
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_generate_trip_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/generate-trip-events */ "./src/mock/generate-trip-events.js");
/* harmony import */ var _view_trip_info_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/trip-info-container */ "./src/view/trip-info-container.js");
/* harmony import */ var _view_trip_info_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/trip-info-route */ "./src/view/trip-info-route.js");
/* harmony import */ var _view_header_trip_cost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/header-trip-cost */ "./src/view/header-trip-cost.js");
/* harmony import */ var _view_header_nav_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/header-nav-menu */ "./src/view/header-nav-menu.js");
/* harmony import */ var _view_event_tences_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/event-tences-filter */ "./src/view/event-tences-filter.js");
/* harmony import */ var _view_trip_sorting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/trip-sorting */ "./src/view/trip-sorting.js");
/* harmony import */ var _view_event_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/event-form */ "./src/view/event-form.js");
/* harmony import */ var _view_trip_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/trip-event */ "./src/view/trip-event.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./const */ "./src/const.js");












const RENDER_EVENTS_COUNT = 20;
const events = Object(_mock_generate_trip_events__WEBPACK_IMPORTED_MODULE_0__["generateWaypoints"])(RENDER_EVENTS_COUNT);
// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);

Object(_utils__WEBPACK_IMPORTED_MODULE_9__["renderTemplate"])(tripMainElement, Object(_view_trip_info_container__WEBPACK_IMPORTED_MODULE_1__["createTripInfoContainerTemplate"])(), `afterbegin`);

const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);

Object(_utils__WEBPACK_IMPORTED_MODULE_9__["renderTemplate"])(tripInfoContainer, Object(_view_trip_info_route__WEBPACK_IMPORTED_MODULE_2__["createTripInfoRouteTemplate"])(), `beforeend`);
Object(_utils__WEBPACK_IMPORTED_MODULE_9__["renderTemplate"])(tripInfoContainer, Object(_view_header_trip_cost__WEBPACK_IMPORTED_MODULE_3__["createTripCostTemplate"])(events), `beforeend`);
Object(_utils__WEBPACK_IMPORTED_MODULE_9__["renderTemplate"])(tripControlsFirstHeaderElement, Object(_view_header_nav_menu__WEBPACK_IMPORTED_MODULE_4__["createNavMenuTemplate"])(), `afterend`);
Object(_utils__WEBPACK_IMPORTED_MODULE_9__["renderTemplate"])(tripControlsSecondHeaderElement, Object(_view_event_tences_filter__WEBPACK_IMPORTED_MODULE_5__["createFilterTemplate"])(), `afterend`);

// сортировка

Object(_utils__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(tripEventsElement, new _view_trip_sorting__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), _const__WEBPACK_IMPORTED_MODULE_10__["RenderPositions"].BEFOREEND);

// форма

Object(_utils__WEBPACK_IMPORTED_MODULE_9__["renderTemplate"])(tripEventsElement, Object(_view_event_form__WEBPACK_IMPORTED_MODULE_7__["createEventForm"])(), `beforeend`);

const tripEventsContainerElement = document.querySelector(`.trip-events__list`);

events.forEach(() => {
  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["renderTemplate"])(tripEventsContainerElement, Object(_view_trip_event__WEBPACK_IMPORTED_MODULE_8__["createWaypointTemplate"])(events), `beforeend`);
});

// листнеры


/***/ }),

/***/ "./src/mock/generate-trip-events.js":
/*!******************************************!*\
  !*** ./src/mock/generate-trip-events.js ***!
  \******************************************/
/*! exports provided: getRouteWaypointData, generateWaypoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouteWaypointData", function() { return getRouteWaypointData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateWaypoints", function() { return generateWaypoints; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-utils */ "./src/mock/mock-utils.js");
/* harmony import */ var _route_waypoint_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-waypoint-data */ "./src/mock/route-waypoint-data.js");




const getRouteWaypointData = () => {
  const hasOffers = Math.random() > 0.5;
  const startDate = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomStartDate"])();
  const endDate = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getEndDate"])(startDate);

  return {
    eventType: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomDataArr"])(_route_waypoint_data__WEBPACK_IMPORTED_MODULE_2__["eventTypes"]),
    eventDestination: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomDataArr"])(_route_waypoint_data__WEBPACK_IMPORTED_MODULE_2__["eventDestinations"]),
    eventOffers: hasOffers === true ? Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomOffers"])(_route_waypoint_data__WEBPACK_IMPORTED_MODULE_2__["offers"]) : ``,
    destinationInfo: {
      description: Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["generateRandomDescription"])(),
      photo: Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["generateRandomPhoto"])(),
    },
    eventTime: {
      start: startDate,
      end: endDate,
      differ: Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getDateDiffer"])(startDate, endDate),
    },
    isFavorite: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    price: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(10, 1000)
  };
};

const generateWaypoints = (count) => {
  return new Array(count).fill(``).map(getRouteWaypointData);
};


/***/ }),

/***/ "./src/mock/mock-utils.js":
/*!********************************!*\
  !*** ./src/mock/mock-utils.js ***!
  \********************************/
/*! exports provided: generateRandomDescription, generateRandomPhoto, getRandomStartDate, getEndDate, getDateDiffer, renderDestinationOptions, getRandomOffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomDescription", function() { return generateRandomDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomPhoto", function() { return generateRandomPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomStartDate", function() { return getRandomStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndDate", function() { return getEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateDiffer", function() { return getDateDiffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDestinationOptions", function() { return renderDestinationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomOffers", function() { return getRandomOffers; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _route_waypoint_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-waypoint-data */ "./src/mock/route-waypoint-data.js");



const generateRandomDescription = () => {
  const count = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 5);
  let items = ``;

  for (let i = 0; i <= count; i++) {

    items += _route_waypoint_data__WEBPACK_IMPORTED_MODULE_1__["infoDescriptions"][i];
  }

  return items;
};

const generateRandomPhoto = () => {
  const generatePhoto = () => {

    return `http://picsum.photos/248/152?r=` + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 999);
  };

  return new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 4)).fill().map(generatePhoto);
};

const getRandomStartDate = () => {
  const year = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(2020, 2021);
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

const renderDestinationOptions = (destinations) => {
  return destinations.map((destination) => {
    return `<option value="${destination}"></option>`;
  })
    .join(`\n`);
};

const getRandomOffers = (offers) => {
  const offersCount = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 5);
  const randomOffers = [];

  for (let i = 0; i < offersCount; i++) {
    const offer = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomDataArr"])(offers);
    if (randomOffers.indexOf(offer) === -1) {
      randomOffers.push(offer);
    }
  }

  return randomOffers;
};


/***/ }),

/***/ "./src/mock/route-waypoint-data.js":
/*!*****************************************!*\
  !*** ./src/mock/route-waypoint-data.js ***!
  \*****************************************/
/*! exports provided: eventTypes, eventDestinations, infoDescriptions, offers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTypes", function() { return eventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventDestinations", function() { return eventDestinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoDescriptions", function() { return infoDescriptions; });
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


const offers = [
  {
    id: `luggage`,
    title: `Add luggage`,
    price: 30,
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
/*! exports provided: getRandomInteger, getRandomDataArr, createElement, renderElement, renderTemplate, renderPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDataArr", function() { return getRandomDataArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPhotos", function() { return renderPhotos; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/const.js");


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomDataArr = (arr) => {

  return arr[getRandomInteger(0, arr.length - 1)];
};

const createElement = (template) => { // позволяет получить элемент для вставки в дом-дерево
  const newElement = document.createElement(`div`);

  newElement.innerHTML = template;

  return newElement.firstChild;
};

const renderElement = (container, element, place) => {
  switch (place) {

    case _const__WEBPACK_IMPORTED_MODULE_0__["RenderPositions"].AFTERBEGIN:
      container.prepend(element);
      break;

    case _const__WEBPACK_IMPORTED_MODULE_0__["RenderPositions"].AFTEREND:
      container.after(element);
      break;

    case _const__WEBPACK_IMPORTED_MODULE_0__["RenderPositions"].BEFOREBEGIN:
      container.before(element);
      break;

    case _const__WEBPACK_IMPORTED_MODULE_0__["RenderPositions"].BEFOREEND:
      container.append(element);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderPhotos = (photos) => {
  return photos.map((photo) => {
    return `<img class="event__photo" src="${photo}" alt="Event photo">`;
  });
};


/***/ }),

/***/ "./src/view/event-form.js":
/*!********************************!*\
  !*** ./src/view/event-form.js ***!
  \********************************/
/*! exports provided: createEventForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventForm", function() { return createEventForm; });
const createEventForm = () => {
  return `<form class="trip-events__item  event  event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Transfer</legend>
          <div class="event__type-item">
            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
            <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
          </div>
        </fieldset>
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Activity</legend>
          <div class="event__type-item">
            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
          </div>
        </fieldset>
      </div>
    </div>
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        Flight to
      </label>

<input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
        <option value="Saint Petersburg"></option>
      </datalist>
    </div>
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">
        From
      </label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">
        To
      </label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
    </div>
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
    </div>
    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
          <label class="event__offer-label" for="event-offer-luggage-1">
            <span class="event__offer-title">Add luggage</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">30</span>
          </label>
        </div>
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
          <label class="event__offer-label" for="event-offer-comfort-1">
            <span class="event__offer-title">Switch to comfort class</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">100</span>
          </label>
        </div>
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
          <label class="event__offer-label" for="event-offer-meal-1">
            <span class="event__offer-title">Add meal</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">15</span>
          </label>
        </div>
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
          <label class="event__offer-label" for="event-offer-seats-1">
            <span class="event__offer-title">Choose seats</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">5</span>
          </label>
        </div>
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
          <label class="event__offer-label" for="event-offer-train-1">
            <span class="event__offer-title">Travel by train</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">40</span>
          </label>
        </div>
      </div>
    </section>
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>

<p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
          <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
          <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
          <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
          <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
          <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
        </div>
      </div>
    </section>
  </section>
</form>`;
};


/***/ }),

/***/ "./src/view/event-tences-filter.js":
/*!*****************************************!*\
  !*** ./src/view/event-tences-filter.js ***!
  \*****************************************/
/*! exports provided: createFilterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterTemplate", function() { return createFilterTemplate; });
const createFilterTemplate = () => {
  return `<form class="trip-filters" action="#" method="get">
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
            </form>`;
};


/***/ }),

/***/ "./src/view/header-nav-menu.js":
/*!*************************************!*\
  !*** ./src/view/header-nav-menu.js ***!
  \*************************************/
/*! exports provided: createNavMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavMenuTemplate", function() { return createNavMenuTemplate; });
const createNavMenuTemplate = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
              <a class="trip-tabs__btn" href="#">Stats</a>
            </nav>`;
};


/***/ }),

/***/ "./src/view/header-trip-cost.js":
/*!**************************************!*\
  !*** ./src/view/header-trip-cost.js ***!
  \**************************************/
/*! exports provided: createTripCostTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTripCostTemplate", function() { return createTripCostTemplate; });
const createTripCostTemplate = () => {
  const countOffersCost = (offers) => {
    return offers === null ? 0 : offers.reduce((total, cost) => total + cost.price, 0);
  };
  const getEventsCost = (tripEvents) => {
    return tripEvents.reduce((total, cost) => total + cost.price + countOffersCost(cost.eventOffers), 0);
  };

  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${getEventsCost}</span>
          </p>`;
};


/***/ }),

/***/ "./src/view/trip-event-offers.js":
/*!***************************************!*\
  !*** ./src/view/trip-event-offers.js ***!
  \***************************************/
/*! exports provided: renderOffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderOffers", function() { return renderOffers; });
const getEventOffers = (offers) => {
  return offers.map((offer, index) => {
    const {id, title, price} = offer;
    const isChecked = Math.random() > 0.5;
    return (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}-${index + 1}"
            type="checkbox" name="event-offer-${id} ${isChecked ? `checked` : ``}">
        <label class="event__offer-label" for="event-offer-${id}-${index + 1}">
            <span class="event__offer-title">${title}</span>
            &plus;
            &euro;&nbsp;
            <span class="event__offer-price">${price}</span>
        </label>
       </div>`
    );
  })
    .join(`\n`);
};

const renderOffers = (offers) => {
  const eventOffers = getEventOffers(offers);

  return (`<section class="event__section event__section--offers">
            <h3 class="event__section-title event__section-title--offers">Offers</h3>
            <div class="event__available-offers">${eventOffers}</div>
           </section>`);
};


/***/ }),

/***/ "./src/view/trip-event.js":
/*!********************************!*\
  !*** ./src/view/trip-event.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripWaypoint; });
/* harmony import */ var _trip_event_offers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-event-offers */ "./src/view/trip-event-offers.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const createWaypointTemplate = (event) => {
  const {eventType, eventDestination, eventOffers, price, eventTime} = event;
  const waypointOffers = eventOffers !== null ? Object(_trip_event_offers__WEBPACK_IMPORTED_MODULE_0__["renderWaypointOffers"])(eventOffers) : ``;

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">MAR 18</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType}.png" alt="Event ${eventType} icon">
                </div>
                <h3 class="event__title">${eventType} to ${eventDestination}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-18T12:25">${eventTime.start}</time>
                    &mdash;
                    <time class="event__end-time" datetime="2019-03-18T13:35">${eventTime.end}</time>
                  </p>
                  <p class="event__duration">${eventTime.differ}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${waypointOffers};
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

class TripWaypoint {
  constructor(event) {
    this._element = null;
    this._event = event;
  }

  getTemplate() {
    return createWaypointTemplate(this._event);
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

/***/ "./src/view/trip-info-container.js":
/*!*****************************************!*\
  !*** ./src/view/trip-info-container.js ***!
  \*****************************************/
/*! exports provided: createTripInfoContainerTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTripInfoContainerTemplate", function() { return createTripInfoContainerTemplate; });
const createTripInfoContainerTemplate = () => {
  return `<section class="trip-main__trip-info  trip-info"></section>`;
};


/***/ }),

/***/ "./src/view/trip-info-route.js":
/*!*************************************!*\
  !*** ./src/view/trip-info-route.js ***!
  \*************************************/
/*! exports provided: createTripInfoRouteTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTripInfoRouteTemplate", function() { return createTripInfoRouteTemplate; });
const createTripInfoRouteTemplate = () => {
  return `<div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

              <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
            </div>`;
};


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
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
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
          </form>`;
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