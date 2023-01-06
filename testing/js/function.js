window.onload = function () {
    var flag = 1;
    // var user = location.search();
    // console.log(window.username);
    //点击退出按钮返回登录页
    var quit = document.querySelector('.quit');
    quit.addEventListener('click', function () {
        location.href = '../html/login.html';
    })

    //设置定时器，5秒后显示对话框
    setTimeout(timer(), 2000);

    function timer () {
        window.alert('终端设备已接入');
        //修改图片
        reStyle();
        var img = document.querySelector('img');
        img.src = '../pic/p2_02.png';
        var list = document.querySelector('.list');
        list.style.display = 'block';
    }

    //修改宽度
    function reStyle() {
        var picDiv = document.querySelector('.origin-pic');
        var list = document.querySelector('.list');
        var wrap = document.querySelector('.wrap');
        picDiv.style.width = '60%';
        picDiv.style.height = '350px';//
        picDiv.style.padding = '0 20px';
        picDiv.style.margin = '0 10%';
        list.style.width = '40%';
        wrap.style.display = 'flex';
        wrap.style.justifyContent = 'space-around';
        picDiv.style.margin = '0';
        picDiv.style.padding = '0 10px'

    }

    //列表内容
    //获取列表
    var list  = document.querySelector('.list').children;
    console.log(list);
    var pageList = [
        '../html/selection.html',
        '../html/register.html',
        '../html/identification.html',
        '../html/updating.html',
        '../html/calculation.html',
        '../html/effect.html'
    ]
    //为每一个按钮添加点击事件
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {
            //为每个按钮设置对象跳转页面
            location.href = pageList[i];
        })
    }

}