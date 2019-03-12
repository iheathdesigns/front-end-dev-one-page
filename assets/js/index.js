
// Modal Button Functions
document.querySelector(".button-modal").addEventListener("click", function() {
    document.querySelector(".modal").style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener("click", function() {
    document.querySelector('.modal').style.display = 'none';
});

// Rate table
jQuery(document).ready(function($) {
    $.getJSON("code-test.json", function(data){
        var testData = [];
        $.each(data, function(key, value){
            testData += '<tr>';
            testData += '<td>' + value.name + '</td>';
            testData += '<td>' + value.apy + ' %' + '</td>';
            testData += '<td>' + '$' + value.earnings + '</td>';
            testData += '</tr>';
        });
        $('#rate-table').append(testData);
    });
});


// Tabbed sidebar
jQuery(document).ready(function($) {
    $(".panel").hide();
    $("ul.tabs li:first").addClass("tabs-active").show();
    $(".panel:first").show();
    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("tabs-active");
        $(this).addClass("tabs-active");
        $(".panel").hide();
        var activeLink = $(this).find("a").attr("href");
        $(activeLink).fadeIn();
        return false;
    });
});
