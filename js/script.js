
		let joueur="white";
	$(window).ready(function(){
	

			if (joueur=="white") {
				$( function() {
		$( ".black" ).draggable( "disable" );
		$( ".white" ).draggable( "enable" );			
				});
		
	}
	else
	{
			$( function() {
		$( ".white" ).draggable( "disable" );
		$( ".black" ).draggable( "enable" );
	});
	} 
	});



$( function() {
    $( "img" ).draggable({ 
    	revert: "invalid",
    	start: function( event, ui ) {
    		let source=document.getElementById(ui.helper.attr('id')).parentNode;
    		
    		findMove(ui.helper.attr('id'));
    		console.log(ui.helper.attr('class'));
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
		console.log(joueur);

if(joueur=='black'){
		switch(typeOfPiece){
			case 'pion':
				// chercher les cases possible à y dropper le pion  						
					if($("#"+(parseInt(parentCaseL,10)+1)+'-'+parentCaseC).html()==""){

				$("#"+(parseInt(parentCaseL,10)+1)+'-'+parentCaseC).droppable({
						accept:'#'+pieceId,
						drop: function( event, ui ) {
		      	  let draggableItem=document.getElementById(ui.draggable.attr("id"))
		    	    draggableItem.style.top="";
		        	draggableItem.style.left="";
		    			ui.draggable.detach().appendTo($(this));
		    			initialize();
      			}
				});
				}
//DropEnd
		}
}

if(joueur=='white'){
		switch(typeOfPiece){
			case 'pion':
				if($("#"+(parseInt(parentCaseL,10)-1)+'-'+parentCaseC).html()==""){				
				$("#"+(parseInt(parentCaseL,10)-1)+'-'+parentCaseC).droppable({
						accept:"#"+pieceId,
						drop: function( event, ui ) {
		      	  let draggableItem=document.getElementById(ui.draggable.attr("id"))
		    	    draggableItem.style.top="";
		        	draggableItem.style.left="";
		    			ui.draggable.detach().appendTo($(this));
		    			initialize();
		    			joueur="black";
      			}
				});
				}
				else if('hello'){

				}								
				attaque("white","pion",[parentCaseL,parentCaseC],pieceId);
		}

}	
}


function valideCase(){}	

function initialize(){

	$("td").droppable({ accept: ""});

}

function attaque(joueur,type,position,pieceId){
	let l=parseInt(position[0],10);
	let c=parseInt(position[1],10);
	
	if(joueur=="white"){

		if (type=="pion") {
		
			if( ($("#"+(l-1)+"-"+(c-1)).children().attr('id'))!=undefined){

					let e=$("#"+(l-1)+"-"+(c-1)).children().attr('id');					
		
						if(e.split("-")[1]=="black"){


								console.log('gauche');
								$("#"+(l-1)+"-"+(c-1)).droppable({
											accept:'#'+pieceId,
											drop: function( event, ui ) {
							      	  let draggableItem=document.getElementById(ui.draggable.attr("id"));
							    	    draggableItem.style.top="";
							        	draggableItem.style.left="";
							    			ui.draggable.detach().appendTo($(this));
							    			console.log($(this).find("img:first-child"));
							    			$("#tresorWhite").append($(this).find("img:first-child"));
							    			// initialiser les case droppable;
							    			initialize();						      		
					      			}
									});

						}
			}
			if( ($("#"+(l-1)+"-"+(c+1)).children().attr('id'))!=undefined){

					let e=$("#"+(l-1)+"-"+(c+1)).children().attr('id');					
		
						if(e.split("-")[1]=="black"){

								console.log('droite');
								$("#"+(l-1)+"-"+(c+1)).droppable({
											accept:'#'+pieceId,
											drop: function( event, ui ) {
							      	  let draggableItem=document.getElementById(ui.draggable.attr("id"));
							    	    draggableItem.style.top="";
							        	draggableItem.style.left="";
							    			ui.draggable.detach().appendTo($(this));
							    			console.log($(this).find("img:first-child"));
							    			$("#tresorWhite").append($(this).find("img:first-child"));
							    			// initialiser les case droppable;
							    			initialize();					      		
					      			}
									});

						}
			}
		
				// if(document.getElementById((l-1)+"-"+(c-1)))
		}
	}
}


function quiJou(){
	if (joueur=="white") {
		$( ".black" ).droppable( "disable" );
		$( ".white" ).droppable( "enable" );
	}
	else
	{
		$( ".white" ).droppable( "disable" );
		$( ".black" ).droppable( "enable" );
	}
}