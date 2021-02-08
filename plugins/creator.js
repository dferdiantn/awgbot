let handler = function (m) {
  // this.sendContact(m.chat, '6282123618826', 'AWGcorp Admin', m)
  this.sendContact(m.chat, '6282123618826', '𝑺̲̅𝑨̲̅𝑯̲̅𝑨̲̅ 𝑰̲̅𝑬̲̅𝑼̲̅', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
