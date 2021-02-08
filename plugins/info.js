let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: AWGcorp
Script: @Nurotomo
Github: 
https://github.com/dferdiantn/awgbot

*Sosmed :*
[ Sementara S.id/dferdiantn ]

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Emak
AWG-Crtv
Soto Ibu Udin
UDHB.
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Tsel: 0821-2361-8826
╠➥ OVO : 0821-2361-8826
╠➥ Tunai : COD Pamulang
║>Request? Wa.me/082123618826
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

