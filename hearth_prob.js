var numberOfCards = 5;


var emptyDeck = [];


var card1 = "pearse";
var card2 = "sarah";
var card3 = "table";
var card4 = "chair";
var card5 = "remote";

emptyDeck.push(card1, card2, card3, card4, card5);


function probability()
{
	if(emptyDeck.length > 0)
		{
		var result = 1/emptyDeck.length;
		//emptyDeck.pop();
		return result;
		}

	else
	{
		console.log("no cards remain");
	}


}


/* drawCard function - will need to take a name as a parameter and search through the array using the searchCard function pulling it from it
				  and decreasing the total amount of cards in the array.
	*/

/* searchCards function - will need to sift through array, find the card by it's name and removing one copy of it. There may be multiple copies.
						  maximum will be two.
	/*


Each card will be an object with a name attribute, numberInDeck attribute, and a cardArt attribute. As the app grows it could include 'related cards';

/*Sample Card onject/*


/*

	Card = {
	
		name: "Azure Drake",
		numberInDeck: 2,
		cardArt: 



	}

*/

function search(cardValue)
{
	for(var i = 0; i < emptyDeck.length; i++)
	{
		if(emptyDeck[i] === cardValue)
			{
				console.log("Search is at position " + i + " and its value is " + emptyDeck[i]);
				emptyDeck.splice(i, 1); //removes the value from the arrau
				break;
			}
		else
			{
			console.log("It ain't there");
			}	
	}

}




