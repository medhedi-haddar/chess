
	$(window).ready(function(){
		console.log('ready');
	});


$( function() {
    $( "img" ).draggable({ 
    	revert: "invalid",
    	start: function( event, ui ) {
    		let source=document.getElementById(ui.helper.attr('id')).parentNode;
    		
    		findMove(ui.helper.attr('id'));
    	},
    	stop: function( event, ui ) {
    		console.log('out');
    	}
  });

   
});

function findMove(pieceId){
	
	// id de case source [L-C] 
		let parentId=document.getElementById(pieceId).parentNode.id;
	//cordeonnees du case source
		let parentCaseL=(parentId.split('-'))[0];
		let parentCaseC=(parentId.split('-'))[1];
	// type de piece
		let typeOfPiece=(pieceId.split('-'))[0];
		let joueur=(pieceId.split('-'))[1];
		console.log(parentCaseL+" // "+parentCaseC);
		console.log(joueur);

if(joueur=='black'){
		switch(typeOfPiece){
			case 'pion':

				// chercher les cases possible à y dropper le pion  
				// $("#"+(parseInt(parentCaseL,10)+1)+'-'+parentCaseC).css("border-color","red");							
					if($("#"+(parseInt(parentCaseL,10)+1)+'-'+parentCaseC).html()==""){

				$("#"+(parseInt(parentCaseL,10)+1)+'-'+parentCaseC).droppable({
						accept:'#'+pieceId,
						drop: function( event, ui ) {
		      	  let draggableItem=document.getElementById(ui.draggable.attr("id"))
		    	    draggableItem.style.top="";
		        	draggableItem.style.left="";
		    			ui.draggable.detach().appendTo($(this));
		    			initialize();
	    			 	// $(this).css("border-color","transparent");
      		
      			}
				});
				}
//DropEnd
		}
}

if(joueur=='white'){
		switch(typeOfPiece){
			case 'pion':
// console.log($("#"+(parseInt(parentCaseL,10)-1)+'-'+parentCaseC).html());
				// $("#"+(parseInt(parentCaseL,10)-1)+'-'+parentCaseC).css("border-color","red");
	
				if($("#"+(parseInt(parentCaseL,10)-1)+'-'+parentCaseC).html()==""){

				$("#"+(parseInt(parentCaseL,10)-1)+'-'+parentCaseC).droppable({
						accept:"#"+pieceId,
						drop: function( event, ui ) {
		      	  let draggableItem=document.getElementById(ui.draggable.attr("id"))
		    	    draggableItem.style.top="";
		        	draggableItem.style.left="";

		    			ui.draggable.detach().appendTo($(this));
		    			initialize();
	    			 	// $(this).css("border-color","inherit");
      			}
				});
				}
				else if('hello'){

				}								
		}
}	
}


function valideCase(){}

	

function initialize(){

 $("td").droppable({ accept: ""});
}

function attaque(){
	console.log("hello");
}