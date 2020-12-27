// Initium rerolling bot

// The bot will automatically hit a troll 11 times, the stats you want for a high roll alt after 11 hits are...
// 5.07/5.03/5.01 

// Occasionally you will kill the troll before the 11 hits go through, you can know if this happened if you are at the...
// combat site after the bot finishes running. If so, just run it again.

// Enter your charecter name of choice below
var characterName = 'Kathryne';

// Stolen from https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  deleteAndRecreateCharacter(event, characterName);
  $(document.getElementsByClassName('popup_confirm_option confirm_yes')).click();
  $(document.getElementsByClassName('popup_confirm_option confirm_okay')).click();
  await sleep(5000);
  doGoto(event, 5707702298738688);
  await sleep(10000);
  createCampsite();
  await sleep(500);
  $(document.getElementsByClassName('popup_confirm_option confirm_okay')).click();
  await sleep(5000);
  for (i = 0; i < 11; i++) {
  	doCombatAttackLeftHand(event);
    await sleep(1500);
  }
}

main();
