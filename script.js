var playerTurn = ("O");
// var nums = ['one', 'two']
// var moves = [[null,null,null,null,null,null,null,null,null]];


function init () {
	alert("Hi!");
	var cells = document.getElementsByClassName("cell");
	for(var i in cells) {
		cells[i].onclick = takeTurn;
	}

}


function takeTurn() {
			
			cell = this.id[4];
			alert("testing testing" + cell);
			playerTurn = (playerTurn == "X"?"O":"X");
			this.innerHTML = playerTurn;



		}