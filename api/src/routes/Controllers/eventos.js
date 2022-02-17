const { Usuario, Eventos } = require("../../db");
require("dotenv").config();


async function createEventos(req, res) {

  const {
    nombre,
    tipo,
    fecha,
    hora,
    participantes,
  } = req.body;

  let participantesDb = participantes.filter((ele, pos) => participantes.indexOf(ele) == pos)

  let i = 0;

  let contadorIngresados = participantes.length;
  let contadorCreados = 0;

  if (participantesDb.length !== 0) {
    let eventoCreado = await Eventos.create({
      nombre,
      tipo,
      fecha,
      hora,
    });
    participantesDb.forEach(async (element) => {
      var descripcionDB = await Usuario.findOne({
        where: { nombre: element },
      });
      if (descripcionDB) {
        eventoCreado.addUsuario(descripcionDB);
        console.log("Usuario creado!")
        contadorCreados = contadorCreados+1
      }
    });
    if (contadorIngresados !== await contadorCreados) {
      res.send().status(200)
    } else {
      res.send().status(204)
     }
  }
  else {
    res.send("participante no existe").status(204)
  }

}



async function getEvent(req, res, next) {
  try {
    const tipo = req.query.tipo;
    if (tipo) {
      let event = await Eventos.findOne({
        where: {
          tipo: tipo,
        },
      });
      event ? res.send(event).status(200) : res.send(null).status(204);
    } else res.send(null);
  } catch (error) {
    next(error);
  }
}




async function updateEvent(req, res, next) {

  const {
    ideventos,
    nombre,
    tipo,
    fecha,
    participantes,
  } = req.body;

  let participantesDb = participantes.filter((ele, pos) => participantes.indexOf(ele) == pos)
  //

  let descripcionDb = await Usuario.findOne({
    where: { nombre: participantesDb },
  });

  let event = await Eventos.findOne({
    where: {
      ideventos: ideventos,
    },
  });

  event.ideventos = ideventos;
  event.nombre = nombre;
  event.tipo = tipo;
  event.fecha = fecha;
  event.participantes = participantes;
  await event.save();

  let event2 = await Eventos.findOne({
    where: {
      ideventos: ideventos,
    },
  });

  res.send(event2);
}


module.exports = { createEventos, getEvent, updateEvent }

