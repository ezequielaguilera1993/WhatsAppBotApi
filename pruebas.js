
const qrcode = require('qrcode-terminal');
const SESSION_FILE_PATH = './sessionDePrueba.json';
const fs = require('fs');
const { textsGenerator } = require('./_textGenerator.ts');
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}
const { Client } = require('whatsapp-web.js');
const GroupChat = require('whatsapp-web.js/src/structures/GroupChat');
// const GroupChat = require('whatsapp-web.js/src/structures/GroupChat');
const client = new Client({
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
    session: sessionCfg,
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

//Descriptions
const {
    INFARTO_ACV,
    RCP_BEBÉS,
    HEIMLICH_BEBÉS,
    RCP_ADULTOS,
    HEIMLICH_ADULTOS,
} = textsGenerator({ viernes: 1, classroomColor: "VERDE" }).DESCRIPTION_GROUPS

client.on('ready', async () => {
    const viernes = 1

    const monthNumber = new Date().getMonth() + 1

    let ml = await (await client.getContacts()).filter(e => e.id.user.includes("27227255"))
    //Crear grupos con su descripcion asociada
    let groupsCreatedArray = [
        {
            groupCreated: await client.createGroup(`${viernes}/${monthNumber} Infarto y ACV 🫀🧠`, ml),
            descriptionAsociated: INFARTO_ACV
        },
        {
            groupCreated: await client.createGroup(`${sabado}/${monthNumber} Rcp en Bebés 🤱🏽👨🏽‍🍼`, ml),
            descriptionAsociated: RCP_BEBÉS
        },
        {
            groupCreated: await client.createGroup(`${sabado}/${monthNumber} Heimlich en Bebés 🤱🏽👨🏽‍🍼`, ml),
            descriptionAsociated: HEIMLICH_BEBÉS
        },
        {
            groupCreated: await client.createGroup(`${domingo}/${monthNumber} Rcp en Adultos ⛑️`, ml),
            descriptionAsociated: RCP_ADULTOS
        },
        {
            groupCreated: await client.createGroup(`${domingo}/${monthNumber} Heimlich Adultos ⛑️`, ml),
            descriptionAsociated: HEIMLICH_ADULTOS
        },
    ]

    //Asignacion de descripciones
    setTimeout(async () => { //Espero 10 segundos
        //Busco todos los chats de grupos
        let groupChats = (await client.getChats()).filter(eChat => {
            return eChat.isGroup
        })

        groupsCreatedArray.forEach(({ groupCreated, descriptionAsociated }) => {
            // Por cada gid, lo busco en el groupChats, creo el Handler, y asigno la descripcion
            // groupChats.forEach(e => {
            //     if (e.name.includes("1/9 Inf"))
            //         console.log(e)
            //     console.log(groupCreated.gid);
            // })
            console.log("|||", INFARTO_ACV.length, "|||", INFARTO_ACV, "|||");

            let groupChat = groupChats.find(e => e.id.user === groupCreated.gid.user)
            console.log(groupChat);
            let groupHandler = new GroupChat(client, groupChat)
            groupHandler.setDescription(INFARTO_ACV)
        })
    }, 10000)

});

client.on('authenticated', (session) => {
    // Guardamos credenciales de de session para usar luego
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
        if (err) {
            console.log(err);
        }
    });
});
