const expensive = () => {
    console.log('expensive');
}
const betterExpensive = throttle(expensive, 1000);
const throttle = (func, limit)=> {
    let flag = true;
    return function() {
        let context = this, args = arguments;
        if(flag) {
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit)
        }
    }
}
setInterval(betterExpensive, 100);