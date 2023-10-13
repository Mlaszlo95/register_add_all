// ==UserScript==
// @name         Add all rights and reset all rights button
// @namespace    https://github.com/Mlaszlo95/register_add_all/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://10.2.20.23/dpdregister/www/user_rights.php?userid=*
// @match        https://10.2.20.38/dpdregister/www/user_rights.php?userid=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://www.github.com/Mlaszlo95/register_add_all/raw/main/all_scripts/reset_add_right_button.js
// ==/UserScript==

(function() {
    'use strict';
    var mainBody = document.getElementsByName('formmain')[0]

    const newDiv = document.createElement("div")
    newDiv.classList.add("sordiv");
    newDiv.setAttribute('id','customFieldDpDIT')
    insertAfter(newDiv,document.querySelectorAll('.sordiv')[2])

    var CustomMenu = document.getElementById('customFieldDpDIT')
    var newButton = addNewButton('customerAddResetButton',"Add all right","5px");
    newButton.addEventListener("click", addAllRankToUserOrRemoveIt)
    newDiv.appendChild(newButton)
    console.log("Add/Reset right button set")
})();

function addNewButton(buttonID,buttonText,margin){
   var newButton = document.createElement("button")
   newButton.setAttribute('type', 'button');
   newButton.setAttribute('id', buttonID);
   newButton.innerHTML = buttonText
   newButton.style.margin = margin


   return newButton
}

function changeTheCheckBoxes(checked){
       for(var i = 1;i<150;i++){
            var element = document.getElementById(i)
            if(!checked && i ==33) continue;
            if(element != null){
                  if(element.getAttribute('class') !='inactive') {
                      var check = element.querySelector('input[type="checkbox"]')
                       check.checked = checked
                }
            }

        }
}

function addAllRankToUserOrRemoveIt(){
   var thisButton = document.getElementById('customerAddResetButton')
   var buttonValue = thisButton.innerHTML

   if(buttonValue == 'Add all right'){
        buttonValue = 'Reset all right'
        changeTheCheckBoxes(true)
   }else{
        buttonValue = 'Add all right'
        changeTheCheckBoxes(false)

   }

   thisButton.innerHTML = buttonValue;
  return false
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
