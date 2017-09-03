function updateColor() {
    var circleLink = document.getElementById("link");
    var wrapper = document.getElementById("wrapper");
    var top = document.getElementById("top");
    var middle = document.getElementById("middle");
    var bottom = document.getElementById("bottom");
 
    var topScrollTop = top.scrollTop;
    var middleScrollTop = middle.scrollTop
    var bottomScrollTop = bottom.scrollTop;
        
    var wrapperScrollTop = wrapper.scrollTop;
    var wrapperScrollHeight = wrapper.scrollHeight;
    var wrapperClientHeight = wrapper.clientHeight;
        
    var topPosition = wrapperScrollTop;
    var middlePosition = wrapperScrollHeight / 3;
    var bottomPosition = (wrapperScrollHeight / 3) * 2;

/* FOR DEBUGGING 
    console.log('wrapperScrollTop (distance from top of page): ', wrapperScrollTop);
    console.log('----------------------------------------------');
    console.log('start of topPosition in px: ', topPosition);
    console.log('start of middlePosition in px: ', middlePosition);
    console.log('start of bottomPosition in px:  ', bottomPosition);
    console.log('----------------------------------------------');
    console.log('wrapperScrollHeight (total height of page in px): ', wrapperScrollHeight);
    console.log('wrapperClientHeight (height of viewport): ', wrapperClientHeight);
    console.log('----------------------------------------------');
*/        
            var scrolledTo = $("#link").offset().top;
            var scrolledToF = Math.round(scrolledTo);
            //console.log('Scrolled to:', scrolledToF);
            //console.log('----------------------------------------------');
    
            
        if (scrolledToF < middlePosition) {
            //console.error('Scroll position is for top div'); 
            if ($(window).width() < 768) {
                $(".circleLink").css("background-color","#3498db");
            }
            else {
                $(".circleLink").css("background-color","transparent");
            }
            $(".circleLink").mouseover(function() {
                $(this).css("color","#3498db");
                $(this).css("background-color","white");
            }).mouseout(function() {
                $(this).css("color","white");
                if ($(window).width() < 768) {
                    $(this).css("background-color","#3498db");
                }
                else {
                    $(this).css("background-color","transparent");
                }
            });
        }
        else if(scrolledToF > middlePosition && scrolledTo < bottomPosition) {
            //console.error('Scroll position is for middle div');
            if ($(window).width() < 768) {
                $(".circleLink").css("background-color","#2980b9");
            }
            else {
                $(".circleLink").css("background-color","transparent");
            }
            $(".circleLink").mouseover(function() {
                $(this).css("color","#2980b9");
                $(this).css("background-color","white");
            }).mouseout(function() {
                $(this).css("color","white");
                if ($(window).width() < 768) {
                    $(this).css("background-color","#2980b9");
                }
                else {
                    $(this).css("background-color","transparent");
                }
            });
        }
        else if (scrolledToF > bottomPosition) {
            //console.error('Scroll position is for bottom div');
            if ($(window).width() < 768) {
                $(".circleLink").css("background-color","#2c3e50");
            }
            else {
                $(".circleLink").css("background-color","transparent");
            }
            $(".circleLink").mouseover(function() {
                $(this).css("color","#2c3e50");
                $(this).css("background-color","white");
            }).mouseout(function() {
                $(this).css("color","white");
                if ($(window).width() < 768) {
                    $(this).css("background-color","#2c3e50");
                }
                else {
                    $(this).css("background-color","transparent");
                }
            });
        }
    
    }
    
    function scroller() {
    
    var circleLink = document.getElementById("link");
    var wrapper = document.getElementById("wrapper");
    var top = document.getElementById("top");
    var middle = document.getElementById("middle");
    var bottom = document.getElementById("bottom");
 
    var topScrollTop = top.scrollTop;
    var middleScrollTop = middle.scrollTop
    var bottomScrollTop = bottom.scrollTop;
    
    var wrapperScrollTop = wrapper.scrollTop;
    var wrapperScrollHeight = wrapper.scrollHeight;
    var wrapperClientHeight = wrapper.clientHeight;
        
    var topPosition = wrapperScrollTop;
    var middlePosition = wrapperScrollHeight / 3;
    var bottomPosition = (wrapperScrollHeight / 3) * 2;

    console.log('wrapperScrollTop (distance from top of page): ', wrapperScrollTop);
    console.log('----------------------------------------------');
    console.log('start of topPosition in px: ', topPosition);
    console.log('start of middlePosition in px: ', middlePosition);
    console.log('start of bottomPosition in px:  ', bottomPosition);
    console.log('----------------------------------------------');
    console.log('wrapperScrollHeight (total height of page in px): ', wrapperScrollHeight);
    console.log('wrapperClientHeight (height of viewport): ', wrapperClientHeight);
    console.log('----------------------------------------------');

    var scrolledTo = $("#down").offset().top;
    var scrolledToF = Math.round(scrolledTo);
    console.log('Down arrow scrolled to:', scrolledToF);
        
        // if we're in the top div
        if (scrolledToF < middlePosition) {
            if($(".fa-arrow-down").getRotateAngle() == 180) {
                $(".fa-arrow-down").rotate({
                    angle: 180,
                    animateTo: 0
                });
            }
            $("#down").click(function() {
                console.error('Scroll position is for top div');
                var x = document.getElementById("middle");
                x.scrollIntoView({ block: "start", behavior: "smooth" });
            });
        }
        
        // if we're in the middle div
        else if(scrolledToF > middlePosition && scrolledTo < bottomPosition) {
            if($(".fa-arrow-down").getRotateAngle() == 180) {
                $(".fa-arrow-down").rotate({
                    angle: 180,
                    animateTo: 0
                });
            }
            $("#down").click(function() {
                console.error('Scroll position is for middle div');
                var x = document.getElementById("bottom");
                x.scrollIntoView({ block: "start", behavior: "smooth" });
            });
        }
        
        // if we're in the bottom div
        else if (scrolledToF > bottomPosition) {        
            if($(".fa-arrow-down").getRotateAngle() == 0) {
                $(".fa-arrow-down").rotate({
                    angle: 0,
                    animateTo:180
                });
            }           
            $("#down").click(function() {
                console.error('Scroll position is for bottom div');
                var x = document.getElementById("top");
                x.scrollIntoView({ block: "start", behavior: "smooth" });
            });
        }
        
    }
    
    $(window).scroll(function() {
        scroller();
        updateColor();
    });
    
    $(window).resize(function() {
        scroller();
        updateColor();
    });
        
    $(document).ready(function() {
        console.log('document ready, starting animations');
        setTimeout(greet, 400);
        updateColor();
        scroller();
    });

    function greet() {
        $(".hello").fadeIn(1800)
        $(".introText").fadeIn(2400)
        $("#down").fadeIn(1800)
        $("#stickyLinks").css("display", "flex").hide().fadeIn(2400);
    }