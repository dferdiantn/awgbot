let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *AWGcorp*

Ketik di *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

Untuk Githubnya..
5) $git clone https://github.com/Arya274/Arya-BOT3
6) $ls
7) $cd Arya-BOT3

yang *terakhirr*..
Penginstalannya cuy :)
8) npm i
9) node index.js

_Dukung saya di S.id/dferdiantn_
*Youtube kami:*
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

