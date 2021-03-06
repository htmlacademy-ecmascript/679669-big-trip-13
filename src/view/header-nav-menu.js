import Abstract from "./abstract";

const createNavMenuTemplate = () => {
  return (`<nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
              <a class="trip-tabs__btn" href="#">Stats</a>
            </nav>`).trim();
};

export default class HeaderNavMenu extends Abstract {
  getTemplate() {
    return createNavMenuTemplate();
  }
}
