$(document).ready(function(){
  // Call the event handler on #text
  $(".room").hover(function(){
    /* 
    Hover alows a mouseenter and mouse leave event
    seperated by a comma
    */
    var myClass=$(this).attr("id");
    //Event one mouse enter add class
    $('#'+'room_x5F_'+myClass).addClass("hoverstate");
  },
    // Event two mouse out remove class               
    function(){
    var myClass=$(this).attr("id");
    $('#'+'room_x5F_'+myClass).removeClass("hoverstate");
  });
});


$(document).ready(function(){
  // Call the event handler on #text
  $(".room1").hover(function(){
    /* 
    Hover alows a mouseenter and mouse leave event
    seperated by a comma
    */
    var myClass=$(this).attr("id");
    //Event one mouse enter add class
    $('#'+'room_x5F_'+myClass).addClass("hoverstate");
  },
    // Event two mouse out remove class               
    function(){
    var myClass=$(this).attr("id");
    $('#'+'room_x5F_'+myClass).removeClass("hoverstate");
  });
});


$(document).ready(function(){
  // Call the event handler on #text
  $(".room2").hover(function(){
    /* 
    Hover alows a mouseenter and mouse leave event
    seperated by a comma
    */
    var myClass=$(this).attr("id");
    //Event one mouse enter add class
    $('#'+'room_x5F_'+myClass).addClass("hoverstate");
  },
    // Event two mouse out remove class               
    function(){
    var myClass=$(this).attr("id");
    $('#'+'room_x5F_'+myClass).removeClass("hoverstate");
  });
});


$(document).ready(function(){
  // Call the event handler on #text
  $(".room3").hover(function(){
    /* 
    Hover alows a mouseenter and mouse leave event
    seperated by a comma
    */
    var myClass=$(this).attr("id");
    //Event one mouse enter add class
    $('#'+'room_x5F_'+myClass).addClass("hoverstate");
  },
    // Event two mouse out remove class               
    function(){
    var myClass=$(this).attr("id");
    $('#'+'room_x5F_'+myClass).removeClass("hoverstate");
  });
});


$(document).ready(function(){
  // Call the event handler on #text
  $(".room4").hover(function(){
    /* 
    Hover alows a mouseenter and mouse leave event
    seperated by a comma
    */
    var myClass=$(this).attr("id");
    //Event one mouse enter add class
    $('#'+'room_x5F_'+myClass).addClass("hoverstate");
  },
    // Event two mouse out remove class               
    function(){
    var myClass=$(this).attr("id");
    $('#'+'room_x5F_'+myClass).removeClass("hoverstate");
  });
});



$("#search").on('keyup', function(){

  $('.room').hide();
   var txt = $('#search').val();
   $('.room').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
});

$("#search1").on('keyup', function(){
  $('.room1').hide();
   var txt = $('#search1').val();
   $('.room1').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
});
    

$("#search2").on('keyup', function(){
  $('.room2').hide();
   var txt = $('#search2').val();
   $('.room2').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
});
    

$("#search3").on('keyup', function(){
  $('.room3').hide();
   var txt = $('#search3').val();
   $('.room3').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
});

$("#search4").on('keyup', function(){
  $('.room4').hide();
   var txt = $('#search4').val();
   $('.room4').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
});


function dropDownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}


 $(document).ready(function(){
 
    $('#menu a').click(function(){
        $('.intro').hide();
        $('.main-content').hide();
        $('#'+this.rel+'').fadeToggle();
        return false;
    });
    
});
