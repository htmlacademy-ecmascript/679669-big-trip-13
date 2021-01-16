import {MONTHS} from "../const";
import {createElement} from "../utils";

const renderTripDay = (dayObject) => {
  const {date, counter} = dayObject;
  const dateString = new Date(date);
  const dateValue = dateString.getDate();
  const monthValue = dateString.getMonth();
  const yearValue = dateString.getFullYear();

  return (`<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${counter}</span>
                <time class="day__date" datetime="${yearValue}-${monthValue + 1}-${dateValue}">${MONTHS[monthValue]} ${dateValue}</time>
              </div>
          </li>`).trim();
};

export default class TripDay {
  constructor(day) {
    this._day = day;
  }
  getTemplate() {
    return renderTripDay(this._day);
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}
