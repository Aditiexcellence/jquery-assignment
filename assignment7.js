$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'assignment7.json',
        dataType: 'json',
        success: function (data) {
            var row = '<tr>'
            for ($i = 0; $i < data.length; $i++) {
                row += '<td>'+ data[$i].firstname + '</td>';
                row += '<td>' + data[$i].lastname + '</td>';
                row += '<td>' + data[$i].dob + '</td>';
                row +='</tr>';
            }
            $('#table').append(row);
        }
    });
})