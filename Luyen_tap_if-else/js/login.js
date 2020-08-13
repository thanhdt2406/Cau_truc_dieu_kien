let user = prompt("Enter username:");
if (user == "Admin"){
    let pw = prompt("Enter password: ");
        if (pw == "TheMaster"){
            alert("Welcome");
        } else
            if (pw == null){
                alert("Canceled")
            }
            else alert("Wrong password");
} else
    if (user == null)
        alert("Canceled");
    else
        alert("I don't know you");