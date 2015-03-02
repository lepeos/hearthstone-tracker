
//PROTOTYPE CODE//

// var numberOfCards = 5;

// var hand = [];
// var deck = [];


// var card1 = "pearse";
// var card2 = "sarah";
// var card3 = "table";
// var card4 = "chair";
// var card5 = "remote";
// var card6 = "sarah";

// deck.push(card1, card2, card3, card4, card5, card6);


// function probability(cardName)
// {

// 	//To find the probabiltity of drawing a card must first search deck for known instances and return the value
// 	// of how many remain. Divide that by the number of cards remaining in the deck.
// 	if(deck.length > 0)
// 		{
// 			return searchDeck(cardName) / deck.length;
// 		}

// 	else
// 	{
// 		console.log("no cards remain");
// 	}


// }

// /* function - will need to take a name as a parameter and search through the array using the searchCard function pulling it from it
// 				  and decreasing the total amount of cards in the array.
// 	*/


// function searchDeck(cardName)
// {
// var instances = 0;

// 	for(var i = 0; i < deck.length; i++)
// 	{
// 		if(deck[i] === cardName)
// 			{
// 				console.log("Card is at position " + i + " and its value is " + deck[i]);
// 				instances++;
// 			}
// 		else
// 			{
// 			console.log("It ain't there");
// 			}
		
// 	}
// 	return instances;
// }








// //Each card will be an object with a name attribute, numberInDeck attribute, and a cardArt attribute. As the app grows it could include 'related cards';

// /*Sample Card onject/*


// /*

// 	Card = {
	
// 		name: "Azure Drake",
// 		numberInDeck: 2,
// 		cardArt: 



// 	}

// */

// /* searchCards function - will need to sift through array, find the card by it's name and removing one copy of it. There may be multiple copies.
// 						  maximum will be two.
// 	*/

// function search(cardValue)
// {
// 	for(var i = 0; i < deck.length; i++)
// 	{
// 		if(deck[i] === cardValue)
// 			{
// 				console.log("Search is at position " + i + " and its value is " + deck[i]);
// 				deck.splice(i, 1); //removes the value from the array
// 				break;
// 			}
// 		else
// 			{
// 			console.log("It ain't there");
// 			}	
// 	}

// }


// //Basic Draw, will pull a card at random from the deck and place it in your hand.

// function draw()
// 	{

// 		if(deck.length > 0)
// 		{

// 			var randomDraw = Math.floor(Math.random() * deck.length);

// 			var card = deck.splice(randomDraw, 1).toString();
// 			hand.push(card);
// 			console.log("You drew a card");
// 			console.log("Your cards in hand are " + cardsInHand() + ",  ");
// 			return;
// 		}
// 		else
// 		{
// 			console.log("No cards left in deck");
// 			console.log("Your cards in hand are " + cardsInHand());
// 		}
// 	}

// function cardsInHand()
// 	{
// 		return hand;
// 	}












var cardsInHand = [];
var graveyard = [];

/*
*Card Object Constructor
*/

function Card (name, manaCost, numberInDeck)
{

this.name = name;
this.manaCost = manaCost;
this.numberInDeck = numberInDeck;  

  
 /*
  Functions to get and set the name of the Card
 */
  
this.setName =  function (name)
{
      this.name = name;
}

this.getName = function ()
{
      return this.name;
}
/*
  Functions to get and set the mana of the Card
*/

this.setMana = function (manaCost)
{
      this.manaCost = manaCost
}

this.getManaCost = function ()
{
      return this.manaCost
}

/*
Get and set number of cars in deck
*/

this.getNumberCardsInDeck = function()
{
  return this.numberInDeck;
}


this.setNumberCardsInDeck = function(setNumber)
{
  this.numberInDeck = setNumber;
}


/*
  Function that worksout the probability of drawing a card
*/

this.workout = function () 
  {
    
      if(findDeckLength() > 0)
    {
      numberOfCards = this.numberInDeck;
      var total = Math.floor(( numberOfCards/ findDeckLength()) * 100);
      return " You have " +  total + "% chance";
     }
    else
    	{
    		return "No Cards left in deck"
    	}
  }
}


/*
* This will find the length of the deck using the numberInDeck attribute of each card object
*/
function findDeckLength ()
{

var total = 0;
for(var i = 0; i < deck.length; i++)
   {
        total += deck[i].numberInDeck;
   }
  return total;
}

/**
*This is the list of test card objects each with a name and value;
*/

var azure = new Card("Azure Drake", 5, 2);
var rag = new Card("Ragnaros", 8, 1);
var defender= new Card("Defender of Argus", 4, 2);
var raptor= new Card("Bloodfen Raptor", 2, 2);
var thalnos = new Card("Bloodmage Thalnos", 2, 1);
var frostbolt = new Card("Frostbolt", 2, 2);
var sludge = new Card("Sludge Belcher", 5, 2);
var shield = new Card("Shieldmaiden", 5, 2);
var alex = new Card("Alexstraza", 9, 1);
var gromash = new Card("Gromash", 8, 1);
var shredder = new Card("Shredder", 4, 2);
var backstab = new Card("Backstab", 0, 2);
var powerword = new Card("Powerword Shield", 1, 2);
var fireball = new Card("Fireball", 4, 2);
var earthen = new Card("Earthenring Farseer", 3, 2);
var sneeds = new Card("Sneed's Shredder", 8, 1);
var thoughtsteal = new Card("Thoughtsteal", 3, 2);
var wild = new Card("Wild Growth", 2, 1);





/*azure.setNumberCardsInDeck(2);
*/

var deck = [azure, rag, defender, raptor, thalnos, frostbolt, sludge, shield, alex, gromash, shredder, backstab, powerword, fireball, earthen, sneeds, thoughtsteal, wild];


/**
* The basic working oout function that determines the probabality of drawing a card. Will be updated with name search
*/





/**
*The Draw function - should remove an object from the deck array and place it in the hand or grave array
*/


function draw(cardName) 
{
      if(deck.length > 0)
	{
	      var card = deck[0].name;
	      deck[0].name.splice[0, 1]		
	      cardsInHand.push(card);
	      
	      return "You drew a card, there are " + deck.length + " cards left."
	}

	return "No cards left, you may not draw";
}



/**
* Test code for potential to work out the odds when you choose to mulligan-  must fix draw function first!
*/

// CURRENTLY NOT WORKING

/*function drawOpeningHand()
{
var goingFirst = [true, false][Math.round(Math.random())]

      if(goingFirst === true)
            {
	for(var i = 0; i < 3; i++)
	{
	      draw();      
	}

            } else {
	for(var i = 0; i < 4; i++)
	{
	      draw();      
	}
	
	}
	console.log(cardsInHand + " cards in hand and " +  totalNumberOfCards + " cards left in deck.")
}
*/


/**
* Test code  - creating an array full of variables
*/


// CURRENTLY NOT WORKING
/*function createDeck(numberOfCardsInDeck)
{
	for(var i = 0; i < numberOfCardsInDeck; i++)
	      {
		return deck.push("Card " + i);
	      }
}*/



//Begin redone code.//


/**
* This allows you to search the deck for the number of cards with a particular mana cost.
*/

function getByManaCost(manacost)
{

var search = [];
	
      for(var i = 0; i < deck.length; i++)
	{
	      if(deck[i].getManaCost() === manacost)
		{
		     search.push(deck[i].getName());
		}
	}
	if (search.length === 0){return 0}
	else {return search}

}


/**
* This function will take an argument and give you the probabaility of drawing cards with a certain mana cost
*/

function probOfManaCostDraw(manaCost)
{
      if (deck.length > 0)
    {
      var numCards = getByManaCost(manaCost).length;

      var total = Math.floor(( numCards/deck.length) * 100);

      if(isNaN(total)){return "No cards with " + manaCost + " mana";}
      else{return " You have " +  total + "% chance of drawing a " + manaCost + " mana cost card.";}
     }
    else{return "No Cards left in deck";}
}

/**
* This function will show all the cards remaining in the deck
*/

function cardsInDeck()
{
      for(var i = 0; i < deck.length; i ++)
	{
	      console.log(deck[i].name)
	}
	return;
}

/**
* This function will show all the cards in the hand
*/

function showCardsInHand()
{
      for(var i = 0; i < cardsInHand.length; i ++)
		{
			console.log(cardsInHand[i].name)
		}
	
		return;
}




var number  = deck.length;


/**
DIV CREATOR
*/
for(var i = 0; i < number; i++)
{
  var name = deck[i].name;
  var prob = deck[i].workout();
  var numCardsInDeck = deck[i].getNumberCardsInDeck();
  $('#container').append('<div class = "box">Name: '+ name + '<br>' + 
  						 ' In Deck: '+ numCardsInDeck + 
  						 '<br>' + '<br>' +
  						 'Probabaility of drawing: ' + prob +
  						 '</div>');
  
}

/*$('#container').append(getContainerWidth());
$('#container').append(getBoxSize());
$('#container').append(getContainerWidth());*/
//$('#container').append(findDeckLength());
/*********************************************
                                             */


/*
This will find the number of items to be displayed and if it is over a certain mount it will expand the width
*/
if(number <= 15) 
  {
   setContainerWidth('70%');
    setBoxWidth('18%');
  }

else if(number > 20 && number < 25)
  {
    setContainerWidth('75%');
    setBoxWidth('16%');
  }
else
  {
    setContainerWidth('90%');
    setBoxWidth('15%');
  }





/**
Getting the container's current width;
*/
function getContainerWidth()
{
  var width = $('#container').css("width");
  return width;
}
/**
Setting the container's width;
*/

function setContainerWidth(width)
{
  var set = $('#container').css("width", width);
}


/*The Boxes size*/

/**
Getting the box's current width;
*/
function getBoxSize()
{
  var width = $('.box').css("width");
  return width;
}

/**
Setting the box's width;
*/
function setBoxWidth(width)
{
  var setWidth = $('.box').css("width", width);
  var setHeight = $('.box').css("height", width);
}       
                












