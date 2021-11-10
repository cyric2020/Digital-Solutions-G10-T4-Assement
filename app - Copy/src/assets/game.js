// var app = new Vue({
//     el: '#app',
//     data: {
//     }
// });

document.getElementById('voteBtn').addEventListener('click', vote);

function vote(){
    var dropdown = document.getElementById('dropdown');
    var items = dropdown.childNodes;
    for(var item in items){
        if(items[item].nodeName == 'BUTTON'){
            items[item].addEventListener('click', dropdownClick, false);
        }
    }
    document.getElementById('voteBtn').style.display = 'none';
    dropdown.style.display = 'block';
}

function dropdownClick(event){
    var dropdown = document.getElementById('dropdown');
    var items = dropdown.childNodes;
    console.log(event.target.innerHTML);
    document.getElementById('voteBtn').innerHTML = event.target.innerHTML;
    dropdown.style.display = 'none';
    document.getElementById('voteBtn').style.display = 'block';
    voteSubmit();
}

function voteSubmit(){
    document.getElementById('voteSubmit').style.display = 'block';
    var voteWidth = 0
    setInterval(function(){
        if(voteWidth <= 100){
            document.getElementById('wait').style.width = voteWidth + '%';
        }else{
            document.getElementById('voteSubmit').style.display = 'none';
        }
        voteWidth += 10
    }, 100);
}