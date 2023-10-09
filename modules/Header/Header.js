import { addContainer } from "../Main/addContainer";
import logoImg from '/img/logo.svg';

export class Header {
  static instance = null;

  constructor() {
    if (!Header.instance) {
    Header.instance = this;
    this.element = document.createElement("header")
    this.element.classList.add('header');
    this.containerElement = addContainer(this.element, "header__container");
    this.isMounted = false
    }

    return Header.instance
  }


  mount() {
    if (this.isMounted) {
      return
    }

    const logo = this.getLogo();
    const searchForm = this.getSearchForm();
    const navigation = this.getNavigation();

    this.containerElement.append(logo, searchForm, navigation);

  document.body.append(this.element);
  this.isMounted = true;
  }

  unmount() {
    this.element.remove();
    this.isMounted = false;
  }

  getLogo(){
    const logo = document.createElement('a');
    logo.classList.add('header__link-logo');
    logo.href = '/';

    const imgLogo = new Image();
    imgLogo.classList.add('header__logo');
    imgLogo.src = logoImg;
    imgLogo.alt = 'Логотип мебельного маркета Koff'

    logo.append(imgLogo);
    return logo
  }

  getSearchForm(){
    const searchForm = document.createElement('form');
    searchForm.classList.add('header__search');
    searchForm.method = 'get';

    const input = document.createElement('input');
    input.classList.add('header__input');
    input.type = "search";
    input.name = "search";
    input.placeholder = "Введите запрос";

    const button = document.createElement('button');
    button.classList.add('header__btn');
    button.type = 'submit';
    button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.66683 13.9999C11.1646 13.9999 14.0002 11.1644 14.0002 7.66659C14.0002 4.16878 11.1646 1.33325 7.66683 1.33325C4.16903 1.33325 1.3335 4.16878 1.3335 7.66659C1.3335 11.1644 4.16903 13.9999 7.66683 13.9999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.6668 14.6666L13.3335 13.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`

    searchForm.append(input, button);
    return searchForm;
  }

  getNavigation(){
    const navigation = document.createElement('nav');
    navigation.classList.add('header__control');

    const favoriteLink = document.createElement('a');
    favoriteLink.classList.add('header__link');
    favoriteLink.href="/favorite"
    favoriteLink.innerHTML = `
      <span class="header__link-text">Избранное</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8.4135 13.8733C8.18683 13.9533 7.8135 13.9533 7.58683 13.8733C5.6535 13.2133 1.3335 10.46 1.3335 5.79332C1.3335 3.73332 2.9935 2.06665 5.04016 2.06665C6.2535 2.06665 7.32683 2.65332 8.00016 3.55998C8.6735 2.65332 9.7535 2.06665 10.9602 2.06665C13.0068 2.06665 14.6668 3.73332 14.6668 5.79332C14.6668 10.46 10.3468 13.2133 8.4135 13.8733Z" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    const cartLink = document.createElement('a');
    cartLink.classList.add('header__link');
    cartLink.href="/cart"

    const linkText = document.createElement('span');
    linkText.classList.add('header__link-text');
    linkText.textContent = 'Корзина'

    const countElement = document.createElement('span');
    countElement.classList.add("header__count");
    countElement.textContent = "(0)";

    cartLink.append(linkText, countElement);
    cartLink.insertAdjacentHTML(
      "beforeend", 
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5.87329 1.33325L3.45996 3.75325" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.1265 1.33325L12.5398 3.75325" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.3335 5.23324C1.3335 3.9999 1.9935 3.8999 2.8135 3.8999H13.1868C14.0068 3.8999 14.6668 3.9999 14.6668 5.23324C14.6668 6.66657 14.0068 6.56657 13.1868 6.56657H2.8135C1.9935 6.56657 1.3335 6.66657 1.3335 5.23324Z" stroke="#1C1C1C"/>
    <path d="M6.50684 9.33325V11.6999" stroke="#1C1C1C" stroke-linecap="round"/>
    <path d="M9.57324 9.33325V11.6999" stroke="#1C1C1C" stroke-linecap="round"/>
    <path d="M2.3335 6.66675L3.2735 12.4267C3.48683 13.7201 4.00016 14.6667 5.90683 14.6667H9.92683C12.0002 14.6667 12.3068 13.7601 12.5468 12.5067L13.6668 6.66675" stroke="#1C1C1C" stroke-linecap="round"/>
    </svg>
    `,
    );
    
    navigation.append(favoriteLink, cartLink);

    this.countElement = countElement
    return navigation;
  }

  changeCount(n) {
    this.countElement.textContent = `(${n})`;
  }
}
