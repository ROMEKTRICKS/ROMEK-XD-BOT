

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./Assets/ALIVE.mp3"
    let url = "https://github.com/Romeofaiz"
    let murl = "https://github.com"
    let img = "https://telegra.ph/file/94ee125634ca4dfe7b137.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '919341378016@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "🌪ROMEK-XD IS ACTIVE🌪",
          body: "ROMEK XD",
          thumbnailUrl: img,
          sourceUrl: 'https://whatsapp.com/channel/0029VaNdKNxK5cDKRztKXV3g',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };

      await conn.sendMessage(m.chat, doc, { quoted: con });

    }

    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;