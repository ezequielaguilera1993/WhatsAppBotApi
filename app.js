const { Client, MessageMedia } = require('whatsapp-web.js');
const express = require('express');
const { body, validationResult } = require('express-validator');
const socketIO = require('socket.io');
const qrcode = require('qrcode');
const http = require('http');
const fs = require('fs');
const { phoneNumberFormatter } = require('./helpers/formatter');
const fileUpload = require('express-fileupload');
const axios = require('axios');
const mime = require('mime-types');
const cors = require('cors')
const port = process.env.PORT || 8000;
const { textsGenerator } = require('./_textGenerator.js');
// const { GroupChat } = require('whatsapp-web.js');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const qrcodeGen = require('qrcode-terminal');
const GroupChat = require('whatsapp-web.js/src/structures/GroupChat');


app.use(cors())

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(fileUpload({
  debug: true
}));

const SESSION_FILE_PATH = './whatsapp-session.json';
let sessionCfg;
let existSession = () => fs.existsSync(SESSION_FILE_PATH)
if (existSession()) {
  sessionCfg = require(SESSION_FILE_PATH);
}

let client = new Client({
  qrTimeoutMs: 0,
  restartOnAuthFail: true,
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process', // <- this one doesn't works in Windows
      '--disable-gpu'
    ],
  },
  session: sessionCfg
});

app.get("/get", (req, res) => {

  res.send("Anda el get!")
})

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname
  })
})



app.post('/runBot', async (req, res) => {

  const {
    viernes,
    classroomColor,
    createGroups
  } = req.body

  const sabado = viernes + 1
  const domingo = viernes + 2

  const { presentacion,
    info1,
    info2,
    info3,
    info4,
    opciones,
    respuestaInstructor,
    ultimoMensaje,
    DESCRIPTION_GROUPS
  } = textsGenerator({
    viernes, classroomColor
  })

  const monthNumber = new Date().getMonth() + 1

  client.on('message', async msg => {
    const from = msg.from

    //Si lo escribio, es que es nuevo
    if (await writeChatPromise()) {
      const firstMessage = [
        `🤖 *Hola soy un bot, me llamo Dominique Larrey, intentaré responder a sus consultas.* 
  Como recibimos muchísimas preguntas me contrataron a mi para responderlas, como soy un robot no me canso, aunque podrían pagarme algo no? 😒
  `
      ].join(' ')

      await msg.reply(firstMessage)
      await msg.reply(presentacion)
      await msg.reply(info1)
      await msg.reply(info2)
      await msg.reply(info3)
      await msg.reply(info4)
      await msg.reply(`*Modelos de certificados*
      https://photos.app.goo.gl/Grm54bW161weeXB26`)
      await sendMedia(from, 'todosCertificados.png')
      await sendMedia(from, 'Mundo hd.png')
      await msg.reply(ultimoMensaje)

      if (CURSO_EN_TRANSCURSO) {
        await msg.reply("*🤖IMPORTANTE* el instructor está dando un curso, podés sumarte mediante este enlace y luego inscribirte bien. https://meet.google.com/ijj-pwnn-itf")
      }
      else if (PASO_EL_PRIMER_CURSO) {
        await msg.reply("*🤖IMPORTANTE* algunos cursos ya empezaron, pero puede ver las clases grabadas.")
      }
    }

    else {
      msg.body = msg.body.toLowerCase()

      if (msg.body === 'instructor' || msg.body === 'intructor' || msg.body === 'ezequiel' || msg.body === 'instrutor') {
        msg.reply(respuestaInstructor)
      }
      else if (msg.body === "1" || msg.body == "*1*" || msg.body == "uno") {
        await msg.reply(info1)
        await msg.reply(ultimoMensaje)
      }

      else if (msg.body === "2" || msg.body == "*2*" || msg.body == "dos") {
        await msg.reply(info2)
        await msg.reply(ultimoMensaje)
      }

      else if (msg.body === "3" || msg.body == "*3*" || msg.body == "tres") {
        await msg.reply(info3)
        await msg.reply(ultimoMensaje)
      }

      else if (msg.body === "4" || msg.body == "*4*" || msg.body == "cuatro") {
        await msg.reply(info4)
        await msg.reply(ultimoMensaje)
      }

      else if (msg.body === "5" || msg.body == "*5*" || msg.body == "cinco" || msg.body == "sinco") {
        await msg.reply("*El instructor es de Buenos Aires, pero los cursos se dan en todo el pais.*")
        await msg.reply(ultimoMensaje)
      }

      else if (msg.body === "6" || msg.body == "*6*" || msg.body == "seis") {
        await msg.reply("*Las clases son 100% virtuales*")
        await msg.reply(ultimoMensaje)
      }

      else if (msg.body === "7" || msg.body == "*7*" || msg.body == "siete") {
        await msg.reply("*Luego de aprobar un curso, si abono un certificado deberá completar una planilla con sus datos para solicitarlo, y en menos de un minuto le estará llegando a su casilla de mail, firmado digitalmente y con dos códigos de autenticidad. Al enviar la planilla un programa comprueba si es de las personas aprobadas, genera un certificado y se los envia automaticamente*")
        await msg.reply(ultimoMensaje)
      }

      else if (msg.body === "8" || msg.body == "*8*" || msg.body == "ocho") {
        await msg.reply(`*Modelos de certificados*
        https://photos.app.goo.gl/Grm54bW161weeXB26`)
        await msg.reply(ultimoMensaje)

      }

      else if (msg.body === "cin" || msg.body == "cinthya" || msg.body == "mi amor" || msg.body == "eze mi amor" || msg.body == "eze mí amor" || msg.body == "mí amor") {
        await msg.reply("Hola Cin hermosa ❤. ¿Como estás?")

      }

      else if (
        msg.body === "🤖"
        ||
        msg.body === "como te llamas"
        ||
        msg.body === "como te llamás"
      ) await sendMessage('*🤖 Soy el bot Dominique Larrey, tomo mi nombre del inventor de la ambulancia y del triage. "Dominique-Jean Larrey fue un cirujano que, en las guerras napoleónicas, creó el transporte por ambulancia e introdujo los principios de la sanidad militar moderna, realizando los primeros triaje en los campos de batalla.". Mas info en Wikipedia https://es.wikipedia.org/wiki/Dominique-Jean_Larrey*')

      else if (msg.body == '!ping') {
        msg.reply('pong');
      } else if (msg.body == 'good morning') {
        msg.reply('selamat pagi');
      } else if (msg.body == '!groups') {
        client.getChats().then(chats => {
          const groups = chats.filter(chat => chat.isGroup);

          if (groups.length == 0) {
            msg.reply('You have no group yet.');
          } else {
            let replyMsg = '*YOUR GROUPS*\n\n';
            groups.forEach((group, i) => {
              replyMsg += `ID: ${group.id._serialized}\nName: ${group.name}\n\n`;
            });
            replyMsg += '_You can use the group id to send a message to the group._'
            msg.reply(replyMsg);
          }
        });
      }
    }

    // Downloading media
    if (msg.hasMedia) {
      msg.downloadMedia().then(media => {
        // To better understanding
        // Please look at the console what data we get
        console.log("Media a descargar");

        if (media) {
          // The folder to store: change as you want!
          // Create if not exists
          const mediaPath = './downloaded-media/';

          if (!fs.existsSync(mediaPath)) {
            fs.mkdirSync(mediaPath);
          }

          // Get the file extension by mime-type
          const extension = mime.extension(media.mimetype);

          // Filename: change as you want! 
          // I will use the time for this example
          // Why not use media.filename? Because the value is not certain exists
          const filename = new Date().getTime();

          const fullFilename = mediaPath + filename + '.' + extension;

          // Save to file
          try {
            fs.writeFileSync(fullFilename, media.data, { encoding: 'base64' });
            console.log('File downloaded successfully!', fullFilename);
          } catch (err) {
            console.log('Failed to save the file:', err);
          }
        }
      });
    }

  });


  client.on('ready', async () => {
    if (createGroups) {//Creacion de grupos
      let ml = await (await client.getContacts()).filter(e => e.id.user.includes("27227255"))
      let groupCreated = {
        HEIMLICH_ADULTOS: await client.createGroup(`${domingo}/${monthNumber} Heimlich Adultos ⛑️`, ml),
        RCP_ADULTOS: await client.createGroup(`${domingo}/${monthNumber} Rcp en Adultos ⛑️`, ml),
        HEIMLICH_BEBÉS: await client.createGroup(`${sabado}/${monthNumber} Heimlich en Bebés 🤱🏽👨🏽‍🍼`, ml),
        RCP_BEBÉS: await client.createGroup(`${sabado}/${monthNumber} Rcp en Bebés 🤱🏽👨🏽‍🍼`, ml),
        INFARTO_ACV: await client.createGroup(`${viernes}/${monthNumber} Infarto y ACV 🫀🧠`, ml),
      }
      //Declaracion de Handlers
      let groupsHandlers = {
        INFARTO_ACV: undefined,
        RCP_BEBÉS: undefined,
        HEIMLICH_BEBÉS: undefined,
        RCP_ADULTOS: undefined,
        HEIMLICH_ADULTOS: undefined,
      }
      await sleep(10)
      //Busco todos los chats de grupos
      let groupChats = (await client.getChats()).filter(eChat => {
        return eChat.isGroup
      })
      //Despineo todos los grupos
      groupChats.forEach(e => new GroupChat(client, e).unpin())
      //Codigos
      let groupsCodes = {
        INFARTO_ACV: undefined,
        RCP_BEBÉS: undefined,
        HEIMLICH_BEBÉS: undefined,
        RCP_ADULTOS: undefined,
        HEIMLICH_ADULTOS: undefined,
      }
      for (let i in groupsHandlers) {
        let groupChat = groupChats.find(e => e.id.user === groupCreated[i].gid.user)
        groupsHandlers[i] = new GroupChat(client, groupChat)
        //Agrego descripciones
        await groupsHandlers[i].setDescription(DESCRIPTION_GROUPS[i])
        //Agrego códigos
        groupsCodes[i] = "https://chat.whatsapp.com/" + await groupsHandlers[i].getInviteCode()
      }
      //Pineo los primeros 3
      await groupsHandlers.HEIMLICH_BEBÉS.pin()
      await groupsHandlers.RCP_BEBÉS.pin()
      await groupsHandlers.INFARTO_ACV.pin()
      res.json(groupsCodes)
    }
  });

  client.initialize()

});

// Socket IO
io.on('connection', function (socket) {
  socket.emit('message', `Esperar a conectarse con el bot. Puede tardar hasta 1 minuto`);
  client.on('qr', (qr) => {
    if (!existSession()) {
      qrcode.toDataURL(qr, (err, url) => {
        socket.emit('qr', url);
        socket.emit('message', 'Escanear QR. Activar el bot puede tardar hasta un momento. Es recomendable eliminar las sesiones en WhatsApp');
      });
    }
  });

  client.on('ready', async () => {
    socket.emit('ready', 'Whatsapp conectado🎉🥳');
    socket.emit('message', 'Whatsapp conectado🎉🥳');
  });

  client.on('authenticated', (session) => {
    socket.emit('authenticated', 'Whatsapp autenticado!');
    socket.emit('message', 'Whatsapp autenticado!');
    sessionCfg = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
      if (err) {
        console.error(err);
      }
    });
  });

  client.on('auth_failure', function (session) {
    try {
      fs.unlink(SESSION_FILE_PATH, function (err) {
        if (err) return console.log(err);
        console.log('Archivo de session desconectado');
      })
    } catch (error) {
      console.log(error);
    }
    socket.emit('message', 'Autenticacion fallida, reiniciando...');
    console.log("auth fallida");

    client.resetState()
  });

  client.on('disconnected', (reason) => {
    socket.emit('message', 'Whatsapp esta desconectado!');

    try {
      fs.unlink(SESSION_FILE_PATH, function (err) {
        if (err) return console.log(err);
        console.log('Archivo de session desconectado');
      })
    } catch (error) {

    }

    client.destroy();
    client.initialize();
  });
});






// console.log(client.getInviteInfo());
app.post('/disconnect', (req, res) => {

})






const checkRegisteredNumber = async function (number) {
  const isRegistered = await client.isRegisteredUser(number);
  return isRegistered;
}

// Send message
app.post('/send-message', [
  body('number').notEmpty(),
  body('message').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req).formatWith(({
    msg
  }) => {
    return msg;
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: errors.mapped()
    });
  }

  const number = phoneNumberFormatter(req.body.number);
  const message = req.body.message;

  const isRegisteredNumber = await checkRegisteredNumber(number);

  if (!isRegisteredNumber) {
    return res.status(422).json({
      status: false,
      message: 'El numero no esta registrado'
    });
  }

  client.sendMessage(number, message).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});

// Send media
app.post('/send-media', async (req, res) => {
  const number = phoneNumberFormatter(req.body.number);
  const caption = req.body.caption;
  const fileUrl = req.body.file;

  // const media = MessageMedia.fromFilePath('./image-example.png');
  // const file = req.files.file;
  // const media = new MessageMedia(file.mimetype, file.data.toString('base64'), file.name);
  let mimetype;
  const attachment = await axios.get(fileUrl, {
    responseType: 'arraybuffer'
  }).then(response => {
    mimetype = response.headers['content-type'];
    return response.data.toString('base64');
  });

  const media = new MessageMedia(mimetype, attachment, 'Media');

  client.sendMessage(number, media, {
    caption: caption
  }).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});

const findGroupByName = async function (name) {
  const group = await client.getChats().then(chats => {
    return chats.find(chat =>
      chat.isGroup && chat.name.toLowerCase() == name.toLowerCase()
    );
  });
  return group;
}

// Send message to group
// You can use chatID or group name, yea!
app.post('/send-group-message', [
  body('id').custom((value, { req }) => {
    if (!value && !req.body.name) {
      throw new Error('Invalid value, you can use `id` or `name`');
    }
    return true;
  }),
  body('message').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req).formatWith(({
    msg
  }) => {
    return msg;
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: errors.mapped()
    });
  }

  let chatId = req.body.id;
  const groupName = req.body.name;
  const message = req.body.message;

  // Find the group by name
  if (!chatId) {
    const group = await findGroupByName(groupName);
    if (!group) {
      return res.status(422).json({
        status: false,
        message: 'No group found with name: ' + groupName
      });
    }
    chatId = group.id._serialized;
  }

  client.sendMessage(chatId, message).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});

// Clearing message on spesific chat
app.post('/clear-message', [
  body('number').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req).formatWith(({
    msg
  }) => {
    return msg;
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: errors.mapped()
    });
  }

  const number = phoneNumberFormatter(req.body.number);

  const isRegisteredNumber = await checkRegisteredNumber(number);

  if (!isRegisteredNumber) {
    return res.status(422).json({
      status: false,
      message: 'The number is not registered'
    });
  }

  const chat = await client.getChatById(number);

  chat.clearMessages().then(status => {
    res.status(200).json({
      status: true,
      response: status
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  })
});

server.listen(port, function () {
  console.log('App running on *: ' + port);
});


function writeChatPromise(number) {
  const FILE_NAME = "chats.txt"
  const FILE_PATH = "./" + FILE_NAME

  if (!fs.existsSync(FILE_PATH)) {//No existe, lo creo
    try {
      fs.writeFileSync(FILE_NAME, "Contactos");
      console.log('File created');
    } catch (err) {
      console.log('Failed to create the file:');
    }
  }

  return new Promise((resolve) => {

    const existNum = fs.readFileSync("./" + FILE_NAME, 'utf-8').toString().includes("~" + number + "~")

    if (!existNum) {
      if (fs.existsSync("./" + FILE_NAME)) {//Existe actualizo lo que tiene con lo que le paso
        fs.readFile("./" + FILE_NAME, 'utf-8', (err, data) => {
          if (err) {
            console.log("Error leyendo el archivo")
          }
          else {
            data = data.toString() + "\n"

            try {
              fs.writeFileSync(FILE_NAME, data + "~" + number + "~")
              resolve(true)
            }
            catch { }
          }
        })
      }
    }

    else {
      resolve(false)
    }
  })
}

function sendMedia(number, fileName) {
  number = number.replace('@c.us', '');
  number = `${number}@c.us`
  console.log(`'📺 Media to: ' + number)}`);

  let media;
  try {
    media = MessageMedia.fromFilePath('./media/' + fileName)
  } catch (error) {
    console.log(error)
  }
  return client.sendMessage(number, media).catch((e) => console.log("error en sendmedia()", e));
}

function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, 1000 * s));
}