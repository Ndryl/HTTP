const awaitTimes = 100;

const callBack = () =>{
    console.log('I print second');
}

const response = async()=>{
    try{
        console.log('I print frist');
        setTimeout(callBack, awaitTimes);
        console.log('I print third');
    }catch(e){
        console.log(e)
    }
}

response();

