// ==UserScript==
// @name         Register Copy User right button
// @namespace    http://tampermonkey.net/
// @version      1.01
// @description  Ez a script hozzá add két gombot a regiszter felhasználó kezeléséhez. Egy másolás felhasználó hozzáférését és egy beillesztését.
// @author       Megyeri László
// @match        https://10.2.20.23/dpdregister/www/user_rights.php?userid=*
// @match        https://register.dpd.hu/dpdregister/www/user_rights.php?userid=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';
    var AppendElement = document.getElementById('customFieldDpDIT');

    if(typeof AppendElement === "undefined" || AppendElement === null){
          const newDiv = document.createElement("div")
          newDiv.classList.add("sordiv");
          newDiv.setAttribute('id','customFieldDpDIT')
          insertAfter(newDiv,document.querySelectorAll('.sordiv')[2])
    }


    var CustomMenu = document.getElementById('customFieldDpDIT')

    var Copybutton = addNewButton('CopyUserRight','copy user rights',"5px")
    Copybutton.addEventListener("click", CopyUserRightTask)
    CustomMenu.appendChild(Copybutton)

    var Pastebutton = addNewButton('PasteUserRight','paste user rights',"5px")
    Pastebutton.addEventListener("click", PasteUserRightTask)
    CustomMenu.appendChild(Pastebutton)



    console.log("Coppy button set!")


})();

function addNewButton(buttonID,buttonText,margin){
   var newButton = document.createElement("button")
   newButton.setAttribute('type', 'button');
   newButton.setAttribute('id', buttonID);
   newButton.innerHTML = buttonText
   newButton.style.margin = margin


   return newButton
}

function CopyUserRightTask(){
    var rights = getUserRight()
    //gmSet("UserRightForCopyScript", right)
    GM_setValue("UserRightForCopyScript", rights);
    //right.forEach(function(e){console.log(e)});
}

function PasteUserRightTask(){
   var rights = GM_getValue("UserRightForCopyScript");

    setEmptyRights();

   if(typeof rights != "undefined"){
      rights.forEach(function(e){
          var element = document.getElementById(e)

          if(element != null){
              if(element.getAttribute('class') !='inactive') {
                   var check = element.querySelector('input[type="checkbox"]')
                   check.checked = true
              }
          }
      });
   }
}

function setEmptyRights(){
    for(var i = 0 ;i < 150;i++){
       var element = document.getElementById(i)

        if(element != null){
              if(element.getAttribute('class') !='inactive') {
                   var check = element.querySelector('input[type="checkbox"]')
                   check.checked = false
              }
        }
    }
}

function getUserRight(){
    var right = [];

    //console.log("teszt");

       for(var i = 1;i<150;i++){
            var element = document.getElementById(i)
            if(element != null){
                //console.log(element)
                if(element.getAttribute('class') !='inactive') {
                     var check = element.querySelector('input[type="checkbox"]')
                     if(check.checked === true) right.push(i);
                     //console.log(i)
                }
            }

        }
    return right
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
