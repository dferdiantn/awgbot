let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [6282123618826]
│ • OVO [6282123618826]
│ • Tunai [Pamulang]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282123618826
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 6282123618826
4.) Jika sudah kirim bukti ke sini.. Terimakasih👍🏻
"Udah B.."

For More Inforation S.id/dferdiantn
(NB: Kalo miskin jangan lah kau ketik /donasi anjeng. Bikin aku berharap)
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
