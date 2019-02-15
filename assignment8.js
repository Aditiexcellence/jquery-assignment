$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'assignment8.json',
        dataType: 'json',
        success: function (data) {
            var row = '<tr>'
            for ($i = 0; $i < 5; $i++) {
                row += '<td>' + data[$i].name + '</td>';
                row += '<td>' + data[$i].email + '</td>';
                row += '<td>' + data[$i].message + '</td>';
                row += '<td>' + data[$i].date + '</td>';
                row += '</tr>';
            }
            $('#table').append(row);
        },
    });
    location: 'assignment9.html';
    setTimeout(function () {
        location.reload();
    }, 5000);
})
