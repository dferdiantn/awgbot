let handler = function (m) {
  // this.sendContact(m.chat, '6282123618826', 'AWGcorp Admin', m)
  this.sendContact(m.chat, '6282123618826', 'Admin AWGcorp', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
