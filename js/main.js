$(document).ready(function() 
{
  
  $( "#responsive-menu-icon" ).click(function() 
  {
    var nav = $(".nav-wrapper");
    var navHeight = nav.height();
      if (navHeight < 320)  
      {
        TweenMax.to(nav, 1, {"height":320});
      } 
      else 
      {
        TweenMax.to(nav, 1, {"height":50});
      }
  });
   // menu icon jquery
  // when whole menu div is clicked
    $("#responsive-menu-icon").click( function() 
    {
    // if the menu height is not full, transform icon
    var nav = $(".nav-wrapper");
    var navHeight = nav.height();
      if (navHeight < 150) 
      {
          $("#a").addClass("rotate-down");
          $("#responsive-menu-icon").addClass("menu-up");
          $("#b").addClass("disappear");
          $("#c").addClass("rotate-up");
        } 
        else 
        {
        // if it's not less than full height, remove animation classes
          $("#a").removeClass("rotate-down");
          $("#responsive-menu-icon").removeClass("menu-up");
          $("#b").removeClass("disappear");
          $("#c").removeClass("rotate-up");
      }
    });

    //La fonction ci-dessous permet de fluidifier les défilement vers les ancres
    $(function() 
    {
    /**
    * Smooth scrolling to page anchor on click
    **/
      $("a[href*='#']:not([href='#'])").click(function() 
      {
        if (location.hostname == this.hostname && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")) 
        {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) 
            {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1200);
            }
        }
      });
    });
    //ci-dessous fonction permettant le défilement fluide vers le haut
    var btn = $('#button');

    $(window).scroll(function() 
    {
      if ($(window).scrollTop() > 300) 
      {
      btn.addClass('show');
      } 
      else
      {
      btn.removeClass('show');
      }
    });

    btn.on('click', function(e) 
    {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });
});