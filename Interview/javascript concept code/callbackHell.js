asyncOperation1(function(res1, err1) {
    if(err1) {
        console.log('error from step1')
    } else {
        asyncOperation2(res1, function(res2, err2) {
            if(err2) {
                console.log('error from step2')
            } else {
                asyncOperation3(res2, function(res3, err3) {
                    if(err3) {
                        console.log('error from step3')  
                    } else {
                        console.log('callback hell completed upto 3 step')
                    }
                })
            }
        })
    }
})