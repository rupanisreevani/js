function selectFood(callback){
    setTimeout(()=>{
        console.log("Food selected");
        callback();
    },1000)
}

function prepareFood(callback){
    setTimeout(()=>{
        console.log("food prepared");
        callback();
    },1000);
}

function packfood(callback){
    setTimeout(()=>{
        console.log("food packed");
        callback();

    },1000)
}
function deliverfood(callback){
    setTimeout(()=>{
        console.log("food delivere");
        callback();
    })
}
selectFood(()=>{
    prepareFood(()=>{
        packfood(()=>{
            deliverfood(()=>{
                console.log("order cpmpleted")
            })
        })
    })
})

// part-b
function selectFood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("food selected")
            resolve()
        },1000)
    }) 
}

function prepareFood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
        console.log("food prepared")
        resolve();
        },1000)
    })
}

function packfood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
        console.log("food packed")
        resolve();
        },1000)
    })
}

function deliverfood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
        console.log("food delivere")
        resolve();
        },1000)
    })
}

selectFood()
.then(prepareFood)
.then(packfood)
.then(deliverfood)
.then(()=>console.log("order completed"))

// part c
async function selectFood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("food selected")
            resolve();
        },1000)
    })
}

async function prepareFood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("food prepared")
            resolve();
        },1000)
    })
}

async function packfood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("food packed")
            resolve();
        },1000)
    })
}
async function deliverfood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("food delivere")
            resolve();
        },1000)
    })
}
async function processOrder(){
    await selectFood();
    await prepareFood()
    await packfood();
    await deliverfood();
    console.log("order completed")
}

processOrder();
    
