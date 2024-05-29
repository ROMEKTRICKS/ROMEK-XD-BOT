import axios from 'axios'

let handler = async (m, { text, conn, usedPrefix, command }) => {

let url = 'https://telegra.ph/file/35086802022652ed9a897.jpg'
conn.sendButton(m.chat, "ROMEK-XD", author, url, [['AUDIO', ${usedPrefix}ytmp3 ${text}], ['VIDEO', ${usedPrefix}ytmp4 ${text}]], null, [['AB stream', 'https://ab-streamer.vercel.app']], m)

  }

handler.help = ['bot']

handler.tags = ['img']

handler.command = /^(stream)$/i

export default handler
