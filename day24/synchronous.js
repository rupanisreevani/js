// <!-- synchronous -->
console.log("Step 1 done")
console.log("Step 2 done")
console.log("Step 3 done")

// / Asynchronous
console.log("Step 1 done")
setTimeout(()=>{
    console.log("Step 2 done")
}, 2000)
console.log("Step 3 done")




// call function 

function Homework(sub,callback){
    setTimeout(()=>console.log("sub"+sub+"Homework finished"),2000)
    callback()
}
function finished(){
    console.log("Homework finished completely")
}
Homework("math",finished)

setTimeout(()=>{
    console.log("setp 1 done")
    setTimeout(()=>{
        console.log("setp 2 done")
        setTimeout(()=>{
            console.log("setp 3 done")
        },2000)
    },2000)

},2000)


function Boilwater(callback){
    setTimeout(()=>{
        console.log("Boilwater")
        callback();
    },5000)
}
function AddNoodles(callback){
    setTimeout(()=>{
        console.log("AddNoodles")
        callback();
    },2000)
}
function AddMasala(callback){
    setTimeout(()=>{
        console.log("AddMasala")
        callback();
    },2000)
}
function Serve(){
    setTimeout(()=>{
        console.log("Maggie served to everyone")
        
    },2000)
}
Boilwater(()=>{
    AddNoodles(()=>{
        AddMasala(()=>{
            Serve()
        })
    })
})
    
