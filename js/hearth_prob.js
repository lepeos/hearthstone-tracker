


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
  $('#container').append('<div class = "box small-6 medium-3 large-2 columns">Name: '+ name + '<br>' + 
  						 ' In Deck: '+ numCardsInDeck +
  						 '<br>' +
  						 'Probabaility of drawing: ' + prob +
  						 '</div>');
  
}

/*$('#container').append(getContainerWidth());
$('#container').append(getBoxSize());
$('#container').append(getContainerWidth());*/
//$('#container').append(findDeckLength());
/*********************************************
                                             */

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
                


