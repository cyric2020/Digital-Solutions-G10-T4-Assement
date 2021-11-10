var list = []

var domain = window.location.protocol + "//" + window.location.host + "/";
var json = domain + 'public/games.json'

// get json from url using jquery and print the json to console
function get_json(url, callback) {
    $.getJSON(url, function(data) {
        callback(data);
    });
}

get_json(json, function(data){
    list = data;
});

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

var app = new Vue({
    el: '#app',
    data: {
        search_results: []
    }
});

function text_sort(text) {
    var sort = fuzzysort.go(text, list, {threshold: -Infinity, limit: 10, allowTypo: true});
    var shift = []
    for(var i = 0; i < sort.length; i++){
        // var arr = sort[i].target.split(', ');
        if(shift.length == 0){
            shift.push(sort[i]);
        }else{
            for(var o = 0; o < shift.length; o++){
                if(o == (Number(shift.length)-1)){
                    shift.push(sort[i]);
                    break;
                }else if(Date.parse(sort[i].target.split(', ')[1]) < Date.parse(shift[o].target.split(', ')[1])){
                    // shift.push(sort[i]);
                    // shift.split(o, 0, sort[i]);
                    shift.insert(Number(o), sort[i])
                    break;
                }else{
                    // console.log(Date.parse(sort[i].target.split(', ')[1]) + ' : ' + Date.parse(shift[o].target.split(', ')[1]));
                }
            }
        }
    }
    return shift;
}

document.getElementById('search_input').addEventListener('keyup', function (e) {
    var sort = text_sort(e.target.value);
    app.search_results = sort;
});