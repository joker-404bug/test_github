function beat(){

    var input = document.getElementById("user");
    var input2 = document.getElementById("pass");
    if(input.value == "2018211001"){
        if(input2.value == "2018211001"){
            window.location.href="../index2/index2.html"
        }
        else{
            alert("密码错误！请重新输入。");
        }
    }
    else{
        alert("用户名不存在！请重新输入。");
    }
}