let counter = 0;
const getData = ()=> {
    console.log('fetch data');
}

const Debouncing= (func, delay)=> {
    let timer;
    return function() {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=> {
            func.apply(context, args);
        }, delay)
    }
}
const betterFunction = Debouncing(getData, 300);

setInterval(betterFunction, 100);