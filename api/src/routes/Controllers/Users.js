
const { Usuario } = require("../../db");
require("dotenv").config();

async function createUser(req, res) {

  const {
    nombre,
    apellidos,
    mail,
    telefono,
    
  } = req.body;

  let mailDb =await Usuario.findOne({
    where:{mail:mail}
  })
if(mailDb){
  res.send("Usuario ya existe con ese mail").status(204);
}else{
  let usuarioCreado = await Usuario.create({
    nombre,
    apellidos,
    mail,
    telefono,
  });
  res.send("Usuario Creado");
}




  
}


async function getUser(req, res, next) {
  try {
    const mail = req.query.mail;
    if (mail){
      let user = await Usuario.findOne({
        where: {
          mail: mail,
        },
      });
      user ? res.send(user).status(200) : res.send(null).status(204);
    }else res.send(null);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {

  const {
    idusuario,
    nombre,
    apellidos,
    mail,
    telefono,
  } = req.body;

  let user = await Usuario.findOne({
    where: {
      idusuario: idusuario,
    },
  });

  user.idusuario = idusuario;
  user.nombre = nombre;
  user.apellidos = apellidos;
  user.mail = mail;
  user.telefono = telefono;
  await user.save();

  let user2 = await Usuario.findOne({
    where: {
      idusuario: idusuario,
    },
  });

  res.send(user2);
}

module.exports = { createUser, getUser, updateUser};
