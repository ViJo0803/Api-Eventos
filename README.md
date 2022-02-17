# Api-Eventos

![image](https://user-images.githubusercontent.com/84634814/154584077-9be510d5-070c-4614-a88f-93815f46a9ab.png)
# End points 

# Buscar participante por correo
http://localhost:3001/user/get/?mail=victorjose1@hotmail.com
# Crear participante
http://localhost:3001/user/create
# Modificar participante 
http://localhost:3001/user/update

# Crear eventos
http://localhost:3001/evento/create
# Modificar evento
http://localhost:3001/evento/update
# Buscar evento
http://localhost:3001/evento/get/?tipo=concierto

# Json para crear participante

{
    "nombre":"Victor",
    "apellidos":"Carreno",
    "mail":"victorjose17@hotmail.com",
    "telefono":"945865235"
}

# Json para crear evento

{
    "nombre":"Fiesta en la playa",
    "tipo":"concierto",
    "fecha":"2022-01-20",
    "hora":"16:00",
    "participantes":["Victor"]
}

IMPORTANTE:

Crear base de datos con nombre "eventos"

Crear archivo .env afuera de src y adentro de api con sus respectivos USER, PASSWORD y HOST, PORT

Recuerden npm i en cada carpeta

Recuerden npm start para iniciar servers.

La api cuenta con validaciones 
