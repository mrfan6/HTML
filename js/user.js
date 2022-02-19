function loginwithpwd() {
	if (document.all.username.value.length == 0) {
		alert("请输入用户名！");
		document.all.username.focus();	
		return false;
	}	
	if (document.all.password.value.length == 0) {
		alert("请输入密码！");
		document.all.password.focus();		
		return false;
	}	
	if ((document.all.password.value.length >0) && (document.all.username.value.length > 0)) {
		document.getElementById("Submit").disabled  = true;
		document.getElementById("Submit2").disabled  = true;
		form1.submit();
	}
}