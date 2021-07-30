(function() {
    // const headerElem = document.getElementById('1');
    // headerElem.addEventListener('click', flipAccordian);

    // const data = ['Accordian 1', 'Accordian 2', 'Accordian 3'];
    // data.forEach((item, index) => {

    // })

    // function flipAccordian(e) {
    //     const id = e.target.id || e.target.parentElement.id;
    //     if (id) {
    //         const contentElem = document.getElementById(`content${id}`);
    //         contentElem.classList.toggle('show');
    //         const sign = document.querySelector('.sign').innerHTML
    //         if (sign === '+') {
    //             document.querySelector('.sign').innerHTML = '-'
    //         } else {
    //             document.querySelector('.sign').innerHTML = '+'
    //         }
    //     }
    // }

    // const progressElem = document.querySelector('.myProgress');
    // const runElem = document.querySelector('.run');
    // runElem.addEventListener('click', progress);

    // function progress(e) {
    //     let timer = setInterval(() => {
    //         const prevWidth = +progressElem.style.width.split('px')[0];
    //         if (prevWidth >= 800) {
    //             if (800 - prevWidth > 0) {
    //                 progressElem.style.width = '800px'
    //             }
    //             clearInterval(timer);
    //         } else {
    //             progressElem.style.width = prevWidth + 50 + 'px'
    //         }
    //     }, 1000)
    // }

    const tootipContent = (id, content, pos = 'top') => {
        const elem = document.createElement('span');
        elem.classList.add('tooltiptext');
        elem.classList.add('showTooltip');
        elem.classList.add('top');
        elem.id = id;
        elem.textContent = content;
        return elem;
    }
    const tooltipElem = document.getElementById('tooltipCon');
    tooltipElem.classList.add('tooltip');
    tooltipElem.addEventListener('mouseover', function(e) {
        this.appendChild(tootipContent('name', 'tool tip is shown', 'right'));
    })
    tooltipElem.removeEventListener('mouseover', function(e) {
        this.appendChild(tootipContent('name', 'tool tip is shown', 'right'));
    })
    tooltipElem.addEventListener('mouseout', function(e) {
        this.removeChild(document.querySelector('#name'));
    })

    const slider = document.getElementById('myRange');
    slider.addEventListener('change', (e) => { console.log('e ', e.target.value) })
})()