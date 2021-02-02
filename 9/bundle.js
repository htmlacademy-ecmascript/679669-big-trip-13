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

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID. If you use Expo, install `expo-random` ' +
        'and use `nanoid/async`.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: MONTHS, MONTH_DAYS, TIME_TO_MS, KEY_CODE, SORT_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_DAYS", function() { return MONTH_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_TO_MS", function() { return TIME_TO_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_TYPE", function() { return SORT_TYPE; });
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

const TIME_TO_MS = {
  MINUTE: 60000,
  HOUR: 360000,
  DAY: 86400000,
};

const KEY_CODE = {
  ESC: `Escape`,
};

const SORT_TYPE = {
  DAY: `sort-day`,
  TIME: `sort-time`,
  PRICE: `sort-price`,
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
/* harmony import */ var _view_cost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/cost */ "./src/view/cost.js");
/* harmony import */ var _view_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/navigation */ "./src/view/navigation.js");
/* harmony import */ var _view_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/filters */ "./src/view/filters.js");
/* harmony import */ var _view_trip_info_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/trip-info-container */ "./src/view/trip-info-container.js");
/* harmony import */ var _view_trip_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/trip-route */ "./src/view/trip-route.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");
/* harmony import */ var _presenter_trip_board__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presenter/trip-board */ "./src/presenter/trip-board.js");









const RENDER_EVENTS_COUNT = 5;
const events = Object(_mock_generate_trip_events__WEBPACK_IMPORTED_MODULE_0__["generateEvents"])(RENDER_EVENTS_COUNT);


// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsSection = document.querySelector(`.trip-events`);

const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);

const tripBoardPresenter = new _presenter_trip_board__WEBPACK_IMPORTED_MODULE_7__["default"](tripEventsSection);

Object(_utils_render__WEBPACK_IMPORTED_MODULE_6__["render"])(tripMainElement, new _view_trip_info_container__WEBPACK_IMPORTED_MODULE_4__["default"](), `prepend`);
const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);

Object(_utils_render__WEBPACK_IMPORTED_MODULE_6__["render"])(tripInfoContainer, new _view_trip_route__WEBPACK_IMPORTED_MODULE_5__["default"](events));
Object(_utils_render__WEBPACK_IMPORTED_MODULE_6__["render"])(tripInfoContainer, new _view_cost__WEBPACK_IMPORTED_MODULE_1__["default"](events));


Object(_utils_render__WEBPACK_IMPORTED_MODULE_6__["render"])(tripControlsFirstHeaderElement, new _view_navigation__WEBPACK_IMPORTED_MODULE_2__["default"](), `insertAfter`);
Object(_utils_render__WEBPACK_IMPORTED_MODULE_6__["render"])(tripControlsSecondHeaderElement, new _view_filters__WEBPACK_IMPORTED_MODULE_3__["default"](), `insertAfter`);

// доска и эвенты (презентер)
tripBoardPresenter.init(events);


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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-utils */ "./src/mock/mock-utils.js");
/* harmony import */ var _trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip-events-mocks */ "./src/mock/trip-events-mocks.js");
/* harmony import */ var _view_trip_event_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/trip-event-time */ "./src/view/trip-event-time.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");






const getTripEventData = () => {
  const event = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomItemArr"])(_trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__["eventTypes"]);
  const startDate = new Date(Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomStartDate"])());
  const endDate = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getEndDate"])(startDate);
  const photos = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["generateRandomPhoto"])();
  const hasOffers = Math.random() > 0.5;
  const dateDiff = Object(_view_trip_event_time__WEBPACK_IMPORTED_MODULE_3__["getTimeDiff"])(startDate, endDate);

  return {
    eventType: event,
    eventDestination: Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomItemArr"])(_trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__["eventDestinations"]),
    eventOffers: hasOffers ? Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomOffers"])(_trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__["offers"]) : null,
    destinationDescription: Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["generateRandomDescription"])(),
    destinationPhoto: photos,
    startTime: startDate,
    parsedStartDate: Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["parseDate"])(startDate),
    endTime: endDate,
    timeDiff: dateDiff,
    action: _trip_events_mocks__WEBPACK_IMPORTED_MODULE_2__["eventTypeActionsMap"][event],
    isFavorite: Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    price: Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(10, 1000),
    id: Object(nanoid__WEBPACK_IMPORTED_MODULE_4__["nanoid"])(),
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
/*! exports provided: generateRandomDescription, generateRandomPhoto, getRandomStartDate, getEndDate, getRandomOffers, parseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomDescription", function() { return generateRandomDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomPhoto", function() { return generateRandomPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomStartDate", function() { return getRandomStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndDate", function() { return getEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomOffers", function() { return getRandomOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _trip_events_mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-events-mocks */ "./src/mock/trip-events-mocks.js");



const generateRandomDescription = () => {
  const count = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 5);
  let description = ``;

  for (let i = 0; i <= count; i++) {

    description += _trip_events_mocks__WEBPACK_IMPORTED_MODULE_1__["infoDescriptions"][i];
  }

  return description;
};

const generateRandomPhoto = () => {
  const generatePhoto = () => {

    return `http://picsum.photos/248/152?r=` + Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 999);
  };

  return new Array(Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 4)).fill(``).map(generatePhoto);
};

const getRandomStartDate = () => {
  const year = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(2021, 2022);
  const month = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 12);
  const day = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 31);
  const hour = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 23);
  const minutes = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 59);

  return new Date(year, month, day, hour, minutes);
};

const getEndDate = (startDate) => {
  return new Date(Date.parse(startDate) + Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 3) * 3600000);
};

const getRandomOffers = (offers) => {
  const offersCount = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 5);
  const RANDOM_OFFERS = [];

  for (let i = 0; i < offersCount; i++) {
    const offer = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getRandomItemArr"])(offers);
    if (RANDOM_OFFERS.indexOf(offer) === -1) {
      RANDOM_OFFERS.push(offer);
    }
  }

  return RANDOM_OFFERS;
};

const parseDate = (date) => {
  const currentDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return Date.parse((new Date(year, month, currentDate)).toString());
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

/***/ "./src/presenter/trip-board.js":
/*!*************************************!*\
  !*** ./src/presenter/trip-board.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripBoard; });
/* harmony import */ var _view_event_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/event-sort */ "./src/view/event-sort.js");
/* harmony import */ var _view_trip_events_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/trip-events-container */ "./src/view/trip-events-container.js");
/* harmony import */ var _view_without_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/without-events */ "./src/view/without-events.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");





class TripBoard {
  constructor(tripEventsSection) {
    this._tripEventsSection = tripEventsSection;

    this._eventSortComponent = new _view_event_sort__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._tripEventsContainerComponent = new _view_trip_events_container__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._boardWithoutEventsComponent = new _view_without_events__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  init(tripEvents) {
    this._tripEvents = tripEvents.slice();

    if (!this._tripEvents.length) {
      this._renderWithoutEvents();
      return;
    }

    this._renderTripSort();

    this._renderTripEventsContainer();

    this._tripEvents.forEach((event) => {
      this._renderEvent(event, event.id);
    });
  }

  _renderTripSort() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["render"])(this._tripEventsSection, this._eventSortComponent);
  }

  _renderTripEventsContainer() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["render"])(this._eventSortComponent, this._tripEventsContainerComponent);
  }

  _renderWithoutEvents() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["render"])(this._tripEventsSection, this._boardWithoutEventsComponent);
  }

  _renderEvent(event, id) {
    const eventPresenter = new Event(this._tripEventsContainerComponent);
    eventPresenter.init(event, id);
  }

}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getRandomItemArr, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItemArr", function() { return getRandomItemArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomItemArr = (arr) => {

  return arr[getRandomInteger(0, arr.length - 1)];
};

// обновление одного элемента в массиве

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/utils/get-sort.js":
/*!*******************************!*\
  !*** ./src/utils/get-sort.js ***!
  \*******************************/
/*! exports provided: getSortedTripEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedTripEvents", function() { return getSortedTripEvents; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");


const getSortedTripEvents = (tripEvents, sortType = _const__WEBPACK_IMPORTED_MODULE_0__["SORT_TYPE"].PRICE) => {

  let sortedTripEvents = [];
  const tripEventsCopy = tripEvents.slice();

  switch (sortType) { // кейсы сортировки
    case sortType.DAY:
      sortedTripEvents = tripEventsCopy.sort((a, b) => a.startTime - b.startTime);
      break; // сортировка по дате старта
    case sortType.TIME:
      sortedTripEvents = tripEventsCopy.sort((a, b) => (b.endTime - b.startTime) - (a.endTime - a.startTime));
      break; // сортировка по длительности
    case sortType.PRICE:
      sortedTripEvents = tripEventsCopy.sort((a, b) => b.price - a.price);
      break; // сортировка по стоимости
  }

  return sortedTripEvents;
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: render, renderTemplate, createElement, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract */ "./src/view/abstract.js");


const render = (container, child, place = `append`) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case `append`:
      container.append(child);
      break;
    case `prepend`:
      container.prepend(child);
      break;
    case `insertBefore`:
      container.parentNode.insertBefore(child, container);
      break;
    case `insertAfter`:
      container.parentNode.insertBefore(child, container.nextSibling);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template.trim();

  return newElement.firstChild;
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || newChild === null) {
    throw new Error(`Can't replace no-existing elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/cost.js":
/*!**************************!*\
  !*** ./src/view/cost.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cost; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const renderTripCostTemplate = (tripEvents) => {
  const countOffersCost = (offers) => {
    return offers === null ? 0 : offers.reduce((total, cost) => total + cost.price, 0);
  };

  const getEventsCost = (events) => {
    return events.reduce((total, cost) => total + cost.price + countOffersCost(cost.eventOffers), 0);
  };

  return (`<p class="trip-info__cost">Total: &euro;&nbsp;
<span class="trip-info__cost-value">${getEventsCost(tripEvents)}</span>
</p>`);
};

class Cost extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(tripEvents) {
    super();
    this._tripEvents = tripEvents;
  }

  getTemplate() {
    return renderTripCostTemplate(this._tripEvents);
  }
}


/***/ }),

/***/ "./src/view/event-sort.js":
/*!********************************!*\
  !*** ./src/view/event-sort.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventSort; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const renderTripSort = () => {
  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SORT_TYPE"].DAY}">
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SORT_TYPE"].TIME}">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SORT_TYPE"].PRICE}" checked>
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`);
};

class EventSort extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_1__["SORT_TYPE"].PRICE;
  }

  getTemplate() {
    return renderTripSort(this._task);
  }

  getSortType() {
    return this._currentSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      if (evt.target.tagName !== `LABEL`) {
        return;
      }

      const sortType = evt.target.htmlFor;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      handler(this._currentSortType);
    });
  }
}


/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


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
          </form>`);
};

class Filters extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return renderFilter();
  }
}


/***/ }),

/***/ "./src/view/get-days-and-dates.js":
/*!****************************************!*\
  !*** ./src/view/get-days-and-dates.js ***!
  \****************************************/
/*! exports provided: getEventsDates, getDateFormFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventsDates", function() { return getEventsDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFormFormat", function() { return getDateFormFormat; });
const getEventsDates = (events) => {
  return events.map((event) => {
    return new Date(event.startTime.getFullYear(), event.startTime.getMonth(), event.startTime.getDate());
  });
};

const getDateFormFormat = (date) => {
  const year = date.getFullYear().toString().slice(2, 4);

  const dateValues = Array.of(date.getDate(), date.getMonth(), date.getHours(), date.getMinutes()).map((value) => {
    return value < 10 ? `0` + value : value;
  });

  const [day, month, hours, minutes] = dateValues;

  return day + `/` + month + `/` + year + ` ` + hours + `:` + minutes;
};


/***/ }),

/***/ "./src/view/navigation.js":
/*!********************************!*\
  !*** ./src/view/navigation.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createNavMenuTemplate = () => {
  return (`<nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
              <a class="trip-tabs__btn" href="#">Stats</a>
            </nav>`);
};

class Navigation extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNavMenuTemplate();
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

  const days = Math.trunc(diffInMs / _const__WEBPACK_IMPORTED_MODULE_0__["TIME_TO_MS"].DAY);
  const daysString = days > 0 ? days + `D ` : ``;

  const hours = Math.trunc(diffInMs % _const__WEBPACK_IMPORTED_MODULE_0__["TIME_TO_MS"].DAY / _const__WEBPACK_IMPORTED_MODULE_0__["TIME_TO_MS"].HOUR);
  const hoursString = hours > 0 ? hours + `H ` : ``;

  const minutes = Math.trunc(diffInMs % _const__WEBPACK_IMPORTED_MODULE_0__["TIME_TO_MS"].DAY % _const__WEBPACK_IMPORTED_MODULE_0__["TIME_TO_MS"].HOUR / _const__WEBPACK_IMPORTED_MODULE_0__["TIME_TO_MS"].MINUTE);
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
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createTripEventsContainer = () => {
  return (`<ul class="trip-events__list"></ul>`);
};

class TripEventsContainer extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTripEventsContainer();
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
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createTripInfoContainerTemplate = () => {
  return (`<section class="trip-main__trip-info  trip-info"></section>`);
};

class TripInfoContainer extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTripInfoContainerTemplate();
  }
}


/***/ }),

/***/ "./src/view/trip-route.js":
/*!********************************!*\
  !*** ./src/view/trip-route.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripRoute; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _get_days_and_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-days-and-dates */ "./src/view/get-days-and-dates.js");
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _utils_get_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/get-sort */ "./src/utils/get-sort.js");





const MAXIMUM_CITIES_SHOWN = 3;

const getTripRoute = (tripEvents) => {
  const tripEventsSortedByDate = Object(_utils_get_sort__WEBPACK_IMPORTED_MODULE_3__["getSortedTripEvents"])(tripEvents, _const__WEBPACK_IMPORTED_MODULE_0__["SORT_TYPE"].DAY);
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
  const tripDates = Object(_get_days_and_dates__WEBPACK_IMPORTED_MODULE_1__["getEventsDates"])(eventsList).sort((a, b) => a - b);
  const tripDatesString = getTripDates(tripDates[0], tripDates[tripDates.length - 1]);
  return (`<div class="trip-info__main">
            <h1 class="trip-info__title">${title}</h1>
            <p class="trip-info__dates">${tripDatesString}</p>
          </div>`);
};

class TripRoute extends _abstract__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(tripEvents) {
    super();
    this._tripEvents = tripEvents;
  }

  getTemplate() {
    return renderTripRoute(this._tripEvents);
  }
}


/***/ }),

/***/ "./src/view/without-events.js":
/*!************************************!*\
  !*** ./src/view/without-events.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithoutEvents; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const renderListEmptyElement = () => {
  return (`<p class="trip-events__msg">Click New Event to create your first point</p>`);
};

class WithoutEvents extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return renderListEmptyElement();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map