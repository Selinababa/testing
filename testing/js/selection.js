window.onload = function () {
    var flag = 1;
    var quit = document.querySelector('.quit');
    quit.addEventListener('click', function () {
        location.href = '../html/function.html'
    })
    //渲染列表
    var nodes = [
        '边缘服务器ES1',
        '边缘服务器ES2',
        '边缘服务器ES3',
        '边缘服务器ES4',
        '边缘服务器ES5',
    ];
    var server = document.querySelector('.server').children;
    // server.childNodes
    console.log(server);
    for (let i = 0; i < nodes.length; i++) {
        server[i].innerHTML = nodes[i];
    }

    var states = document.querySelector('.state').children;
    var identify = document.querySelector('.identify').children;
    // console.log(states);
    var idenList = [
        '从节点',
        '从节点',
        '联盟链节点',
        '从节点',
        '从节点',
    ]

    //点击事件
    var start = document.querySelector('.start');
    var select = document.querySelector('.select');
    //点击开始，将节点状态由未启动改为启动
    start.addEventListener('click', function () {
        for (let i = 1; i < states.length; i++) {
            states[i].innerHTML = '已启动';
        }
    })
    select.addEventListener('click', function () {
        for (let i = 1; i < states.length; i++) {
            identify[i].innerHTML = idenList[i - 1];
        }
    })
}