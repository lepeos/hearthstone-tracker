var numberOfCards = 5;

var hand = [];
var deck = [];


var card1 = "pearse";
var card2 = "sarah";
var card3 = "table";
var card4 = "chair";
var card5 = "remote";
var card6 = "sarah";

deck.push(card1, card2, card3, card4, card5, card6);


function probability(cardName)
{

	//To find the probabiltity of drawing a card must first search deck for known instances and return the value
	// of how many remain. Divide that by the number of cards remaining in the deck.
	if(deck.length > 0)
		{
			return searchDeck(cardName) / deck.length;
		}

	else
	{
		console.log("no cards remain");
	}


}

/* function - will need to take a name as a parameter and search through the array using the searchCard function pulling it from it
				  and decreasing the total amount of cards in the array.
	*/


function searchDeck(cardName)
{
var instances = 0;

	for(var i = 0; i < deck.length; i++)
	{
		if(deck[i] === cardName)
			{
				console.log("Card is at position " + i + " and its value is " + deck[i]);
				instances++;
			}
		else
			{
			console.log("It ain't there");
			}
		
	}
	return instances;
}








//Each card will be an object with a name attribute, numberInDeck attribute, and a cardArt attribute. As the app grows it could include 'related cards';

/*Sample Card onject/*


/*

	Card = {
	
		name: "Azure Drake",
		numberInDeck: 2,
		cardArt: 



	}

*/

/* searchCards function - will need to sift through array, find the card by it's name and removing one copy of it. There may be multiple copies.
						  maximum will be two.
	*/

function search(cardValue)
{
	for(var i = 0; i < deck.length; i++)
	{
		if(deck[i] === cardValue)
			{
				console.log("Search is at position " + i + " and its value is " + deck[i]);
				deck.splice(i, 1); //removes the value from the array
				break;
			}
		else
			{
			console.log("It ain't there");
			}	
	}

}


//Basic Draw, will pull a card at random from the deck and place it in your hand.

function draw()
	{

		if(deck.length > 0)
		{

			var randomDraw = Math.floor(Math.random() * deck.length);

			var card = deck.splice(randomDraw, 1).toString();
			hand.push(card);
			console.log("You drew a card");
			console.log("Your cards in hand are " + cardsInHand() + ",  ");
			return;
		}
		else
		{
			console.log("No cards left in deck");
			console.log("Your cards in hand are " + cardsInHand());
		}
	}

function cardsInHand()
	{
		return hand;
	}




