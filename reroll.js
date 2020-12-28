// Initium rerolling bot

// Enter your charecter name of choice below
var characterName = '';


// Stolen from https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));  
}

async function reroll() {
  if (document.getElementById("banner").innerHTML.match("Aera Inn") != null) {
    doGoto(event, 4676659160547328);
    while (document.getElementById("locationName").innerHTML.match("Aera Inn") == null) { await sleep(100); }
  }
  while (true) {
    if (document.getElementById("banner").innerHTML.match("Spawn a new character") != null) {
    	newCharacterFromUnconscious();
      $(document.getElementsByClassName('popup_confirm_option confirm_yes')).click();
      while (document.getElementById("banner").innerHTML.match("YOU'RE DEAD!") == null) { await sleep(100); }
    }
    deleteAndRecreateCharacter(event, characterName);
    $(document.getElementsByClassName('popup_confirm_option confirm_yes')).click();
    $(document.getElementsByClassName('popup_confirm_option confirm_okay')).click();
    while (document.getElementById("banner").innerHTML.match("Browse nearby stores") == null) { await sleep(100); }
    doGoto(event, 5707702298738688);
    while (document.getElementById("locationName").innerHTML.match("Aera Countryside") == null) { await sleep(100); }
    createCampsite();
    $(document.getElementsByClassName('popup_confirm_option confirm_okay')).click();
    while (document.getElementById("locationName").innerHTML.match("Combat site") == null && document.getElementById("banner").innerHTML.match("Defend") == null) { await sleep(100); }
    if (document.getElementById("locationName").innerHTML.match("Camp:") != null) {
      continue;
    }
    for (i = 0; i < 11; i++) {
      doCombatAttackLeftHand(event);
      closepopupMessage();
      await sleep(1500);
      if (document.getElementById("banner").innerHTML.match("RUN!") == null) {
        break;
      }
    }
    while (document.getElementById("banner").innerHTML.match("RUN!") != null) {
      doCombatEscape();
      await sleep(1000);
    }
    var strength, dexterity, intelligence;
    [strength, dexterity, intelligence] = document.getElementById("newui").innerHTML.match("minitip=\"(.*)<br>")[1].split("/");
    if (strength >= 5.07 && dexterity >= 5.03 && intelligence >= 5.01 && document.getElementById("banner").innerHTML.match("Spawn a new character") == null) {
      alert("High stat roll alt found");
      break;
    } else {
      console.log("Normal alt found");
    }
  }
}

reroll();
