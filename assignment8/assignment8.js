$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'assignment8.json',
        dataType: 'json',
        success: function (data) {
            var row = "";
            for ($i = 0; $i < data.length; $i++) {
                row += '<tr><td scope="row">' + data[$i].name + '</td>';
                row += '<td>' + data[$i].email + '</td>';
                row += '<td>' + data[$i].message + '</td>';
                row += '<td>' + data[$i].date + '</td></tr>';
            }
            $('#tables').html(row);
            $('#page').after('<div id="nav"></div>');
            var rowsShown = 5;
            var rowsTotal = $('#page tbody tr').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
            }
            $('#page tbody tr').hide();
            $('#page tbody tr').slice(0, rowsShown).show();
            $('#nav a:first').addClass('active');
            $('#nav a').bind('click', function () {

                $('#nav a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#page tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
            });
        }
    });
    location: 'assignment8.html';
    setTimeout(function () {
        location.reload();
    }, 5000);

})