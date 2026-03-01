function promise1() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('promise 1');
            resolve('result from promise1')
        }, 1000)
    })
}

function promise2(previousResult) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('promise 2');
            resolve(`result from promise2 basd on first ${previousResult}`)
        }, 1000)
    })
}

promise1().then((res1)=> {
    return promise2(res1);
}).then((res2)=> {
    console.log('final result: ', res2)
}).catch((err)=> {
    console.log('error', err)
})


  

