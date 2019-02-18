$(document).ready(function () {
    var jsonobject;
    $.ajax({
        type: 'GET',
        url: 'assignment8.json',
        dataType: 'json',
        success: function (data) {
            jsonobject = data;
        }
    })
    var currentdata;
    $.ajax({
        // type: 'GET',
        // url: 'assignment8.json',
        // dataType: 'json',
        success: function () {
            var record = jsonobject;
            // var row = "";
            // for ($i = 0; $i < 5; $i++) {
            //     row += '<tr><td scope="row">' + record[$i].name + '</td>';
            //     row += '<td>' + record[$i].email + '</td>';
            //     row += '<td>' + record[$i].message + '</td>';
            //     row += '<td>' + record[$i].date + '</td></tr>';
            // }
            // $('#tables').html(row);
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
                    currentdata = record;
                    row += '<tr class="myhead"><td scope="row">' + record[$i].name + '</td>';
                    row += '<td>' + record[$i].email + '</td>';
                    row += '<td>' + record[$i].message + '</td>';
                    row += '<td>' + record[$i].date + '</td></tr>';
                }
                $('#tables').html(row);
            });
        }
    })
    $('#search_field').on('keyup', function () {
        var value = $(this).val();
        var patt = new RegExp(value, "i");
        $('#myTable').find('tr').each(function () {
            if (!($(this).find('td').text().search(patt) >= 0)) {
                $(this).not('.myHead').hide();
            }
            if (($(this).find('td').text().search(patt) >= 0)) {
                $(this).show();
            }
        });
    });

    location: 'assignment8.html';
    setTimeout(function () {
        location.reload();
    }, 5000);

})