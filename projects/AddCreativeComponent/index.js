(function (){
  const url = 'https://random-flat-colors.vercel.app/api/random?count=5';
  const colorListElem = document.querySelector('.colorList');
  const closeIconElem = document.querySelector('.closeIcon');
  const drawerColorElem = document.querySelector('#drawerColor');
  const drawerElem = document.querySelector('.drawer');
  const submitCreativeBtnElem = document.querySelector('#submitCreative');
  const addCreativeBtnElem = document.querySelector('#addCreativeBtn');
  const creativesConElem = document.querySelector('.creativesList');
  const searchElem = document.querySelector('#search');

  // Creative component
  class AddCreative {
    constructor(){
      this.creatives = [];
      this.colorList = [];
      this.fetchColors();
    }
    fetchColors(){
      fetch(url).then((res) => res.json()).then((data => {
        this.colorList = data.colors || [];
        this.renderColors(colorListElem);
      }));
    }
    renderColors(parentElem){
      parentElem.innerHTML = '';
      this.colorList.forEach((item) => {
        const elem = document.createElement('input');
        elem.setAttribute('type','radio');
        elem.setAttribute('name', 'color');
        elem.setAttribute('id', item);
        elem.setAttribute('value', item);
        elem.setAttribute('required', true);
        elem.style.color = item;
        parentElem.appendChild(elem)
      })
    }
    hideDrawer(){
      //again take the left set its wid to 100%
      drawerElem.style.display = 'none';
      addCreativeBtnElem.disabled = false;
      closeIconElem.removeEventListener('click', this.hideDrawer);
    }
    showDrawer(){
      // initially width 100%;
      drawerElem.style.display = 'block';
      addCreativeBtnElem.disabled = true;
      closeIconElem.addEventListener('click', this.hideDrawer);
      this.renderColors(drawerColorElem);
      const formElem = document.querySelector('#form');
      formElem.addEventListener('submit', this.submitCreative);
    }
    submitCreative(e){
      e.preventDefault();
      const titleInputElem = document.querySelector('#inputTitle');
      const subtitleInputElem = document.querySelector('#inputSubtitle');
      const title = titleInputElem.value || '';
      const subtitle = subtitleInputElem.value || '';
      let selectedColor;
      let selectedColorElem;
      drawerColorElem.childNodes.forEach((item) => {
        if(item.checked){
          selectedColor = item.value;
          selectedColorElem = item; 
        }
      });
      if (title && subtitle&& selectedColor){
        this.creatives.push({
          title,
          subtitle,
          color: selectedColor
        })
        this.renderCreatives(this.creatives);
      //   titleInputElem.value = '';
      // subtitleInputElem.value = '';
      // selectedColorElem.checked = false;
      this.hideDrawer();
      } else {
        // alert('Please fill all the details');
      }
      // titleInputElem.value = '';
      // subtitleInputElem.value = '';
      // selectedColorElem.checked = false;
      // this.hideDrawer();
    }
    // updateProg
    renderCreatives(creativeList){
      creativesConElem.innerHTML = '';
      
      creativeList.forEach((item) => {
        const elem = document.createElement('div');
        elem.style.background = item.color;
        elem.setAttribute('color', item.color);
        elem.classList.add('creatives')
        elem.innerHTML = `<h2>${item.title}</h2><h3>${item.subtitle}</h3>`
        creativesConElem.appendChild(elem);
      })
    }
    searchContent(e){
      const text = e.target.value;
      if(text){
        const filteredCreatives = [];
        this.creatives.forEach((item) => {
          if(item.title.includes(text) || item.subtitle.includes(text)){
            filteredCreatives.push(item);
          }
        });
        // render the creative in ui
          this.renderCreatives(filteredCreatives)
      } else {
        this.renderCreatives(this.creatives)
      }
    }
    filterByColor(e) {
      const elem = e.target.parentElement;
      if(elem?.classList.contains('colorList')){
        const selectedColor = e.target.value;
        const filteredCreatives = [];
        this.creatives.forEach((item) => {
          if(item.color === selectedColor){
            filteredCreatives.push(item);
          }
        });
          this.renderCreatives(filteredCreatives)
      }
      
    }
  }

  const creativeObj = new AddCreative();
  addCreativeBtnElem.addEventListener('click', creativeObj.showDrawer.bind(creativeObj));
  submitCreativeBtnElem.addEventListener('click', creativeObj.submitCreative.bind(creativeObj));
  searchElem.addEventListener('keyup', debounce(creativeObj.searchContent.bind(creativeObj), 400));
  colorListElem.addEventListener('click', creativeObj.filterByColor.bind(creativeObj));

  function debounce(func, delay){
    let timer;
    return function(...args){
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    }
  }
}())