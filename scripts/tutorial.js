
$(document).ready(function(){
    let helpButton = $('#help');
    let modals = $('.modal, .fromFile');
    let prevButton = $('.prevFromFile');
    let nextButton = $('.nextFromFile');
    let currentModal = 1;
    

    hideModals();

    var tutorial = setInterval(function(){
        console.log(showTutorial);
        if (showTutorial == true)
        {
            displayCurrentModal(currentModal);
            clearInterval(tutorial);
        }
    },500);

    var tutorial_video = setInterval(function(){
        if (showVideoTutorial == true)
        {
            showVideoTutorial = false;
            clearInterval(tutorial_video);
        }
    },500);
   

    nextButton.on('click', function(){
        currentModal+=1;
        displayCurrentModal(currentModal);
    })

    prevButton.on('click', function(){
        currentModal-=1;
        displayCurrentModal(currentModal);
     })

     helpButton.on('click', function(){
         currentModal = 1;
         displayCurrentModal(currentModal);
     })

    function displayCurrentModal(current){
        for(var index = 1; index <= modals.length ; index++){
          $('#intro' + index).modal('hide');
        }
        $('#intro' + current).modal('show');
    }

    function hideModals(){
        for(var index = 1; index <= modals.length ; index++){
          $('#intro' + index).modal('hide');
        }
    }


})


