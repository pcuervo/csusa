$(window).load(function(){

    $('.profile-section').hide();
    $('#section1').show().addClass('active');

    $('.leftColView ul li a').click(function() {
        url = $(this).attr("href");
        $('.active').removeClass('active').fadeOut(300, function() {
            $(url).fadeIn().addClass('active');
        });
        return false;
    });

    $('.text').hide();
    $('a.toggler').toggle(function(){
        $(this).parent().addClass('active').find('.text').stop(true,true).slideDown('fast');
        return false;
    },function(){
        $(this).parent().removeClass('active').find('.text').stop(true,true).slideUp('fast');
        return false;
    });


    $('.mailingList').click(function() {
        url = $(this).attr("href");
        titleText = $(this).attr("title");
        $("#mailing").load(url).dialog({height:260,width:690,modal:true,title:titleText});

        return false;
    });

    $('.register').click(function() {
        url = $(this).attr("href");
        titleText = $(this).attr("title");
        $("#mailing").load(url).dialog({height:350,width:650,modal:true,title:titleText});

        return false;
    });

    $('.login').click(function() {
        url = $(this).attr("href");
        titleText = $(this).attr("title");
        $("#login").load(url).dialog({height:350,width:650,modal:true,title:titleText});

        return false;
    });

    $('.forgot-password').bind('click', function() {
        url = $(this).attr("href");
        titleText = $(this).attr("title");
        $("#forgotpassword").load(url).dialog({height:350,width:650,modal:true,title:titleText});

        return false;
    });

    $('.slideshare').click(function() {
        url = $(this).attr("href");
        titleText = $(this).attr("title");
        $("#mailing").load(url).dialog({height:450,width:465,modal:true,title:titleText,beforeClose: function(event, ui) {$("#mailing").html(''); }});

        return false;
    });

});

function set_lang(target, site_url){
    url2='/site/set-lang/'+ target +"/";
    $.get(url2, function(data) {
        if(target=="en"){
            location="/"+ site_url;
        }
        else{
            location="/" + target +"/"+ site_url;
        }
    });
}