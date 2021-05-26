# Prueba técnica Asesoftware

## Sobre la App

La app consta de dos vistas, la primera que lista los usuarios y la segunda muestra información detallada del usuario.
Para la implementación de la UI se usó material-ui para simplificar y agilizar la maquetación de la app.
Para la API se usó json-server. La base de datos se puede ver en la carpeta /src/server/database.json.
Para el consumo de la API se usa axios.
El proyecto hace uso de react router para la implementación de rutas.

## Descripción del código

### configuración de axios

En el archivo src/utils/api.js se crea una clase de axios y en la carpeta src/config/apiClient se crea una nueva instancia de esta clase. Esto en este proyecto tan pequeño es tal vez inecesario y se podría importar axios directamente donde se consumen los servicios. Sin embargo este tipo de configuración la hago por costumbre porque luego me parece más elegante cuando es necesaria la implementación de fucionalidades adicionales o interceptores.
En la carpeta src/utils/api se implementan los servicios necesarios para consumir la API.
En la carpeta components se hace la implementación de las vistas y la vista principal donde se renderizan las rutas.

## Ejecución de la App

Previamente a la ejecución de la App se deben instalar sus dependencias con el comando:
`npm install`.

Para correr la app se debe ejecutar el comando:
`npm run dev`

Este comando ejecutará el front por defecto en el puerto 3000 y el servidor de json-server en el puerto 8001.
