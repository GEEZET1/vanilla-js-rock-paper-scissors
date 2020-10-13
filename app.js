function game() {
	const playerOptions = document.querySelectorAll('button');
	const computerOptions = ['rock', 'paper', 'scissors'];
	const winnerParagraph = document.getElementById('winnerParagraph');

	var playerScore = 0;
	var computerScore = 0;

	playerOptions.forEach((playerOption) => {
		playerOption.addEventListener('click', () => {
			console.log('player:', playerOption.textContent);
			playerChoice = playerOption.textContent;
			computerChoice = computerOptions[Math.floor(Math.random() * 3)];
			console.log('computer:', computerChoice);
			checkWinner(playerChoice, computerChoice);
		});
	});

	function checkWinner(playerChoice, computerChoice) {
		//draws
		if (
			(playerChoice == 'Rock' && computerChoice == 'rock') ||
			(playerChoice == 'Paper' && computerChoice == 'paper') ||
			(playerChoice == 'Scissors' && computerChoice == 'scissors')
		) {
			console.log('draw');
			addScore('draw');
		}

		//player wins
		else if (
			(playerChoice == 'Rock' && computerChoice == 'scissors') ||
			(playerChoice == 'Paper' && computerChoice == 'rock') ||
			(playerChoice == 'Scissors' && computerChoice == 'paper')
		) {
			console.log('player wins');
			addScore('player', (playerScore += 1), computerScore);
		}

		//computer wins
		else if (
			(playerChoice == 'Rock' && computerChoice == 'paper') ||
			(playerChoice == 'Paper' && computerChoice == 'scissors') ||
			(playerChoice == 'Scissors' && computerChoice == 'rock')
		) {
			console.log('computer wins');
			addScore('computer', playerScore, (computerScore += 1));
		}
	}

	function addScore(winner, playerScore, computerScore) {
		const playerScoreParagraph = document.getElementById(
			'playerScoreParagraph'
		);
		const computerScoreParagraph = document.getElementById(
			'computerScoreParagraph'
		);

		if (winner == 'player') {
			playerScoreParagraph.innerHTML = `player Score: ${playerScore}`;
			winnerParagraph.style.color = 'green';
		} else if (winner == 'computer') {
			computerScoreParagraph.innerHTML = `computer Score: ${computerScore}`;
			winnerParagraph.style.color = 'red';
		}
		winnerParagraph.innerHTML = `Winner: ${winner}`;

		let againButton =
			'<button type="button" id="again" class="btn btn-primary">Again</button>';

		if (playerScore === 5) {
			winnerParagraph.innerHTML = `player WON <br> ${againButton}`;
			document
				.getElementById('again')
				.addEventListener('click', (playerScore, computerScore) => {
					clear(
						playerScore,
						computerScoreParagraph,
						computerScore,
						computerScoreParagraph
					);
				});
		}
	}

	function clear(
		playerScore,
		playerScoreParagraph,
		computerScore,
		computerScoreParagraph
	) {
		playerScore = 0;
		computerScore = 0;
		playerScoreParagraph.innerHTML = `player Score: ${playerScore}`;
		computerScoreParagraph.innerHTML = `player Score: ${computerScore}`;
		winnerParagraph.innerHTML = '';
	}
}
game();
