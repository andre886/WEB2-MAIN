function login() {
    const user = document.getElementById("login")
    const password = document.getElementById("password")
    //console.log(user.value.length, password.value);
    if (user.value.length > 0 && password.value.length > 0) {
        const data = {
            user: user.value,
            password: password.value
        }
        const settings = {
            method: 'POST',
            //mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': "application/json, text/plain, /",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        fetch('http://127.0.0.1:3000/login', settings)
            .then(res => res.json())
            .then(res => {
                if (res.data == true) {
                   window.location.href = 'http://127.0.0.1:5500/client/home/';
                } 
                else {
                    alert('Erro.')
                }
            })
    } 
    else {
        window.alert("Credenciais Invalidas!")
    }
}