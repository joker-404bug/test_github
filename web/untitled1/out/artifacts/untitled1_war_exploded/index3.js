function beat(){
    var name = document.getElementById("s_name");
    var num = document.getElementById("s_num");
    var mail = document.getElementById("s_mail");
    var address = document.getElementById("s_address");
    var QQ_num = document.getElementById("s_QQ_num");
    if(checkemail(mail.value)) {
        window.location.href = "index2.html"
    }
}

function checkemail(str){
    var sReg = /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;
    if ( ! sReg.test(str) )
    {
        alert("Email地址错误！请重新输入。");
        return false;
    }
    return true;
}