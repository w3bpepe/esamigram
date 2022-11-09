const server = require('./api/server')

const HOST = 'localhost'
const PORT = 3333



server.listen(PORT, () => console.log('server running at ' + HOST + ":" + PORT));