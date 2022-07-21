let address_js = 8;
let hours_day = [{
    "week_days": "Segunda-Feira",
    "is_now": false,
    "hours": [
        ["09:00", "20:00"]
    ]
}, {
    "week_days": "Quarta-Feira",
    "is_now": false,
    "hours": [
        ["09:00", "19:00"],
        ["21:00", "23:00"]
    ]
}, {
    "week_days": "Quinta-Feira",
    "is_now": true,
    "hours": [
        ["09:00", "19:00"]
    ]
}, {
    "week_days": "Sexta-Feira",
    "is_now": false,
    "hours": [
        ["09:00", "19:00"]
    ]
}];

let hour_address = [hours_day, address_js];


let htmlElements = "";
let htmlElementsTrue = "";
var getDays = function(arr) {
    if (typeof(arr) == 'object') {
        
        if (!arr['is_now']) {
            console.log(arr['is_now']);
            htmlElements += '<div>' + '<i class="far fa-clock" aria-hidden="true"></i>' + ' ' + arr['week_days'] + ':  ';
        } else {
            
            htmlElementsTrue += '<div> ABERTO'; 
        }
        for (let i = 0; i < arr['hours'].length; i++) {

            if (!arr['is_now']) {
                htmlElements += ' ' + arr['hours'][i][0] + ' às ' + arr['hours'][i][1] + "</div>";
            } else {
                htmlElementsTrue += ' até ' + arr['hours'][i][1] + "</div>";
            }
        }
    }
}

var getDayHours = function(hour_address) {
    let arr = hour_address[0];
    let address = hour_address[1];
    if (typeof(arr) == 'object') {
        for (let i = 0; i < arr.length; i++) {
            getDays(arr[i]);

        }
    }
    console.log(htmlElements);
    console.log(htmlElementsTrue);
}


getDayHours(hour_address);