var jsonobject;
$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'assignment8.json',
        dataType: 'json',
        success: function (data) {
            jsonobject = data;
            pagination();
        }
    })
    var currentdata;
    function pagination() {
        $('#page').after('<div id="nav"></div>');
        var rowsShown = 5;
        var rowsTotal = jsonobject.length;
        var numPages = rowsTotal / rowsShown;
        for (i = 0; i < numPages; i++) {
            var pageNum = i + 1;
            $('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
        }
        $('#nav a:first').addClass('active');
        $('#nav a').bind('click', function () {
            showPage($(this).attr("rel"));
        });
        function showPage(currPage) {
            $('#nav a').removeClass('active');
            $('#nav a:eq(' + currPage + ')').addClass('active');
            var startItem = currPage * rowsShown;
            var endItem = startItem + rowsShown;
            var row = "";
            for ($i = startItem; $i < endItem; $i++) {
                currentdata = jsonobject[$i];
                row += '<tr class="myhead"><td scope="row">' + currentdata.name + '</td>';
                row += '<td>' + currentdata.email + '</td>';
                row += '<td>' + currentdata.message + '</td>';
                row += '<td>' + currentdata.date + '</td></tr>';
            }
            $('#tables').html(row);
        }
        showPage(0);
    }
    $('#search').keyup(function () {
        var search = $(this).val();
        $('table tbody tr').hide();
        var len = $('table tbody tr:not(.notfound) td:nth-child(2):contains("' + search + '")').length;
        if (len > 0) {
            $('table tbody tr:not(.notfound) td:contains("' + search + '")').each(function () {
                $(this).closest('tr').show();
            });
        } else {
            $('.notfound').show();
        }
    });
    location: 'assignment8.html';
    setTimeout(function () {
        location.reload();
    }, 5000);
})