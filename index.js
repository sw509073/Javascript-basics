function validate(){
    if (document.Mform.EMail.value ==""){
        alert("Enter email");
        document.Mform.EMail.focus();
        return false;
    }
    else if (document.Mform.Password.value ==""){
        alert("Enter password");
        document.Mform.Password.focus();
        return false;
    }
    else {
        return true;
    }
}