$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'assignment8.json',
        dataType: 'json',
        success: function (data) {
            var record = data;
            var row = "";
            for ($i = 0; $i < 5; $i++) {
                row += '<tr><td scope="row">' + record[$i].name + '</td>';
                row += '<td>' + record[$i].email + '</td>';
                row += '<td>' + record[$i].message + '</td>';
                row += '<td>' + record[$i].date + '</td></tr>';
            }
            $('#tables').html(row);
            $('#page').after('<div id="nav"></div>');
            var rowsShown = 5;
            var rowsTotal = record.length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
            }
            $('#nav a:first').addClass('active');
            $('#nav a').bind('click', function () {

                $('#nav a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                var row = "";
                for ($i = startItem; $i < endItem; $i++) {
                    row += '<tr><td scope="row">' + record[$i].name + '</td>';
                    row += '<td>' + record[$i].email + '</td>';
                    row += '<td>' + record[$i].message + '</td>';
                    row += '<td>' + record[$i].date + '</td></tr>';
                }
                $('#tables').html(row);
            });
        }
    })
    location: 'assignment8.html';
    setTimeout(function () {
        location.reload();
    }, 5000);

})