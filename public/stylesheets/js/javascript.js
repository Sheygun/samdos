

$(document).ready(function(){

    
    $("[data-toggle=tooltip]").tooltip();
});


function myfunction(){
    let lasu = document.getElementById('agreed');
    if (document.getElementById('agreed').checked){
        let dismiss = document.getElementById('visible').style.visibility = "visible";
    }else{
        let dismiss = document.getElementById('visible').style.visibility="hidden";
    }
}