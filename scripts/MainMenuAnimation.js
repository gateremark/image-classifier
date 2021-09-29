var mainAimationFinished = false;
var showTutorial = false;
var $mainContainer_video;


$(document).ready(function()
{
    var $introContainer = $('#introContainer');
    $mainContainer_video = $('#mainContainer-grid-video');
    var $beginButton = $('#begin');
    var $introImageActive = $('#introImageActive');


    setTimeout(function(){
     $introContainer.fadeIn(4000);
    },1000)

    $beginButton.on('click', function(){
        $introImageActive.fadeIn(3000,function(){
            $introContainer.fadeOut(2000, function(){
                $mainContainer_video.css('display', 'grid');
                $mainContainer_video.fadeIn(3000, function(){ mainAimationFinished = true;});
            });
        });
    })

})


var waitingForEndAnimation = setInterval(function(){
    console.log(mainAimationFinished);
    if (mainAimationFinished)
    {
        $mainContainer_video.css('visibility', 'visible');
        setTimeout(function(){
            $('.camera-video').css('visibility','visible').hide().fadeIn(500,function(){
                $('.class1-video').css('visibility','visible').hide().fadeIn(800,function(){
                    $('.class2-video').css('visibility','visible').hide().fadeIn(800,function(){
                        $('.class3-video').css('visibility','visible').hide().fadeIn(800,function(){
                           showTutorial = true;
                        });
                    });
                });
            });
        
        },1000);
        clearInterval(waitingForEndAnimation);
       
    }
},1000);
