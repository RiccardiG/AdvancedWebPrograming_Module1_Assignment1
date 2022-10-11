
function fetchEmail(){
    var data = document.getElementById('floatingInput').value;
    window.location.href = `/user/${data}`;
  }