import {generateWaypoints} from "./mock/mock-utils";
import {createTripInfoContainerTemplate} from "./view/trip-info-container";
import {createTripInfoRouteTemplate} from "./view/trip-info-route";
import {createTripCostTemplate} from "./view/trip-cost";
import {createNavMenuTemplate} from "./view/nav-menu";
import {createFilterTemplate} from "./view/event-tences-filter";
import {createTripSortingTemplate} from "./view/trip-sorting";
import {createEventForm} from "./view/event-form";
import {createWaypointTemplate} from "./view/waypoint";
import {renderTemplate} from "./utils";

// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);

renderTemplate(tripMainElement, createTripInfoContainerTemplate(), `afterbegin`);

const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);

renderTemplate(tripInfoContainer, createTripInfoRouteTemplate(), `beforeend`);
renderTemplate(tripInfoContainer, createTripCostTemplate(), `beforeend`);
renderTemplate(tripControlsFirstHeaderElement, createNavMenuTemplate(), `afterend`);
renderTemplate(tripControlsSecondHeaderElement, createFilterTemplate(), `afterend`);

// сортировка

renderTemplate(tripEventsElement, createTripSortingTemplate(), `beforeend`);

// форма

renderTemplate(tripEventsElement, createEventForm(), `beforeend`);

const tripEventsContainerElement = document.querySelector(`.trip-events__list`);

const RENDER_EVENTS_COUNT = 20;
const events = generateWaypoints(RENDER_EVENTS_COUNT);

events.forEach(() => {
  renderTemplate(tripEventsContainerElement, createWaypointTemplate(events), `beforeend`);
});

// листнеры
