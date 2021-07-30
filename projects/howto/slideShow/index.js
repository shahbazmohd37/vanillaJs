(function () {
  const contentElem = document.querySelector('.content');
  const nextElem = document.querySelector('.next');
  const prevElem = document.querySelector('.prev');
  const dotsElem = document.querySelector('.dots');

  // function next click to show slide with index+1;
  // same with prev
  // onload current slide is 1st one

  const imageData = ['img1', 'img2', 'img3', 'img4', 'img5'];
  let currentIndex = 0;

  function currentSlide(n) {
    contentElem.innerHTML = ''
    dotsElem.innerHTML = ''
    imageData.forEach((item, index) => {
    const imgElem = document.createElement('img');
    const dot = document.createElement('div');
    dot.id = index;
    dot.style.background = 'black';
    imgElem.id = index;
    imgElem.src = `./images/${item}.png`;
    imgElem.style.display = 'none';
    if (index === (Math.abs(n % imageData.length))) {
      imgElem.style.display = 'block';
      dot.style.background = 'white';
    }
    contentElem.appendChild(imgElem);
    dotsElem.appendChild(dot);
    })
    imgElem.querySelector('img').style.display = 'block'
  }

  nextElem.addEventListener('click', function nextSlide(params) {
    currentSlide(++currentIndex)
  })
  prevElem.addEventListener('click', function nextSlide(params) {
    currentSlide(--currentIndex)
  })

  currentSlide(currentIndex);

})()