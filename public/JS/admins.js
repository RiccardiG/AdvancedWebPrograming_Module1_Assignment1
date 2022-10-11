function checkAdmins(){
    input = document.getElementById('floatingAdmin').value;
    if(input == "root"){
        window.location.href = `/admins/0`;
    }
    if(input == "Giuliano"){
        window.location.href = `/admins/1`;
    }
}