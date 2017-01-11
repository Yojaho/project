window.onload = function () {
    if ($("#time")[0]) {
        var myDate = new Date();
        $("#time")[0].innerHTML = myDate.toLocaleTimeString();
    }
}
function login() {
    if ($("#zh")[0].value == "root" && $("#mm")[0].value == "root") {
        window.open('html/管理员.html');
    } else { alert("密码错误") }
}