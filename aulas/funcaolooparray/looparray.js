        var hours_day = [[{ 'week_days': 0, 'hours': [{'start_hour': '09:00', 'end_hour': '20:00' }]}],
                         [{ 'week_days': 2, 'hours': [{'start_hour': '09:00', 'end_hour': '19:00' }, {'start_hour': '21:00', 'end_hour': '23:00'}]}],
                         [{ 'week_days': 3, 'hours': [{'start_hour': '09:00', 'end_hour': '19:00' }]}],
                         [{ 'week_days': 4, 'hours': [{'start_hour': '09:00', 'end_hour': '19:00' }]}]]

        let address_js = 8;
        let hour_address = [hours_day, address_js];


        let htmlElements = "";
        var getDays = function(arr) {
            if (typeof(arr) == 'object') {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].is_now != 'false') {
                        
                        htmlElements += '<div>' + '<i class="far fa-clock" aria-hidden="true"></i>' + ' ' + arr[i].week_days + ':  ';
                        if (arr[i].hours) {
                            for (let f = 0; f < arr[i].hours.length; f++) {
                                htmlElements += '  ' + arr[i].hours[f].start_hour + ' às ' + arr[i].hours[f].end_hour + "</div>";
                            }
                            
                        }
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
        }
        getDayHours(hour_address);