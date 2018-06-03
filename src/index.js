import "./scss/main.scss";
import axios from 'axios';

const getCardsUrl = 'https://tarot.howlcode.com/cards';
const getShuffledCardsUrl = 'https://tarot.howlcode.com/spreads/shuffled';
const getRandomCardUrl = 'https://tarot.howlcode.com/spreads/random_card';
const getThreeCardsUrl = 'https://tarot.howlcode.com/spreads/three_cards';
const getCelticCrossUrl = 'https://tarot.howlcode.com/spreads/celtic_cross';

// const getCardsUrl = 'http://localhost:3000/cards';
// const getShuffledCardsUrl = 'http://localhost:3000/spreads/shuffled';
// const getRandomCardUrl = 'http://localhost:3000/spreads/random_card';
// const getThreeCardsUrl = 'http://localhost:3000/spreads/three_cards';
// const getCelticCrossUrl = 'http://localhost:3000/spreads/celtic_cross';

const cardContainer = document.querySelector('.cards');
const menuContainer = document.querySelector('.menu-container');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');

window.onload = function () {
	document.body.classList.remove('fade-out');
	showMenu();
}


window.randAlign = function () {
  let imgAlign = ['card-img-reverse', 'card-img'];
  return imgAlign[Math.floor(Math.random()*imgAlign.length)];
}


window.renderCards = function () {
	axios.get(getCardsUrl)
		.then(function (response) {
			const cards = response.data;
			menuContainer.style.background = 'none';
			cardContainer.innerHTML = `
		    <ul class="main-card-grid">
		        ${cards.map(card => `
		        	<li><img src=${card.face_image_url} class="card-img" onclick="openModal('${card.name}', '${card.short_meaning}', '${card.full_meaning}', '${card.up}', '${card.reverse}')"></img></li>
		        	`).join('')}
		    </ul>
		`;
	});
}

window.drawRandom = function () {
	axios.get(getRandomCardUrl)
	  .then(function (response) {
			const randomCard = response.data[0];
			menuContainer.style.background = 'none';
			cardContainer.innerHTML = `
				<ul class="single-card">
					<li><img src=${randomCard.face_image_url} class=${randAlign()} onclick="openModal('${randomCard.name}', '${randomCard.short_meaning}', '${randomCard.full_meaning}', '${randomCard.up}', '${randomCard.reverse}')"></li>
				<ul>
			`;
	});
}

window.drawThree = function () {
	axios.get(getThreeCardsUrl)
		.then(function (response) {
			const threeCards = response.data;
			let cardOne = threeCards[0];
			let cardTwo = threeCards[1];
			let cardThree = threeCards[2];
			menuContainer.style.background = 'none';
			cardContainer.innerHTML = `
			<ul class="spread-card-grid">
				<li>
					<img src=${cardOne.face_image_url} class=${randAlign()} onclick="openModal('${cardOne.name}', '${cardOne.short_meaning}', '${cardOne.full_meaning}', '${cardOne.up}', '${cardOne.reverse}')"></img>
					<p class="card-position">Past</p>
          <p class="card-position-info">The Past position in the reading refers to recent events and challenges that just took place, things that lead up to the present situation, and your role in them.</p>
				</li>
				<li>
					<img src=${cardTwo.face_image_url} class=${randAlign()} onclick="openModal('${cardTwo.name}', '${cardTwo.short_meaning}', '${cardTwo.full_meaning}', '${cardTwo.up}', '${cardTwo.reverse}')"></img>
					<p class="card-position">Present</p>
          <p class="card-position-info">The Present position in the reading represents what is happening right now. Typically, this is what triggers you to seek out a reading. This card can often help you to understand what steps to take next.</p>
				</li>
				<li>
					<img src=${cardThree.face_image_url} class=${randAlign()} onclick="openModal('${cardThree.name}', '${cardThree.short_meaning}', '${cardThree.full_meaning}', '${cardThree.up}', '${cardThree.reverse}')"></img>
					<p class="card-position">Future</p>
          <p class="card-position-info">The Future position in the reading describes what is just around the corner. It’s an official “heads up” about where the situation is heading and how you may navigate through it towards the best possible outcome.</p>	
				</li>
			</ul>
			`
		});
}

window.celticCross = function () {
	axios.get(getCelticCrossUrl)
		.then(function (response) {
			const celticCrossCards = response.data;
			let cardOne = celticCrossCards[0];
			let cardTwo = celticCrossCards[1];
			let cardThree = celticCrossCards[2];
			let cardFour = celticCrossCards[3];
			let cardFive = celticCrossCards[4];
			let cardSix = celticCrossCards[5];
			let cardSeven = celticCrossCards[6];
			let cardEight = celticCrossCards[7];
			let cardNine = celticCrossCards[8];
			let cardTen = celticCrossCards[9];
			menuContainer.style.background = 'none';
			cardContainer.innerHTML = `
			<ul class="spread-card-grid">
				<li>
					<img src=${cardOne.face_image_url} class=${randAlign()} onclick="openModal('${cardOne.name}', '${cardOne.short_meaning}', '${cardOne.full_meaning}', '${cardOne.up}', '${cardOne.reverse}')"></img>
					<p class="card-position">1. The Present</p>
					<p class="card-position-info">Where your life is at now.</p>
				</li>
				<li>
					<img src=${cardTwo.face_image_url} class=${randAlign()} onclick="openModal('${cardTwo.name}', '${cardTwo.short_meaning}', '${cardTwo.full_meaning}', '${cardTwo.up}', '${cardTwo.reverse}')"></img>
					<p class="card-position">2. Immediate Challenge</p>
          <p class="card-position-info">The immediate challenge facing the querent. You will often pull a difficult card here, which will indicate an obstacle that must be overcome. When you pull a "good" card here, examine it carefully because it will still represent a challenge.</p>
				</li>
				<li>
					<img src=${cardThree.face_image_url} class=${randAlign()} onclick="openModal('${cardThree.name}', '${cardThree.short_meaning}', '${cardThree.full_meaning}', '${cardThree.up}', '${cardThree.reverse}')"></img>
					<p class="card-position">3. The Distant Past</p>
          <p class="card-position-info">Distant past, foundation. This card should indicate the root of the subject matter of the question</p>	
				</li>
				<li>
					<img src=${cardFour.face_image_url} class=${randAlign()} onclick="openModal('${cardFour.name}', '${cardFour.short_meaning}', '${cardFour.full_meaning}', '${cardFour.up}', '${cardFour.reverse}')"></img>
					<p class="card-position">4. Recent Past</p>
          <p class="card-position-info">More recent past, including events. This will indicate events taking place, not necessarily directly connected to the question. For example, if a love affair going wrong Card 3 would show the root of why it is going wrong, whereas Card 4 will show something that recently happened to reflect this. You could see this as a "check comment" card - a way of seeing that the reading is sound.</p>	
				</li>
				<li>
					<img src=${cardFive.face_image_url} class=${randAlign()} onclick="openModal('${cardFive.name}', '${cardFive.short_meaning}', '${cardFive.full_meaning}', '${cardFive.up}', '${cardFive.reverse}')"></img>
					<p class="card-position">5. Best Outcome</p>
          <p class="card-position-info">The best that can be achieved. This is directly related to the question. Note that this may not necessarily gel against Card 10 - it depends whether you are able to get the best. However, a negative card here probably means that it is worth cutting your losses rather than putting any more effort into the situation.</p>	
				</li>
				<li>
					<img src=${cardSix.face_image_url} class=${randAlign()} onclick="openModal('${cardSix.name}', '${cardSix.short_meaning}', '${cardSix.full_meaning}', '${cardSix.up}', '${cardSix.reverse}')"></img>
					<p class="card-position">6. Immediate Future</p>
          <p class="card-position-info">Immediate Future. This indicates events in the next few days or week(s). This reading does not cover months.</p>	
				</li>
				<li>
					<img src=${cardSeven.face_image_url} class=${randAlign()} onclick="openModal('${cardSeven.name}', '${cardSeven.short_meaning}', '${cardSeven.full_meaning}', '${cardSeven.up}', '${cardSeven.reverse}')"></img>
					<p class="card-position">7. Factors Affecting the Situation</p>
          <p class="card-position-info">Factors or inner feelings affecting the situation. Compare this against Card 1 in order to understand underlying forces/trends. If there is conflict between them this tends to indicate that the querent is going in the wrong direction.</p>	
				</li>
				<li>
					<img src=${cardEight.face_image_url} class=${randAlign()} onclick="openModal('${cardEight.name}', '${cardEight.short_meaning}', '${cardEight.full_meaning}', '${cardEight.up}', '${cardEight.reverse}')"></img>
					<p class="card-position">8. External Influences</p>
          <p class="card-position-info">External influences. People, energies or events which will affect the outcome of the question and are beyond the querent's control.</p>	
				</li>
				<li>
					<img src=${cardNine.face_image_url} class=${randAlign()} onclick="openModal('${cardNine.name}', '${cardNine.short_meaning}', '${cardNine.full_meaning}', '${cardNine.up}', '${cardNine.reverse}')"></img>
					<p class="card-position">9. Hopes and Fears</p>
          <p class="card-position-info">Hopes or fears around the situation. This may produce a card that confuses us badly. Always bear in mind that hopes and fears are closely intertwined, therefore that which we hope for may also be that which we fear, and so may fail to happen. Sometimes it is useful to draw a second card for clarification after the reading has been laid, and to read the two together.</p>	
				</li>
				<li>
					<img src=${cardTen.face_image_url} class=${randAlign()} onclick="openModal('${cardTen.name}', '${cardTen.short_meaning}', '${cardTen.full_meaning}', '${cardTen.up}', '${cardTen.reverse}')"></img>
					<p class="card-position">10. Final Outcome</p>
          <p class="card-position-info">This is a fairly self explanatory card. However it is worth saying that if the card comes up somewhat ambiguous, once again it may be worth drawing three extra cards to clarify. These should be interpreted through the lens of Card 10. So if the card drawn is the Tower and we draw the Ace of Cups, Princess of Cups and Four of Cups in a reading about a relationship, the Tower would indicate that it is time to move on. The Ace of Cup suggests that a new relationship is promised with better things ahead. The Princess of Cups brings new love (and possibly pregnancy). The Four of Cups shows deep levels of contentment and happiness, and many options for progress.</p>	
				</li>
			</ul>
			`
		});
}


window.showMenu = function () {
	menuContainer.style.height = '500px';
	menuContainer.style.backgroundSize = '50% 100%';
	menuContainer.style.backgroundRepeat = 'no-repeat';
	menuContainer.style.backgroundPosition = 'center';
	menuContainer.style.borderRadius = '50%';
	menuContainer.style.backgroundImage = "url('images/candle.gif')";
	cardContainer.innerHTML = `
	<ul class="menu-list">
		<li class="menu-items"><button class="menu-button" onclick={drawThree()}>Draw 3 Card Spread</button></li>
		<li class="menu-items"><button class="menu-button" onclick={celticCross()}>Celtic Cross Spread</button></li>
		<li class="menu-items"><button class="menu-button" onclick={drawRandom()}>Draw Random Card</button></li>
		<li class="menu-items"><button class="menu-button" onclick={renderCards()}>Browse All Cards</button></li>
	</ul>
	`;
}


window.openModal = function (name, summary, full_meaning, up, reverse) {
	modal.style.display = 'block';
	modalContent.innerHTML = `
		<span class="close" onclick={closeModal()}>&times;</span>
		<h2 class="card-name">${name}</h2>
		<hr />
		<p class="summary"><strong>Summary: </strong>${summary}</p>
		<p class="summary"><strong>Detailed: </strong>${full_meaning}</p>
		<hr />
		<p class="keywords">Upright keywords: ${up}</p>
		<p class="keywords">Reversed keywords: ${reverse}</p>
		`;
}

window.closeModal = function () {
	modal.style.display = 'none';
}

window.openAPIDocs = function () {
  var win = window.open('https://github.com/howlCode/tarot_api', '_blank');
  win.focus();
}