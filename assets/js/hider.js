$(document).ready(function() {

    $('#ahlater').click(function() {
        $('#ahman').fadeTo(500, 0, function(){ $(this).hide(500) });
    });
  
    $('#ahnow').click(function() {
        $('#ahman').show(500);
        $('#ahman').fadeTo(500, 1);
        
    }); 
    
    $('#ah')
    .on('mouseenter', function(){
        var div = $('#ah');
        div.stop(true, true).animate({ 
            
            width: "+=50",
            height: "+=50"
        }, 'fast');
    })
    .on('mouseleave', function(){
        var div = $('#ah');
        div.stop(true, true).animate({ 
           
            width: "-=50",
            height: "-=50"
        }, 'fast');
    })
    



    
    
}); //end ready

