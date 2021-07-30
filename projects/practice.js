//common fetch function

function httpFetch(url, options){
  return new Promise((res, rej) => {
    // make changes in headers if required 
    fetch(url, options).then(res => res.json()).then(response => {
      // parse the response and check status, accordingly res and rej based on status
      if (res.status >= 200 && status < 400){
        res(response)
      } else if(status === 401) {
        // invoke login
      } else {
        // retry with a variable 
        // initateReq(retry-1);
      }
    }).catch((err => {

    }))
  })
}
// 

// common debouncing fetc

function debounce(func, delay) {
  let timer;
  return function(args){
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, delay);
  }  
}

// 