// Initium rerolling bot

// Enter your charecter name of choice below
var characterName = 'Kathryne';


// Stolen from https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function reroll() {
  while(true) {
    deleteAndRecreateCharacter(event, characterName);
    $(document.getElementsByClassName('popup_confirm_option confirm_yes')).click();
    $(document.getElementsByClassName('popup_confirm_option confirm_okay')).click();
    await sleep(5000);
    doGoto(event, 5707702298738688);
    await sleep(10000);
    createCampsite();
    $(document.getElementsByClassName('popup_confirm_option confirm_okay')).click();
    await sleep(5000);
    for (i = 0; i < 11; i++) {
      doCombatAttackLeftHand(event);
      await sleep(100);
      closepopupMessage();
      await sleep(1500);
    }
    var [strength, dexterity, intelligence] = document.getElementById("newui").innerHTML.match("minitip=\"(.*)<br>")[1].split("/");
    if (strength >= 5.07 && dexterity >= 5.03 && intelligence >= 5.01) {
      alert("High stat roll alt found");
      break;
    } else {
      console.log("Normal alt found");
    }
  }
}

reroll();
