//Credits GURU
//https://github.com/Guru322/GURU-BOT

import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  let phoneNumber = '';
  if (text) {
    phoneNumber = text.replace(/[^0-9]/g, '');
  } else if (m.quoted) {
    phoneNumber = m.quoted.sender.replace(/[^0-9]/g, '');
  } else if (m.mentionedJid && m.mentionedJid[0]) {
    phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
  } else {
    throw `Please provide a number in international format without +, quote a user, or mention a user`;
  }

  try {
    const installationId = 'a1i0D--jTBiKAks-Y9FHnPk_XG-YIsKEIa_eWiBwjH68LKn-zKRx9vaZq731KL0x';
    const apiurl = `https://truecaller-api.vercel.app/search?phone=${encodeURIComponent(phoneNumber)}&id=${installationId}`;

    let response = await fetch(apiurl);
    console.log(response);
    let json = await response.json();
    m.react("⏰")


    json.creator = 'ROMEK';

    let milf = '';
    for (let prop in json) {
      
      if (prop === 'flagURL') {
        continue;
      }
    
      if (prop === 'addresses') {
        milf += `│✫ -  *${prop}:*\n`;
        for (let addressProp in json[prop][0]) {
          milf += `│✫ -  *${addressProp}:* ${json[prop][0][addressProp]}\n`;
        }
      } else if (prop === 'countryDetails') {
        milf += `│✫ -  *${prop}:*\n`;
        for (let countryProp in json[prop]) {
          if (Array.isArray(json[prop][countryProp])) {
            milf += `│✫ -  *${countryProp}:* ${json[prop][countryProp].join(', ')}\n`;
          } else {
            milf += `│✫ -  *${countryProp}:* ${json[prop][countryProp]}\n`;
          }
        }
      } else {
        if (prop !== 'flagURL') {
          milf += `│✫ -  *${prop}:* ${json[prop]}\n`;
        }
      }
    }
    

    m.reply(milf);
    m.react("✅")
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['true'];
handler.tags = ['tools'];
handler.command = /^(true|caller)$/i;

export default handler;
