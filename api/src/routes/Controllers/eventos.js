const { Usuario,Eventos} = require("../../db");
require("dotenv").config();


async function createEventos(req, res) {
  
  const {    
    nombre,
    tipo,
    fecha,
    hora,
    participantes,
  } = req.body;

 
  let participantesDb=participantes.filter((ele,pos)=>participantes.indexOf(ele)==pos)
//

 let descripcionDb = await Usuario.findOne({
    where: { nombre: participantesDb },
  });

  if (descripcionDb!==null){
    let eventoCreado = await Eventos.create({
      nombre,
      tipo,
      fecha,
      hora,
    });
    eventoCreado.addUsuario(descripcionDb);
    res.send("Evento creado con exito")
  }
  else {res.send("participante no existe").status(204)
  //add viene de sequelize
  //eventoCreado.addUsuario(participantesDb)
  }
  
}



async function getEvent(req, res, next) {
  try {
    const tipo = req.query.tipo;
    if (tipo){
      let event = await Eventos.findOne({
        where: {
          tipo: tipo,
        },
      });
      event ? res.send(event).status(200) : res.send(null).status(204);
    }else res.send(null);
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
  
  let participantesDb=participantes.filter((ele,pos)=>participantes.indexOf(ele)==pos)
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


module.exports = {createEventos, getEvent,updateEvent}

