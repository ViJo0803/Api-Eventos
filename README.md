# Api-Eventos

![image](https://user-images.githubusercontent.com/84634814/154584077-9be510d5-070c-4614-a88f-93815f46a9ab.png)
# End points 
http://localhost:3001/user/get/?mail=victorjose1@hotmail.com

http://localhost:3001/user/create

http://localhost:3001/user/update


http://localhost:3001/evento/create

http://localhost:3001/evento/update

http://localhost:3001/evento/get/?tipo=concierto

{
    "nombre":"Victor",
    "apellidos":"Carreno",
    "mail":"victorjose17@hotmail.com",
    "telefono":"945865235"
}



{
    "nombre":"Fiesta en la playa",
    "tipo":"concierto",
    "fecha":"2022-01-20",
    "hora":"16:00",
    "participantes":"Victor"
}

IMPORTANTE:

Crear base de datos con nombre "eventos"

Crear archivo .env afuera de src y adentro de api con sus respectivos USER, PASSWORD y HOST, PORT

Recuerden npm i en cada carpeta

Recuerden npm start para iniciar servers
