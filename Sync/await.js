promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hendryl Marques Rocha'), 100)
})


const response = async ()=>{
    const message = await promise
    console.log(`Resolve with ${message}`)
}

response()