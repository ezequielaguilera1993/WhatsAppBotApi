
export type upDateBotValuesType = {
  certiX1?: number
  certiX2?: number
  certiX3?: number
  certiX4?: number
  certiX5?: number
  viernes: number
  sabado: number
  domingo: number
  classroomColor: "GRIS" | "VERDE" | "AZUL"
}

type cs = {
  RCP_BEB脡S: string,
  RCP_ADULTOS: string,
  HEIMLICH_BEB脡S: string,
  HEIMLICH_ADULTOS: string,
  INFARTO_ACV: string,
}

export type textType = {
  presentacion: string
  info1: string
  info2: string
  info3: string
  info4: string
  opciones: string
  respuestaInstructor: string
  ultimoMensaje: string,
  DESCRIPTION_GROUPS: cs
}

function textsGenerator({
  certiX1 = 800,
  certiX2 = 1000,
  certiX3 = 1200,
  certiX4 = 1400,
  certiX5 = 1600,
  viernes,
  sabado,
  domingo,
  classroomColor
}: upDateBotValuesType): textType {



  //Autoresponse mensages/////////////////////////////////////////////////////////////////////////////////////////

  const presentacion = `*馃 Le dejo mas info sobre todos los cursos*
*1)* C贸mo inscribirse de forma gratuita (sin certificado)
*2)* C贸mo inscribirse de forma paga (con certificado) y costos de los certificados
*3)* C贸mo son los cursos, duraci贸n, pasos a seguir etc.
*4)* Cuando empiezan los cursos`


  const info1 = `*1) Inscripci贸n gratuita (sin certificado)* 
Acceda a este enlace https://docs.google.com/document/d/1H8DsbU-qfeIijVni4zrfG_ND1ugv_gNHq2x8dvFyiQU/edit?usp=sharing y s煤mese a todos los cursos que desee. *Importante: recuerde unirse al grupo de Whatsapp y Classroom de cada curso*
`

  const info2 = `*2) Inscripci贸n paga (con certificado)*
Debe abonar los certificados que desee y luego sumarse a los cursos
*Modelos de Certificado* https://photos.app.goo.gl/Grm54bW161weeXB26
*Promoci贸n por pre-inscripci贸n (hasta el lunes ${domingo + 1} inclusive)*
鈥? *Un (1)* Certificado *${certiX1}$* https://mpago.la/2pwTDcY
鈥? *Dos (2)* Certificados *${certiX2}$* (${certiX2 / 2}$ cada certificado)* 鉃ttps://mpago.la/1noxX9Y
鈥? *Tres (3)* Certificados *${certiX3}$* (${certiX3 / 3}$ cada certificado)* 鉃ttps://mpago.la/2RKS4fA
鈥? *Cuatro (4)* Certificados *${certiX4}$* (${certiX4 / 4}$ cada certificado)* 鉃ttps://mpago.la/1eQvfze
鈥? *Cinco (5)* Certificados *${certiX5}$* (${certiX5 / 5}$ cada certificado)* 鉃ttps://mpago.la/234vbAd
En total puede abonar hasta 5 certificados (porque son 5 cursos). Si abona menos de 5 certificados, deber谩 elegir en qu茅 cursos utilizar el comprobante.
*Luego de abonar debe unirse a los cursos que desee por los enlaces p煤blicos de uni贸n  https://docs.google.com/document/d/1H8DsbU-qfeIijVni4zrfG_ND1ugv_gNHq2x8dvFyiQU/edit?usp=sharing*

*Formas de pago*
鈥? D茅bito
鈥? Cr茅dito
鈥? Efectivo desde un Rapipago, Pago Facil, Kiosco o Provincia Net Pagos
鈥? Transferencias desde cuentas de mercado pago

Tambi茅n puede abonarlos mediante una transferencia bancaria al 0140389103703753820095`

  const info3 = `*3) Sobre los cursos*

*Duraci贸n*: dos semanas

*Pasos para realizar los cursos*
*1)* Asistir a un encuentro virtual (o en su defecto ver la grabaci贸n), y conseguir un mu帽eco almohad贸n o frazada enrollada para practicar (para Acv/Infarto no es necesario) 
*2)* Acceder a un Classroom 
*3)* Presentar una actividad. 
*4)* Marcar la tarea como completada
*5) (opcional)* Si abonaron el certificado les estar谩 llegando firmado digitalmente, en calidad de impresi贸n y con doble c贸digo de autenticidad a su casilla de mail en menos de 1 hora

*En el Classroom de cada curso tambi茅n encontrar谩n*
鈥? Protocolos para imprimir
鈥? Todas las im谩genes vistas en el curso en un PDF
鈥? La grabaci贸n del encuentro
鈥? Videos con contenido extra
鈥? Un video que explica de forma concisa la fisiologia humana (y un cup贸n gratuito para un curso de fisiolog铆a humana)
`

  const info4 = `*4) Por cada curso de dictar谩 una clase virtual, luego deberan realizar actividades en un Classroom (un Classroom es un aula virtual).*

*Dias y horario de cada clase virtual (sea el caso que no pueda asistir, recuerde que las clases quedan grabadas)*

1鈥? *Acv/Infarto*  viernes ${viernes} a las 18hs

2鈥? *RCP en Beb茅s* S谩bado ${sabado} a las 18hs

3鈥? *Maniobra de Heimlich en Beb茅s* (para asistir en caso de atragantamiento) S谩bado ${sabado} a las 21hs

4鈥? *RCP en Adultos* Domingo ${domingo} a las 18hs

5鈥? *Maniobra de Heimlich en adultos* (para asistir en caso de atragantamiento) Domingo ${domingo} a las 21hs
`

  const opciones = `鈥? Envie un *1* para saber c贸mo inscribirse de forma gratuita (sin certificado)
鈥? Envie un *2* para saber c贸mo inscribirse de forma paga (con certificado) y para saber cuando cuestan los certificados
鈥? Envie un *3* para saber c贸mo son los cursos, duraci贸n, pasos a seguir etc.
鈥? Envie un *4* para saber horarios del encuentro virtual de cada curso
鈥? Envie un *5* para saber de donde somos
鈥? Envie un *6* para saber si las clases son virtuales
鈥? Envie un *7* para saber cuanto tarda en llegar el certificado
鈥? Envie un *8* para ver modelos de certificados`

  const respuestaInstructor = `馃 *Los instructores se contactaran con usted cuando sea posible (estamos atendiendo muchas consultas)* 鈴? \n_Mientras tanto puede consultarme a mi lo que desee_
         
*Escriba el numero sin letras o n煤meros adicionales, luego envie el mensaje y le llegara la info que precisa.*
  
${opciones}

    *馃 IMPORTANTE* si contesta algo diferente a lo de esta lista no podre responderle de manera adecuada.

    _Los instructores se contactaran a la brevedad_
`

  const ultimoMensaje = `*馃 Si le qued贸 una duda envieme un mensaje con algunos de las siguientes opciones para tener mas informacion*

_Escriba a los n煤meros sin letras o n煤meros adicionales, luego envie el mensaje y le llegara la info que precisa._
        
鈥? Escriba la palabra *instructor* si desea hablar un tema en especifico con los instructores
${opciones}

 *馃 IMPORTANTE* si contesta algo diferente a lo de esta lista no podre responderle de manera adecuada. Recuerde que si desea con alguno de los instructores debe enviar la palabra *instructor* como mensaje, yo me encargo de avisarle. 馃摤
`
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  //Description text/////////////////////////////////////////////////////////////////////////////////////////
  //Classrooms
  const CLASSROOMS_JOINS_LINKS: {
    [key in "VERDE" | "GRIS" | "AZUL"]: cs
  } = {
    GRIS: {
      INFARTO_ACV: "https://classroom.google.com/c/MzA5NDAxMzU3MTQ0?cjc=zoukjja",
      RCP_BEB脡S: "https://classroom.google.com/c/Mjg2MjMwNTE2Mzkw?cjc=h5lhp3o",
      HEIMLICH_BEB脡S: "https://classroom.google.com/c/Mjg2MjMwNTE2NDM0?cjc=pcpgrbb",
      RCP_ADULTOS: "https://classroom.google.com/c/Mjg2MjMxMjE0OTE4?cjc=pekrmlw",
      HEIMLICH_ADULTOS: "https://classroom.google.com/c/Mjg2MjMxMjE0OTUy?cjc=iic7vyd",
    },
    VERDE: {
      INFARTO_ACV: "https://classroom.google.com/c/MzIxNTk0ODUwMTQ1?cjc=2lesail",
      RCP_BEB脡S: "https://classroom.google.com/c/NTg1MTUzNzYwODha?cjc=k2oba6l",
      HEIMLICH_BEB脡S: "https://classroom.google.com/c/Mjc5OTMxODU2NjI1?cjc=7vnkaks",
      RCP_ADULTOS: "https://classroom.google.com/c/NTg1MTAxNDA3OTVa?cjc=ppsjce7",
      HEIMLICH_ADULTOS: "https://classroom.google.com/c/NTg1MTAxNDA4NTNa?cjc=ohlxgyj",
    },
    AZUL: {
      INFARTO_ACV: "https://classroom.google.com/c/MzM3OTQ1ODA5NjUx?cjc=6ldggs3",
      RCP_BEB脡S: "https://classroom.google.com/c/Mjg3OTYzOTMwNTM2?cjc=uxnkyn7",
      HEIMLICH_BEB脡S: "https://classroom.google.com/c/Mjg3OTYzOTMwNTY3?cjc=v4r4loa",
      RCP_ADULTOS: "https://classroom.google.com/c/Mjg3OTYzOTMwNTk2?cjc=d5ewawd",
      HEIMLICH_ADULTOS: "https://classroom.google.com/c/Mjg3OTYzOTM1NzA4?cjc=p5b3ab3",
    }
  }

  const CURRENT_CLASSROOM_JOINS = CLASSROOMS_JOINS_LINKS[classroomColor]

  function descriptionGenerator(choosenClassroom:
    "RCP_BEB脡S" |
    "RCP_ADULTOS" |
    "HEIMLICH_BEB脡S" |
    "HEIMLICH_ADULTOS" |
    "INFARTO_ACV"
  ) {

    const c = CURRENT_CLASSROOM_JOINS[choosenClassroom]
    const em =
      choosenClassroom === "INFARTO_ACV" ? "viernes " + viernes + " a las 18hs"
        :
        choosenClassroom === "RCP_BEB脡S" ? "s谩bado " + sabado + " a las 18hs"
          :
          choosenClassroom === "HEIMLICH_BEB脡S" ? "s谩bado " + domingo + " a las 18hs"
            :
            choosenClassroom === "RCP_ADULTOS" ? "domingo " + sabado + " a las 21hs"
              :
              choosenClassroom === "HEIMLICH_ADULTOS" ? "domingo" + domingo + " a las 21hs"
                :
                "ERROR EN em, description generator"

    const d = em.slice(0, -11)

    return `*Recuerde unirse al Classroom* ${c}

*Enlace para abonar certificados*
https://n9.cl/5y10

*Enlace al encuentro del ${em}* 
https://meet.google.com/ijj-pwnn-itf

*驴Que hacemos luego de inscribirnos, ingresar al Classroom y sumarnos a este grupo de WhatsApp?*
  路 Asistir a la charla del ${d}
  路 Estudiar el material del Classroom
  路 Entregar una actividad

*Enlaces a todos cursos https://syr.us/ydO*`
  }

  const DESCRIPTION_GROUPS: cs = {
    INFARTO_ACV: descriptionGenerator("INFARTO_ACV"),
    RCP_BEB脡S: descriptionGenerator("RCP_BEB脡S"),
    HEIMLICH_BEB脡S: descriptionGenerator("HEIMLICH_BEB脡S"),
    RCP_ADULTOS: descriptionGenerator("RCP_ADULTOS"),
    HEIMLICH_ADULTOS: descriptionGenerator("HEIMLICH_ADULTOS"),
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return {
    presentacion,
    info1,
    info2,
    info3,
    info4,
    opciones,
    respuestaInstructor,
    ultimoMensaje,
    DESCRIPTION_GROUPS
  }

}

module.exports = {
  textsGenerator,
}



// const {
//   INFARTO_ACV,
//   RCP_BEB脡S,
//   HEIMLICH_BEB脡S,
//   RCP_ADULTOS,
//   HEIMLICH_ADULTOS,
// } = textsGenerator({ viernes: 1, classroomColor: "VERDE" }).DESCRIPTION_GROUPS



