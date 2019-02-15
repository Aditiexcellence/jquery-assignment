$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'assignment8.json',
        dataType: 'json',
        success: function (data) {
            var row ="";
            for ($i = 0; $i < 5; $i++) {
                row += '<tr><td>' + data[$i].name + '</td>';
                row += '<td>' + data[$i].email + '</td>';
                row += '<td>' + data[$i].message + '</td>';
                row += '<td>' + data[$i].date + '</td></tr>';
            }
            $('#tables').html(row);
        },
    });
    $('.dataTables_length').addClass('bs-select');
    location: 'assignment8.html';
    setTimeout(function () {
        location.reload();
    }, 5000);
})