
const SESSION_FILE_PATH = './whatsapp-session.json';
const fs = require('fs');

fs.unlinkSync(SESSION_FILE_PATH)
