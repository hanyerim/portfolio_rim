$(document).ready(function(){
var num_click=0;
    
                $("#click_menu").click(function(){
                    
                    if(num_click==0){
                        $("#m_menu_wrap").css({
                       display:"block"
                        
                    });
                        $(".sec1_sub_menu").css({
                       display:"none"
                        
                    });
                        num_click++;
                    }
                    else if(num_click==1){
                        $("#m_menu_wrap").css({
                       display:"none"
                    });
                        num_click--;
                    }
                }); 
    
                $("#m_m2").mouseover(function(){
                    $(".sec1_sub_menu").css({
                        display:"block"
                    });
                });
                $(".sec1_sub_menu").mouseleave(function(){
                    $(".sec1_sub_menu").css({
                        display:"none"
                    });
                });
    
    
    var i=0;
            $("#right").click(function(){
                i++;
                if(i>2){
                    i=0;
                }
                $("#mask").animate({
                    left:-1580*i
                });
            });
            $("#left").click(function(){
               i--;
                if(i<0){
                    i=2;
                }
                $("#mask").animate({
                   left:-1580*i 
                });
            });
            setInterval(function(){
               $("#right").trigger("click"); 
            },3000);
    
     $("#t_right").click(function(){
                i++;
                if(i>2){
                    i=0;
                }
                $("#t_mask").animate({
                    left:-900*i
                });
            });
            $("#t_left").click(function(){
               i--;
                if(i<0){
                    i=2;
                }
                $("#t_mask").animate({
                   left:-900*i 
                });
            });
            setInterval(function(){
               $("#t_right").trigger("click"); 
            },3000);
    
    
     $("#m_right").click(function(){
                i++;
                if(i>2){
                    i=0;
                }
                $("#m_mask").animate({
                    left:-620*i
                });
            });
            $("#m_left").click(function(){
               i--;
                if(i<0){
                    i=2;
                }
                $("#m_mask").animate({
                   left:-620*i 
                });
            });
            setInterval(function(){
               $("#m_right").trigger("click"); 
            },3000);
    
});

