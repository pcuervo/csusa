Cufon.replace('#global-nav ul li a',{hover: true,textShadow: '#000 1px 1px'});Cufon.replace('h1');Cufon.replace('h2');Cufon.replace('h3');Cufon.replace('.latestNewsSide h4');Cufon.replace('.latestNews h4');Cufon.replace('.footer h4');Cufon.replace('.leftCol div');Cufon.replace('.btn',{hover: true,textShadow: '#803321 1px 1px'});Cufon.replace('.btnSmall',{hover: true,textShadow: '#803321 1px 1px'});Cufon.replace('.leftColView ul li a');Cufon.replace('.registerStatus');Cufon.replace('.profileTitle');

$(window).load(function(){
show_nav = false;
	$('li.parent').children('ul').hide();
    if($(".mainBanners").length>0){
	$(".mainBanners").cycle({fx:'scrollUp',delay: 3500});
    }
    if($('#global-nav li a.active').parent('li').hasClass('parent')){
       	show_nav = true;
        $('#global-header .helper>.wrapper').css('paddingBottom','48px');
	$('#global-nav li.parent a.active').parent("li").find('ul').fadeIn('fast');
	$('#global-nav li.parent a.active').parent("li").find('ul').css('display','block');
    }

$('#global-nav>ul>li.parent').hoverIntent(function(){
        target = $(this);
        target.data('hovering',true);

        $('#global-header .helper .wrapper').stop(true).animate({
            paddingBottom: '48px'
        },200);
	
        show_new_subnav(target);

    },function(){
       	if(!show_nav){
 	    $('li.parent').children('ul').hide();
            $('#global-header .helper .wrapper').stop(true).animate({
                paddingBottom: '0'
            },200,function(){
            });
        }else{      
		$('li.parent').children('ul').hide();
		$('#global-nav li.parent a.active').parent("li").find('ul').fadeIn('fast');
		$('#global-nav li.parent a.active').parent("li").find('ul').css('display','block');
	}
});

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

function show_new_subnav(target){
        other_subnav_visible = false;
        if($('li.parent').children('ul').is(':visible')){
            other_subnav_visible = true;
        }
        if(other_subnav_visible){

            if(!target.find('ul').is(':visible')){
                $('li.parent>ul:visible').fadeOut('fast',function(){
		 target.find('ul').fadeIn('fast');target.find('ul').parent('ul').css('display','block');
                });
            }
        }else{
            target.find('ul').fadeIn('fast');target.find('ul').parent('ul').css('display','block');
        }
}

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