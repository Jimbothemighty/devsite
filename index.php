<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <meta name="description" content="Ed Brown - Web Portfolio">
    <meta name="author" content="">

    <title>Ed Brown - Web Portfolio</title>

<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open Sans">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://use.fontawesome.com/c9a943793e.js"></script>
<script src="assets/js/jQueryRotate.js"></script>
<script src="assets/js/slideshow.js"></script>
<script src="assets/js/javascript.js"></script>
<link rel="stylesheet" type="text/css" href="assets/css/slideshow.css">
<link rel="stylesheet" type="text/css" href="assets/css/style.css">


</head>
<body>

<div id="wrapper">
    <div id="stickyLinks">
        <a class="circleLink" href="https://www.facebook.com/edmond.brown.7"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        
        <a class="circleLink" id="link" href="https://www.linkedin.com/in/edmund-brown-08a2892a/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        
        <a class="circleLink" href="https://community.gamedev.tv/u/Brownie/summary">Ga</a>
        
        <a class="circleLink" href="mailto:edmund@better-planet.org"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
    </div>
    
    <div id="down" onclick="scroller();"><i class="fa-arrow-down fa" aria-hidden="true"></i></div>

    <div class="fullscreen" id="top">
        <div class="hello">Hello.</div>
        <div class="introText">
            <p>Welcome to the dev site of Edmund Brown.</p>
            <p>Please scroll down...</p>
        </div>
    </div>

    <div class="fullscreen" id="middle"> 
        <div id="shape"></div>
        <div id="middleText">
            <a href="https://better-planet.org/brwne/"><h1 style="padding-bottom: 0px; margin-bottom: 0px;">BRWNE Theme</h1></a> <h3 style="padding-top: 0px; margin-top: 0px;">In development</h3>
            <p>
                BRWNE Theme is a custom wordpess theme sporting three custom widget plugins; responsive parallax, and two content widgets supporting up to three text/image blocks in a fully responsive format
            </p>
            <br>
            <u><a href="https://better-planet.org/brwne/">Click here to view theme</a></u>
        </div>
    </div>

    <div class="fullscreen" id="bottom">
        <div class="outerContainer">
            <div class="slideshowContainer">
                <div class="hideSlide">
                    <div id="first" class="slide"><iframe style="padding: 0px; margin: 0px; width: 100%; height: 100%;" src="https://www.better-planet.org/messenger/register.php"></iframe></div>
                </div>

                <div class="hideSlide">
                    <div class="slide" style="background-image: url('assets/images/messenger1.png');"></div>
                </div>

                <div class="hideSlide">
                    <div class="slide" style="background-image: url('assets/images/messenger2.png');"></div>
                </div>

                <a class="prev" onclick="prevSlide(-1)">&#10094;</a>
                <a class="next" onclick="nextSlide(1)">&#10095;</a>
            </div>
                <br>
            <div class="sliderButtons" style="text-align:center">
                <span id="first" class="dot" onclick="currentSlide(1)"></span> 
                <span class="dot" onclick="currentSlide(2)"></span> 
                <span class="dot" onclick="currentSlide(3)"></span> 
            </div>
        </div>
    
        <div id="bottomText">
            <a href="https://better-planet.org/messenger/"><h1 style="padding-bottom: 0px; margin-bottom: 0px;">Web Messenger</h1></a> <h3 style="padding-top: 0px; margin-top: 0px;">In development</h3>
            <p>
                The messenger web application is a stand alone web application for browsers. It is not based on any framework or platform. It is fully responsive, tested on all major browsers for desktop and mobile. It is in the development stage with minor bugs still present.
            </p>
            <br>
            <u><a href="https://better-planet.org/messenger/">Click here to view project</a></u>
        </div>
    </div>   
</div>
    
</body>
    
<script>   
    $(document).ready(function() {
        if ($(window).width() < 768) {
            $("#first").css("background-image","url('assets/images/messenger1.png')");
            document.getElementById("first").innerHTML = '';
        }
        else {
            $("#first").css("background-image","none");
            document.getElementById("first").innerHTML = '<iframe style="padding: 0px; margin: 0px; width: 100%; height: 100%;" src="https://www.better-planet.org/messenger/register.php"></iframe>';
        }
    });
    
        $(window).resize(function() {
        if ($(window).width() < 768) {
            $("#first").css("background-image","url('assets/images/messenger1.png')");
            document.getElementById("first").innerHTML = '';
        }
        else {
            $("#first").css("background-image","none");
            document.getElementById("first").innerHTML = '<iframe style="padding: 0px; margin: 0px; width: 100%; height: 100%;" src="https://www.better-planet.org/messenger/register.php"></iframe>';
        }
    }); 
</script>
    
</html>
