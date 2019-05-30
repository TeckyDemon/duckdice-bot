var CONFIG_SPEED=1

function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
function switch_roll(){document.getElementsByClassName('switch-game-btn tutorial-step-threshold')[0].click()}
function make_roll(){document.getElementById('game-submit-button').click()}
function is_win(){return document.getElementsByTagName('td')[7].children[0].className=='amount-icon bet win'}
function get_id(){return document.getElementsByTagName('td')[6].innerHTML}
function reset_bet_amount(){document.getElementsByClassName('button_secondary')[0].click()}
function double_bet_amount(){document.getElementsByClassName('button_secondary')[2].click()}

document.getElementsByClassName('tabs__labels')[0].children[1].click()
reset_bet_amount()
while(true){
	last=get_id()
	if(Math.round(Math.random())){switch_roll()}
	make_roll()
	while(last==get_id()){await sleep(1000/CONFIG_SPEED)}
	if(is_win()){reset_bet_amount()}
	else{double_bet_amount()}
}
