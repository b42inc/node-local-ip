const localip = require('./index')

test('check ip address', () => expect(localip).not.toBe('localhost'))