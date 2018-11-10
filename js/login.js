var LOGIN_API = "https://2-dot-backup-server-001.appspot.com/_api/v2/members/authentication";
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null){
    btnSubmit.onclick = function () {
        var txtEmail = document.forms['register-form']['email'];
        var txtPassword = document.forms['register-form']['password'];
        if (txtEmail != null && txtPassword != null){
            var email = txtEmail.value;
            var password = txtPassword.value;
            var jsMember = {
                email: email,
                password: password,
            }
            var jsonData = JSON.stringify(jsMember);
            postLoginRequest(jsonData);
        }
    }
}

function postLoginRequest(jsonData) {
    var req = new  XMLHttpRequest();
    req.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 201){
            var member = JSON.parse(this.responseText);
            alert(member.token);
            localStorage.setItem('token', member.token);
        }
    }
    req.open('POST', LOGIN_API, true);
    req.setRequestHeader('Content-type','application/json;charset=UTF-8');
    req.send(jsonData);
}