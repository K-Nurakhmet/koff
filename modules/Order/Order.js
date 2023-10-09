import { addContainer } from "../Main/addContainer";

export class Order {
  static instance = null;

  constructor() {
    if (!Order.instance) {
    Order.instance = this;
    this.element = document.createElement("section")
    this.element.classList.add('order');
    this.containerElement = addContainer(this.element, "order__container");
    this.isMounted = false
    }

    return Order.instance
  }


  mount() {
    if (this.isMounted) {
      return
    }

    const orderTitle = this.getorderTitle();
    const orderInfo = this.getorderInfo();
    const table = this.getTable();
    const orderButton = this.getorderButton();

    this.containerElement.append(orderTitle, orderInfo, table, orderButton);

  this.containerElement.insertAdjacentHTML('beforeend', this.getHTML());
  document.body.append(this.element);
  this.isMounted = true;
  }

  unmount() {
    this.element.remove();
    this.isMounted = false;
  }


  getorderTitle(){
    const titleText = document.createElement('h2');
    titleText.classList.add('order__title');

    const priceText = document.createElement('p');
    priceText.classList.add('order__price');

    const numText = document.createElement('p');
    numText.classList.add('order__num');

    return titleText;
  }

  getorderInfo() {
    const subtitleText = document.createElement('h3');
    subtitleText.classList.add("order__subtitle");

    return subtitleText
  }

  getgetTable() {
    const tableForm = document.createElement('table');
    tableForm.classList.add("order__table");

    return table
  }

  getorderButton() {
    const orderButton = document.createElement('button');
    button.classList.add('order__btn');
    button.type = 'button';
    button.innerHTML = "На главную"

    searchForm.append(button);
    return orderButton;
  }

  getHTML() {
    return `
    <h2 class="order__title">Заказ успешно размещен</h2>
          <p class="order__price">20&nbsp;000&nbsp;₽</p>
          <p class="order__num">№43435</p>

          <div class="order__info">
            <h3 class="order__subtitle">Данные доставки</h3>

            <table class="order__table table">
              <tr class="table__row">
                <td class="table__field">Получатель</td>
                <td class="table__field">Иванов Петр Александрович</td>
              </tr>

              <tr class="table__row">
                <td class="table__field">Телефон</td>
                <td class="table__field">+7 (737) 346 23 00</td>
              </tr>

              <tr class="table__row">
                <td class="table__field">E-mail</td>
                <td class="table__field">Ivanov84@gmail.com</td>
              </tr>

              <tr class="table__row">
                <td class="table__field">Адрес доставки</td>
                <td class="table__field">Москва, ул. Ленина, 21, кв. 33</td>
              </tr>

              <tr class="table__row">
                <td class="table__field">Способ оплаты</td>
                <td class="table__field">Картой при получении</td>
              </tr>

              <tr class="table__row">
                <td class="table__field">Способ получения</td>
                <td class="table__field">Доставка</td>
              </tr>
            </table>
          </div>

          <button class="order__btn" type="button">На главную</button>
    `;
  }
}