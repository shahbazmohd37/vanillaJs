var game = {
  completed: [],
  prev: '',
  current: '',
  data: [],
  shuffleArray(arrayData) {
    for(let i=arrayData.length-1;i>=0;i--) {
      const randomIndex = Math.floor(Math.random() * (i+1));
      let temp = arrayData[i];
      arrayData[i] = arrayData[randomIndex];
      arrayData[randomIndex] = temp;
    }
    this.data = arrayData;
  },
  isEqual(obj, grid) {
    if (!this.prev) {
      this.prev = obj;
      this.prev.isMatched = true;
      grid.classList = ''
      this.init()
      return
    }
    if (this.prev.value === obj.value) {
      this.prev.isMatched = true;
      this.current = obj;
      this.current.isMatched = true;
      // this.completed.push(this.pre)
      this.init();
      this.prev = '',
      this.current = '';
    } else {
      this.prev.isMatched = false;
      obj.isMatched = false;
      this.init();
      this.prev = ''
    }
  },
  fipCard(grid, value) {
    grid.innerHTML = value
  },
  init() {
    const elem = document.getElementById('memory');
    elem.innerHTML = '';
    // const newData = [...this.data];
    for (let i=0; i<this.data.length;i++) {
      const grid = document.createElement('div');
      grid.innerHTML = this.data[i].isMatched ? this.data[i].value : ''
      !this.data[i].isMatched && grid.addEventListener('click', (e) => {
        this.fipCard(grid, this.data[i].value);
        setTimeout(() => {
          this.isEqual(this.data[i], grid);
        }, 500)
      })
      grid.classList = this.data[i].isMatched ? '' : 'notMatched'
      elem.appendChild(grid);
    }
  },
}
const arrayData = [{
  value: 1,
  isMatched: false
}, {
  value: 2,
  isMatched: false
},{
  value: 1,
  isMatched: false
}, {
  value: 2,
  isMatched: false
},{
  value: 3,
  isMatched: false
}, {
  value: 4,
  isMatched: false
},{
  value: 3,
  isMatched: false
}, {
  value: 4,
  isMatched: false
}];
game.shuffleArray(arrayData);
game.init();
document.addEventListener()


// alternative method

// create board with blank iimage
// addEventListener to flip the card
// when flipping show the image and if pushedCards array is of length 2 then call checkMatch in setTimeout 
// in checkmatch pushedId if are not same then compare the two pushed cards name and set their image
