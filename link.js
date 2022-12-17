$(document).ready(function () {
    var table = $("#table").DataTable();

    $('#table tbody').on( 'click', 'tr', function () {
        var data = table.row( this ).data();
        console.log(data);
        window.open("https://www.google.com/search?q="+data[0]+"+gov+uk");
    });
    $("#table tr").css('cursor', 'pointer');
});
