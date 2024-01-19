import Icons from './utils/Icons';
Icons.load();

class Main {

  constructor() {
    this.init();
  }

  init() {
    
    this.initLocalState();
    this.initGlobalState();
    this.initData();
  }

  initLocalState() {
    const buttons = document.querySelectorAll('.js-btn-local');
    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i];
      element.addEventListener('click', this.toggleLocal);
    }
  }

  toggleLocal(event) {
    event.currentTarget.classList.toggle('active');
  }

  initGlobalState() {
    const buttons = document.querySelectorAll('.js-btn-global');
    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i];
      element.addEventListener('click', this.toggleGlobal);
    }
  }

  toggleGlobal(event) {
    event.currentTarget.classList.toggle('active');
    document.documentElement.classList.toggle('bigger');
  }

  initData() {
    const buttons = document.querySelectorAll('.js-data');
    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i];
      element.addEventListener('click', this.updateContent);
    }
  }

  updateContent(event) {
    const buttons = document.querySelectorAll('.js-data');
    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i];
      element.classList.remove('active');
    }
    event.currentTarget.classList.toggle('active');

    const text = document.querySelector('.js-choice');
    text.innerText = 'Mon prof préféré est: ' + event.currentTarget.dataset.name;
  }

}
new Main();
