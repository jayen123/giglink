$(document).ready(function(){
    // mobile toggle menu
    let toggleBtn = $("#phone_toggle");
    let toggleMenu = $("#phone_menu");
    let burgerMenu = '<span class="iconify" data-icon="line-md:menu" id="menu_icon"></span>';
    let croosIcon = '<span class="iconify" data-icon="line-md:close"></span>';


    toggleBtn.on("click",function(){
        const dataIcon = toggleBtn.find('.iconify').data("icon");
        toggleMenu.stop().slideToggle();

        if (dataIcon === "line-md:menu") {
            toggleBtn.html(croosIcon);
          } else {
            toggleBtn.html(burgerMenu);
          }
    });


    // $("#phone_toggle").click(function(){
    //     $("#phone_menu").toggle();
    //     $("#menu_icon").attr('data-icon','line-md:close-small');
    // });



    // profile
    $("#profile_btn").click(function(){
        $("#profile").stop().toggle();
    });



    // Top collection carousel

    $('.owl-carousel.top_collections').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: ['<span class="iconify" data-icon="ep:arrow-right-bold"></span>','<span class="iconify" data-icon="ep:arrow-left-bold"></span>'],
        autoPlay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })

    // accordian 
    
    let accordianItems = document.querySelectorAll(".accordian-item");

    accordianItems.forEach(item => {

        let accordianHeader = item.querySelector(".accordian-header");
        
        accordianHeader.addEventListener('click',() => {
            for (let index = 0; index < accordianItems.length; index++) {
                if (accordianItems[index] != item) {
                    accordianItems[index].classList.remove('active');
                }else{
                    item.classList.toggle('active');
                }
                
            }
        });
    });


});
