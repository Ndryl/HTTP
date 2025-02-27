// Definindo uma Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona com sucesso
    setTimeout(() => resolve("foo"), 100);
});

// Encadeando os métodos `then` e tratando erros com `catch`
myPromise
    .then((value) => `${value} and bar`)
    .then((value) => `${value} and bar again`)
    .then((value) => `${value} and again`)
    .then((value) => `${value} and again`)
    .then((value) => {
        console.log(value); // Resultado final
    })
    .catch((err) => {
        console.error(err); // Tratamento de erros
    });
