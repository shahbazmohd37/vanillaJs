var data = [{
        img: '',
        name: 'Jay Creeps3',
        description: 'Principle Engineering Manager at Linkedin'
    },
    {
        img: '',
        name: 'Jay Creeps2',
        description: 'Principle Engineering Manager at Linkedin'
    },
    {
        img: '',
        name: 'Jay Creeps1',
        description: 'Principle Engineering Manager at Linkedin'
    }
]

const ConnectComp = `<span id="connect">+Connect</span>`;
const ulElem = document.querySelector('.container');
const seeMoreElem = document.querySelector('#seeMore');

function fetchData() {
    const result = []
    data.forEach((item, index) => {
        result.push({...item, name: `${item.name + index}` })
    });
    result.forEach(item => {
        const list = document.createElement('li');
        list.innerHTML = `<img src="${item.img}" />
    <div class="intro">
        <b>${item.name}</b>${item.description}
        <span>
      +Connect
    </span>
    </div>
    <div class="close">
        X
    </div>`
        ulElem.appendChild(list);
    })
    data = [...data, ...result];
}

function renderList() {
    data.forEach((item, index) => {
        const list = document.createElement('li');
        list.setAttribute('data', `${item.name}`);
        list.innerHTML = `<img src="${item.img}" />
    <div class="intro">
        <b>${item.name}</b>${item.description}
        <span>
      +Connect
    </span>
    </div>
    <div class="close">
        X
    </div>`
        ulElem.appendChild(list);
    })
}

seeMoreElem.addEventListener('click', () => {
    fetchData();
})

function updateData(id) {
    data = data.filter((item) => item.name !== id);
    debugger;
}

function deleteUser(id) {
    // removeChlild from dom by id;
    const elem = document.querySelector(`[data='${id}']`)
    ulElem.removeChild(elem)
    updateData(id);
}

function handleListClicked(e) {
    const targetElem = e.target;
    const currentClass = targetElem.classList;
    // handle for close
    if (currentClass.contains('close')) {
        const parentElemId = targetElem.parentElement.getAttribute('data');
        deleteUser(parentElemId);
    }
    //handle for connect clicked
}

renderList();
ulElem.addEventListener('click', handleListClicked);