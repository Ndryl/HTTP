promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hendryl Marques Rocha'), 100)
})


const response = async ()=>{
    const message = await promise
    console.log(`Resolve with ${message}`)
}


console.log('I print frist')
response()
console.log("I print after response")