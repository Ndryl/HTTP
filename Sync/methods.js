const awaitTimes = 100;

const callBack = () =>{
    console.log('I print second');
}

const response = async()=>{
    try{
        console.log('I print frist');
        await sleep(awaitTimes);
        callBack();
        console.log('I print third');
    }catch(e){
        console.log(e)
    }
}
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve, ms))
}

response();

