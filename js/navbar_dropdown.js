$("#nav_services").mouseenter(function(){
    var dropData = 
    '<section class="drop">'+
        '<p class="title">SERVICES</p><br>'+
        '<main class="list">'+
        '<ul class="dropdown-list">'+
            '<li><img class="icon" src="img/icons/3D_square.png"> </img><a href="#" class="title">3D Graphics<span class="arrow"></span><br><p class="text">Models, Animations...</p></a></li>'+
            '<li><img class="icon" src="img/icons/2D_square.png"> </img><a href="#" class="title">2D Graphics<span class="arrow"></span><br><p class="text">Logos, Banners...</p></a></li>'+
        '</ul>'+
        '<ul class="dropdown-list">'+
            '<li><img class="icon" src="img/icons/video_editing.png"> </img><a href="#" class="title">Video Editing<span class="arrow"></span><br><p class="text">Commercial, Motion Graphics...</p></a></li>'+
            '<li><img class="icon" src="img/icons/code.png"> </img><a href="#" class="title">Coding<span class="arrow"></span><br><p class="text">HTML, CSS, JS...</p></a></li>'+
        '</ul>'+
        '</main>'+
    '</section>';

    $('.dropdown_body').append(dropData);
});

$("#nav_about").mouseenter(function(){
    var dropData = 
    '<section class="drop">'+
        '<p class="title">ABOUT</p><br>'+
        '<p class="text">My name is Steven, I have been doing graphic design for 6 years.<br> 3D graphics, models, 2D UI and UX, banners ... </p><br>'+
        '<a href="#" class="text">Show More<span class="arrow"></span></a>'+
    '</section>';

    $('.dropdown_body').append(dropData);
});

$("#nav_services").mouseleave(function(){
    $('.drop').remove();
});

$("#nav_about").mouseleave(function(){
    $('.drop').remove();
});