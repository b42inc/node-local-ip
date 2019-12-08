const ifaces = require('os').networkInterfaces()
let host = 'localhost'

root: for (const ifname in ifaces) {
  for (const iface of ifaces[ifname]) {
    if (iface.family === 'IPv4' && !iface.internal) {
      host = iface.address
      break root
    }
  }
}

module.exports = host