(function() {
    const contentElem = document.querySelectorAll('.content');
    const tabElem = document.querySelectorAll('.tab');
    document.querySelector('.tabs').addEventListener('click', tabClick);
    contentElem.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('visible');
        }
        item.classList.add('hide');
    })

    function tabClick(e) {
        const activeIndex = +e.target.id;
        contentElem.forEach((item, index) => {
            item.classList.remove('visible')
            tabElem[index].classList.remove('selected');
            if (index === activeIndex) {
                item.classList.add('visible')
                tabElem[index].classList.add('selected');
            }
        })
    }
})()