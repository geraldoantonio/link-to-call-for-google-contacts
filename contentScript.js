'use strict';

let add_call_button = true;


const imagePhoneCall = (title='phone call') => {
  let phoneIcon = document.createElement('img');
  let iconUrl = chrome.runtime.getURL('images/button-phone.ico');
  phoneIcon.src = iconUrl;
  phoneIcon.title = title;
  phoneIcon.style.width='24px'; 
  phoneIcon.style.height='24px'; 

  return phoneIcon;
}

const isRenderDialog = () => !!(document.querySelector('[role="dialog"]'));

const addLinkPhone = () => {
  let dialog = document.querySelector('[role="dialog"]');
  let phoneNumbers = dialog.querySelectorAll('[dir="ltr"]');

  phoneNumbers.forEach( phoneNumberElement => {
    let phoneNumber = phoneNumberElement.innerText;
    let button = document.createElement('button');
    button.classList = 'VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ paacgc';
    
    let linkButton = document.createElement('a');
    linkButton.href = `tel:${phoneNumber}`;
    linkButton.appendChild(imagePhoneCall(phoneNumber));

    button.appendChild(linkButton);

    let wrapper = phoneNumberElement.parentElement;
    if (!!wrapper) wrapper.querySelector('.OCiUOb').appendChild(button);
  });

  add_call_button = false;
}

setInterval(() => {
  if (isRenderDialog() && add_call_button) addLinkPhone();
  if (!isRenderDialog()) add_call_button = true;
}, 1000);