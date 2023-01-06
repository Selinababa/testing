//用户注册时设置密码，将其保存，
//再次登录时，判断密码与注册密码是否相符
//
window.onload = function () {
    var flag = 0;
    var register = document.querySelector("#register");//没获取到
    var user = document.querySelector('#uname');
    var password = document.querySelector('#passw');

    var register = document.querySelector('#register');
    register.addEventListener('click', function () {
        window.username = document.querySelector('#uname');
        console.log(window.username);
        location.href = '../html/function.html';
    })

    register.addEventListener('click', function () {
        console.log(password.value)
    })

}

