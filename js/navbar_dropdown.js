$("#nav_products").mouseenter(function(){
    $('.drop').remove();

    var dropData = 
    '<section class="drop">'+
        '<p class="title">PRODUCTS</p>'+
        '<p class="text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>'+
    '</section>';


    $('.dropdown_body').append(dropData);
});

$("#nav_use-cases").mouseenter(function(){
    $('.drop').remove();

    var dropData = 
    '<section class="drop">'+
        '<p class="title">CASES</p>'+
        '<p class="text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>'+
    '</section>';


    $('.dropdown_body').append(dropData);
});

$("#nav_developers").mouseenter(function(){
    $('.drop').remove();
    
    var dropData = 
    '<section class="drop">'+
        '<p class="title">LINKS</p>'+
        '<a href="#" class="text">Steven Rose<span class="arrow"></span></a>'+
    '</section>';

    $('.dropdown_body').append(dropData);
});

$("#nav_company").mouseenter(function(){
    $('.drop').remove();

    var dropData = 
    '<section class="drop">'+
        '<p class="title">COMPANY</p>'+
        '<p class="text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>'+
    '</section>';


    $('.dropdown_body').append(dropData);
});