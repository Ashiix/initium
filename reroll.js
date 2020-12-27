// Initium rerolling bot

// The bot will automatically hit a troll 11 times, the stats you want for a high roll alt after 11 hits are...
// 5.07/5.03/5.01 

// Occasionally you will kill the troll before the 11 hits go through, you can know if this happened if you are at the...
// combat site after the bot finishes running. If so, just run it again.

// If your ping is absolutely awful, set the following to 'true' if not, set it to 'false'
var highPing = false

// Enter your charecter name of choice below
var charecterName = ''



if (highPing = true) {
  var pingMulti = 2
}
else {
  var pingMulti = 1
}
var attackTimes = 0
deleteAndRecreateCharacter(event, charecterName)
$(document.getElementsByClassName('popup_confirm_option confirm_yes')).click()
$(document.getElementsByClassName('popup_confirm_option confirm_okay')).click()
setTimeout(function () {
  doGoto(event, 5707702298738688)
  setTimeout(function () {
    createCampsite()
    $(document.getElementsByClassName('popup_confirm_option confirm_okay')).click()
    setTimeout(function () {
      doCombatAttackLeftHand(event)
      setInterval(function () {
        if (attackTimes < 10) {
          doCombatAttackLeftHand(event);
          attackTimes = attackTimes + 1
        }
        else {
          clearInterval()
          setTimeout(function () {
            doCombatEscape(event)
            setTimeout(function () {
              doCombatEscape(event) 
              setTimeout(function () {
                doCombatEscape(event)         
                location.reload();
              }, 2000*pingMulti);
            }, 2000*pingMulti);
          }, 2000*pingMulti);
        }
      }, 1500*pingMulti);
    }, 5000*pingMulti);
  }, 10000*pingMulti);
}, 5000*pingMulti);
