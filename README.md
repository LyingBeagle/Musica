## Nombre del Proyecto : Loom

## Integrantes:

-Alonso Bravo

-Guillermo Castillo

-Ignacio Vera

-Bastian Trejo

## Descripción

El proyecto consiste en el desarrollo de una aplicación social relacionada con la música, en la que los usuarios podrán participar en foros de discusión, gestionar sus perfiles, crear contenido, seguir a otros usuarios y compartir sus experiencias a través de blogs y publicaciones. La plataforma será accesible en dispositivos móviles (iOS y Android) y proporcionará una experiencia fluida tanto para usuarios como para administradores.

## Tabla de Contenidos

1. [Requerimiento Funcionales](#RequerimientoFuncionales)
2. [Requerimiento No Funcionales](#RequerimientoFuncionales)
3. [Prototipado Figma](#prototipadofigma)
4. [Tecnologías](#tecnologías)
5. [Ejecucion Figma](#EjecucionFigma)
6. [Ejecucion Codigo](#EjecucionCodigo)


## Requerimiento Funcionales

### 1. **Foro de Discusión**
- Los usuarios pueden participar en foros organizados por artista, álbum y canción, creando y respondiendo publicaciones.

- Los administradores pueden moderar los foros, eliminando contenido inapropiado o spam

### 2. **Gestión de Perfiles**
- Los usuarios pueden editar su perfil, cambiar su avatar y modificar su información personal y además modificar su contraseña en caso de olvido

- Los administradores pueden gestionar los perfiles de usuarios y restringir cuentas si es necesario.

### 3. **Creación y Gestión de Contenido**
- Los usuarios pueden crear, editar y eliminar sus propios posts.

- Los administradores pueden editar o eliminar cualquier post en caso de infracciones.

### 4. **Blogs**
- Los usuarios pueden publicar experiencias relacionadas con la música.

- Los administradores pueden destacar blogs relevantes o eliminar contenido inadecuado.

### 5. **Interacciones en Publicaciones**
- Los usuarios pueden reaccionar y comentar en posts y blogs.

-Los administradores pueden moderar y eliminar comentarios inapropiados.

### 6. **Valoración de Canciones**
- Los usuarios pueden calificar canciones utilizando un sistema de estrellas (por ejemplo, de 1 a 5 estrellas).

- El sistema calcula automáticamente el promedio de todas las valoraciones recibidas para cada canción
- El promedio de calificación se muestra tanto en la página de la canción como en la del artista correspondiente.

-Los administradores pueden revisar y eliminar valoraciones inapropiadas o sospechosas (por ejemplo, spam o abuso del sistema de puntuación)
---
## Requerimiento No Funcionales
### 1. **Código bien documentado**
- Todo el código debe seguir buenas prácticas y estar documentado para facilitar su mantenimiento.



## Prototipado en Figma

[Prototipo Wireframe](https://www.figma.com/design/c12AqR9wC7sIIHifFiIyvw/Proyecto-web?node-id=0-1&p=f&t=mb0J5meeJrTHRfmV-0)



## Tecnologías

-Ionic Framework

-Angular

-TypeScript

-Html

-Scss

-JavaScript

## Ejecucion Figma 

-Version Movil: Modo "Ajustar Ancho" o "Tamaño real 100%" (recomendado)

-Version Desktop: Modo "Ajustar Ancho" (recomendado)

## Ejecucion Codigo

esta entrega se basa principalmente en el backend de la aplicacion, en el cual los requisitos de instalacion son los siguientes:

-Primero deberes tener instalados los 2 siguientes programas:

-Mysql

-Node.js

Una vez dentro de la aplicacion:

## Instalar Dependencias:

-instalar Node js

## Para Front-end:

- instalar angular:"npm install -g @angular/cli"

## Para Back-end:

-1) "npm install express"

-2) "npm install mysql2" 

-3) "npm install jsonwebtoken"

-4) "npm install cors"

- O es lo ismo instalar "npm install"  que instalara las dependencias necesarias

## Para ejecutar la aplicacion

-RECUERDA TENER TU MYSQL EN EJECUCION

-Puedes editar en la seccion server/config/db.js   tu usuario y contraseña de mysql (nosotros pusimos todo por defecto, excepto la contraseña que es "1234"
  
![image](https://github.com/user-attachments/assets/ba07047b-50de-431c-9f8a-5d95929ee637)

## EJECUTAR BACK-END Y FRONT-END

## PARA BACKEND:

- para iniciar el servidor : "npm start"

## PARA FRONT-END:

-para iniciar el el front: "ionic serve"


## ALGUNO DE LOS ENDPOINT DE LA API(ENTRE LOS MAS UTILES):

- POST/auth/register

- POST/auth/login

- GET/auth/validate

- tambien incluimos para usuario como "get/usuario", "put/usuario/:id ","delete/usuario/:id" y ademas incluimos ENDPOINT para las demas tablas de nuestra base de datos

## ESTRUCTURA DE NUESTRO PROYECTO (ENTREGA BACKEND)

![image](https://github.com/user-attachments/assets/ec208ccf-6bc1-4a28-8f32-f5983aa97e61)


-Cualquier duda por favor contactarse con cualquier alumno de este proyecto, :)






