'use strict';

let addCallButtonToElement = true;

const isRenderDialog = () => !!(document.querySelector('[role="dialog"]'));

const addLinkPhone = () => {
  const hangoutButtons = document.querySelectorAll('[jsname="RA4LPe"]')

  hangoutButtons.forEach(element=>{
    const wrapper = element.parentElement;
    const phoneNumber = element.dataset.tooltip.replace(/[^0-9\.]+/g, '');

    const linkButtonPhone = document.createElement('a');
          linkButtonPhone.href = `tel:${phoneNumber}`;
          linkButtonPhone.appendChild(imagePhoneCall());

    const linkButtonWhatsapp = document.createElement('a');
          linkButtonWhatsapp.href = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
          linkButtonWhatsapp.appendChild(imageWhatsApp());

    wrapper.appendChild(addButtonElement(linkButtonPhone));
    wrapper.appendChild(addButtonElement(linkButtonWhatsapp));
  });

  addCallButtonToElement = false;
};

const imageToButton = (iconUrl='', title='') => {
  const phoneIcon = document.createElement('img');
        phoneIcon.src = iconUrl;
        phoneIcon.title = title;
        phoneIcon.style.width='24px'; 
        phoneIcon.style.height='24px'; 

  return phoneIcon;
}

const imagePhoneCall = () => {
  const iconUrl = chrome.runtime.getURL('images/button-phone.ico');
  return imageToButton(iconUrl, 'Send to phone')
};

const imageWhatsApp = () => {
  const iconUrl = chrome.runtime.getURL('images/button-whatsapp.png');
  return imageToButton(iconUrl, 'Send to whatsapp');
};

const addButtonElement = (content) => {
  const element = document.createElement('button');
        element.classList = 'VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ paacgc';
        element.appendChild(content);
  return element;
};

setInterval(() => {
  if (isRenderDialog() && addCallButtonToElement) addLinkPhone();
  if (!isRenderDialog()) addCallButtonToElement = true;
}, 1000);
