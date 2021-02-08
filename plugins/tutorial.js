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
5) $https://github.com/dferdiantn/awgbot
6) $ls
7) $cd awgbot

yang *terakhirr*..
Penginstalannya cuy :)
8) npm i
9) node index.js

[NB: Saya pribadi menggunakan RDP Ubuntu 14.06
tutorial lengkap ada di https://github.com/dferdiantn/awgbot ]
_Dukung saya di S.id/dferdiantn_
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

