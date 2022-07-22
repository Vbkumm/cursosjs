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
let htmlElementsUp = "";
var getDays = function(arr) {
    if (typeof(arr) == 'object') {
        htmlElements += ' ' + arr['week_days'] + ':  ';
        if (!arr['is_now']) {
            if (!htmlElementsUp == 'ABERTO'){
                htmlElementsUp = 'FECHADO';
            }
        } else {
            htmlElementsUp = 'ABERTO';
            if (htmlElementsUp.indexOf('FECHADO')){
                htmlElementsUp = [htmlElementsUp].filter(e => e !== 'FECHADO');
            }
            
        }
        for (let i = 0; i < arr['hours'].length; i++) {
            
            if (arr['is_now']) {
                htmlElementsUp += ' até ' + arr['hours'][i][1];
            }
            
            if (i > 0) {
                console.log(i)
                htmlElements += ' e ';
            }
            htmlElements += arr['hours'][i][0] + ' às ' + arr['hours'][i][1];
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
    console.log(htmlElementsUp);
    console.log(htmlElements);
}
getDayHours(hour_address);