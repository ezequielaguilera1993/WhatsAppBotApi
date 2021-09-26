"use strict";
exports.__esModule = true;
function textsGenerator(_a) {
    const _b = _a.certiX1, certiX1 = _b === void 0 ? 800 : _b, _c = _a.certiX2, certiX2 = _c === void 0 ? 1000 : _c, _d = _a.certiX3, certiX3 = _d === void 0 ? 1200 : _d, _e = _a.certiX4, certiX4 = _e === void 0 ? 1400 : _e, _f = _a.certiX5, certiX5 = _f === void 0 ? 1600 : _f, viernes = _a.viernes, classroomColor = _a.classroomColor;
    //Autoresponse mensages/////////////////////////////////////////////////////////////////////////////////////////
    const sabado = viernes + 1;
    const domingo = viernes + 2;
    const presentacion = "*\uD83E\uDD16 Le dejo mas info sobre todos los cursos*\n*1)* C\u00F3mo inscribirse de forma gratuita (sin certificado)\n*2)* C\u00F3mo inscribirse de forma paga (con certificado) y costos de los certificados\n*3)* C\u00F3mo son los cursos, duraci\u00F3n, pasos a seguir etc.\n*4)* Cuando empiezan los cursos";
    const info1 = "*1) Inscripci\u00F3n gratuita (sin certificado)* \nAcceda a este enlace https://docs.google.com/document/d/1H8DsbU-qfeIijVni4zrfG_ND1ugv_gNHq2x8dvFyiQU/edit?usp=sharing y s\u00FAmese a todos los cursos que desee. *Importante: recuerde unirse al grupo de Whatsapp y Classroom de cada curso*\n";
    const info2 = "*2) Inscripci\u00F3n paga (con certificado)*\nDebe abonar los certificados que desee y luego sumarse a los cursos\n*Modelos de Certificado* https://photos.app.goo.gl/Grm54bW161weeXB26\n*Promoci\u00F3n por pre-inscripci\u00F3n (hasta el lunes " + (domingo + 1) + " inclusive)*\n\u2022 *Un (1)* Certificado *" + certiX1 + "$* https://mpago.la/2pwTDcY\n\u2022 *Dos (2)* Certificados *" + certiX2 + "$* (" + certiX2 / 2 + "$ cada certificado)* \u27A4https://mpago.la/1noxX9Y\n\u2022 *Tres (3)* Certificados *" + certiX3 + "$* (" + certiX3 / 3 + "$ cada certificado)* \u27A4https://mpago.la/2RKS4fA\n\u2022 *Cuatro (4)* Certificados *" + certiX4 + "$* (" + certiX4 / 4 + "$ cada certificado)* \u27A4https://mpago.la/1eQvfze\n\u2022 *Cinco (5)* Certificados *" + certiX5 + "$* (" + certiX5 / 5 + "$ cada certificado)* \u27A4https://mpago.la/234vbAd\nEn total puede abonar hasta 5 certificados (porque son 5 cursos). Si abona menos de 5 certificados, deber\u00E1 elegir en qu\u00E9 cursos utilizar el comprobante.\n*Luego de abonar debe unirse a los cursos que desee por los enlaces p\u00FAblicos de uni\u00F3n  https://docs.google.com/document/d/1H8DsbU-qfeIijVni4zrfG_ND1ugv_gNHq2x8dvFyiQU/edit?usp=sharing*\n\n*Formas de pago*\n\u2022 D\u00E9bito\n\u2022 Cr\u00E9dito\n\u2022 Efectivo desde un Rapipago, Pago Facil, Kiosco o Provincia Net Pagos\n\u2022 Transferencias desde cuentas de mercado pago\n\nTambi\u00E9n puede abonarlos mediante una transferencia bancaria al 0140389103703753820095";
    const info3 = "*3) Sobre los cursos*\n\n*Duraci\u00F3n*: dos semanas\n\n*Pasos para realizar los cursos*\n*1)* Asistir a un encuentro virtual (o en su defecto ver la grabaci\u00F3n), y conseguir un mu\u00F1eco almohad\u00F3n o frazada enrollada para practicar (para Acv/Infarto no es necesario) \n*2)* Acceder a un Classroom \n*3)* Presentar una actividad. \n*4)* Marcar la tarea como completada\n*5) (opcional)* Si abonaron el certificado les estar\u00E1 llegando firmado digitalmente, en calidad de impresi\u00F3n y con doble c\u00F3digo de autenticidad a su casilla de mail en menos de 1 hora\n\n*En el Classroom de cada curso tambi\u00E9n encontrar\u00E1n*\n\u2023 Protocolos para imprimir\n\u2023 Todas las im\u00E1genes vistas en el curso en un PDF\n\u2023 La grabaci\u00F3n del encuentro\n\u2023 Videos con contenido extra\n\u2023 Un video que explica de forma concisa la fisiologia humana (y un cup\u00F3n gratuito para un curso de fisiolog\u00EDa humana)\n";
    const info4 = "*4) Por cada curso de dictar\u00E1 una clase virtual, luego deberan realizar actividades en un Classroom (un Classroom es un aula virtual).*\n\n*Dias y horario de cada clase virtual (sea el caso que no pueda asistir, recuerde que las clases quedan grabadas)*\n\n1\u2022 *Acv/Infarto*  viernes " + viernes + " a las 18hs\n\n2\u2022 *RCP en Beb\u00E9s* S\u00E1bado " + sabado + " a las 18hs\n\n3\u2022 *Maniobra de Heimlich en Beb\u00E9s* (para asistir en caso de atragantamiento) S\u00E1bado " + sabado + " a las 21hs\n\n4\u2022 *RCP en Adultos* Domingo " + domingo + " a las 18hs\n\n5\u2022 *Maniobra de Heimlich en adultos* (para asistir en caso de atragantamiento) Domingo " + domingo + " a las 21hs\n";
    const opciones = "\u2022 Envie un *1* para saber c\u00F3mo inscribirse de forma gratuita (sin certificado)\n\u2022 Envie un *2* para saber c\u00F3mo inscribirse de forma paga (con certificado) y para saber cuando cuestan los certificados\n\u2022 Envie un *3* para saber c\u00F3mo son los cursos, duraci\u00F3n, pasos a seguir etc.\n\u2022 Envie un *4* para saber horarios del encuentro virtual de cada curso\n\u2022 Envie un *5* para saber de donde somos\n\u2022 Envie un *6* para saber si las clases son virtuales\n\u2022 Envie un *7* para saber cuanto tarda en llegar el certificado\n\u2022 Envie un *8* para ver modelos de certificados";
    const respuestaInstructor = "\uD83E\uDD16 *El instructor Ezequiel se contactar\u00E1 con usted cuando sea posible (estamos atendiendo muchas consultas)* \u23F3 \n_Mientras tanto puede consultarme a mi lo que desee_\n         \n*Escriba el numero sin letras o n\u00FAmeros adicionales, luego envie el mensaje y le llegara la info que precisa.*\n  \n" + opciones + "\n\n    *\uD83E\uDD16 IMPORTANTE* si contesta algo diferente a lo de esta lista no podre responderle de manera adecuada.\n\n    _El instructor se contactar\u00E1 a la brevedad_\n";
    const ultimoMensaje = "*\uD83E\uDD16 Si le qued\u00F3 una duda envieme un mensaje con algunos de las siguientes opciones para tener mas informacion*\n\n_Escriba a los n\u00FAmeros sin letras o n\u00FAmeros adicionales, luego envie el mensaje y le llegara la info que precisa._\n        \n\u2022 Escriba la palabra *instructor* si desea hablar un tema en especifico con el instructor\n" + opciones + "\n\n *\uD83E\uDD16 IMPORTANTE* si contesta algo diferente a lo de esta lista no podre responderle de manera adecuada. Recuerde que si desea hablar con el instructor debe enviar la palabra *instructor* como mensaje, yo me encargo de avisarle. \uD83D\uDCEC\n";
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Description text/////////////////////////////////////////////////////////////////////////////////////////
    //Classrooms
    const CLASSROOMS_JOINS_LINKS = {
        GRIS: {
            INFARTO_ACV: "https://classroom.google.com/c/MzA5NDAxMzU3MTQ0?cjc=zoukjja",
            RCP_BEBÉS: "https://classroom.google.com/c/Mjg2MjMwNTE2Mzkw?cjc=h5lhp3o",
            HEIMLICH_BEBÉS: "https://classroom.google.com/c/Mjg2MjMwNTE2NDM0?cjc=pcpgrbb",
            RCP_ADULTOS: "https://classroom.google.com/c/Mjg2MjMxMjE0OTE4?cjc=pekrmlw",
            HEIMLICH_ADULTOS: "https://classroom.google.com/c/Mjg2MjMxMjE0OTUy?cjc=iic7vyd"
        },
        VERDE: {
            INFARTO_ACV: "https://classroom.google.com/c/MzIxNTk0ODUwMTQ1?cjc=2lesail",
            RCP_BEBÉS: "https://classroom.google.com/c/NTg1MTUzNzYwODha?cjc=k2oba6l",
            HEIMLICH_BEBÉS: "https://classroom.google.com/c/Mjc5OTMxODU2NjI1?cjc=7vnkaks",
            RCP_ADULTOS: "https://classroom.google.com/c/NTg1MTAxNDA3OTVa?cjc=ppsjce7",
            HEIMLICH_ADULTOS: "https://classroom.google.com/c/NTg1MTAxNDA4NTNa?cjc=ohlxgyj"
        },
        AZUL: {
            INFARTO_ACV: "https://classroom.google.com/c/MzM3OTQ1ODA5NjUx?cjc=6ldggs3",
            RCP_BEBÉS: "https://classroom.google.com/c/Mjg3OTYzOTMwNTM2?cjc=uxnkyn7",
            HEIMLICH_BEBÉS: "https://classroom.google.com/c/Mjg3OTYzOTMwNTY3?cjc=v4r4loa",
            RCP_ADULTOS: "https://classroom.google.com/c/Mjg3OTYzOTMwNTk2?cjc=d5ewawd",
            HEIMLICH_ADULTOS: "https://classroom.google.com/c/Mjg3OTYzOTM1NzA4?cjc=p5b3ab3"
        }
    };
    const CURRENT_CLASSROOM_JOINS = CLASSROOMS_JOINS_LINKS[classroomColor];
    function descriptionGenerator(choosenClassroom) {
        const c = CURRENT_CLASSROOM_JOINS[choosenClassroom];
        const em = choosenClassroom === "INFARTO_ACV" ? "viernes " + viernes + " a las 18hs"
            :
            choosenClassroom === "RCP_BEBÉS" ? "sábado " + sabado + " a las 18hs"
                :
                choosenClassroom === "HEIMLICH_BEBÉS" ? "sábado " + domingo + " a las 18hs"
                    :
                    choosenClassroom === "RCP_ADULTOS" ? "domingo " + sabado + " a las 21hs"
                        :
                        choosenClassroom === "HEIMLICH_ADULTOS" ? "domingo" + domingo + " a las 21hs"
                            :
                            "ERROR EN em, description generator";
        const d = em.slice(0, -11);
        return "*Recuerde unirse al Classroom* " + c + "\n\n*Enlace para abonar certificados*\nhttps://n9.cl/5y10\n\n*Enlace al encuentro del " + em + "* \nhttps://meet.google.com/ijj-pwnn-itf\n\n*\u00BFQue hacemos luego de inscribirnos, ingresar al Classroom y sumarnos a este grupo de WhatsApp?*\n  \u00B7 Asistir a la charla del " + d + "\n  \u00B7 Estudiar el material del Classroom\n  \u00B7 Entregar una actividad\n\n*Enlaces a todos cursos https://syr.us/ydO*";
    }
    const DESCRIPTION_GROUPS = {
        INFARTO_ACV: descriptionGenerator("INFARTO_ACV"),
        RCP_BEBÉS: descriptionGenerator("RCP_BEBÉS"),
        HEIMLICH_BEBÉS: descriptionGenerator("HEIMLICH_BEBÉS"),
        RCP_ADULTOS: descriptionGenerator("RCP_ADULTOS"),
        HEIMLICH_ADULTOS: descriptionGenerator("HEIMLICH_ADULTOS")
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return {
        presentacion: presentacion,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        opciones: opciones,
        respuestaInstructor: respuestaInstructor,
        ultimoMensaje: ultimoMensaje,
        DESCRIPTION_GROUPS: DESCRIPTION_GROUPS
    };
}
module.exports = {
    textsGenerator: textsGenerator
};
// const {
//   INFARTO_ACV,
//   RCP_BEBÉS,
//   HEIMLICH_BEBÉS,
//   RCP_ADULTOS,
//   HEIMLICH_ADULTOS,
// } = textsGenerator({ viernes: 1, classroomColor: "VERDE" }).DESCRIPTION_GROUPS
