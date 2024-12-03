ferch('http://localhost:8080/perfumaria/perfume')
    .then(Response => {
        console.log(Response)
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Erro:', error))

    function getComputedStyle(cep) {
        fetch('http://localhost:8080/perfumaria/10/:id')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
    }

    getCEP('0493509510')