'use strict';

let addCallButtonToElement = true;

const isRenderDialog = () => !!(document.querySelector('[role="dialog"]'));

const addLinkPhone = () => {
  const elements = document.querySelectorAll('span.OCiUOb');

  elements.forEach(element=>{
    let phoneNumber = element.parentElement.querySelector('[dir=ltr]').innerText;

    let button = document.createElement('button');
        button.classList = 'VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ paacgc';

    let linkButton = document.createElement('a');
        linkButton.href = `tel:${phoneNumber}`;
        linkButton.appendChild(imagePhoneCall(phoneNumber));

        button.appendChild(linkButton);

    element.appendChild(button);
  });

  addCallButtonToElement = false;
}

const imagePhoneCall = (title='phone call') => {
  let iconUrl = chrome.runtime.getURL('images/button-phone.ico');
  let phoneIcon = document.createElement('img');
      phoneIcon.src = iconUrl;
      phoneIcon.title = title;
      phoneIcon.style.width='24px'; 
      phoneIcon.style.height='24px'; 

  return phoneIcon;
}

setInterval(() => {
  if (isRenderDialog() && addCallButtonToElement) addLinkPhone();
  if (!isRenderDialog()) addCallButtonToElement = true;
}, 1000);
