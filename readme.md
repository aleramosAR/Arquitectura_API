# Mejorar la Arquitectura de nuestra API

* #### **Separar en capas el proyecto que venimos realizando, exponiendo la capa de ruteo, el controlador, la lógica de negocio con los casos de uso y la capa de persistencia.**

El proyecto fue separado en carpetas según la funcionalidad, las carpetas son:

```
/routes
/controllers
/negocio
/model
```

* #### **Crear una factory que permita elegir con qué sistema de almacenamiento voy a trabajar (MongoDB, MySQL, File, Memory, etc), tomando la opción de la línea de comandos.**

Dentro de la carpeta ```/model``` cree 2 archivos, **Mensajes.js** y **Productos.js** que funcionan como Factorys y cargan, según la opción elegida, las clases de la capa de persistencia de cada tipo de base de datos, para esto, dentro de ```/model``` cree 4 subcarpetas, cada una para un tipo diferente de persistencia (memory, file, mongo y mysql), donde se ubican los archivos **Mensajes.js** y **Productos.js** de cada una de las variantes.<br />
La selección se hace desde la línea de comandos, se debe pasar el parámetro al inciar la aplicación, si no se le pasa, el método por defecto es ```memory```.

```
npm start mem
npm start file
npm start mongo
npm start mysql
```

* #### **Cada uno de estos casos de persistencia, deberán ser implementados usando el patrón singleton que impida crear nuevas instancias de estos mecanismos de acceso a los datos.**

Esta implementado el patrón singleton en cada uno de los archivps de persistencia.<br />
Creo las instancias de las clases de persistencia según el tipo de DB de la siguiente manera:

```
MensajesMemory.getInstance();
MensajesFileSystem.getInstance();
MensajesMongo.getInstance();
MensajesMySQL.getInstance();
ProductosMemory.getInstance();
ProductosFileSystem.getInstance();
ProductosMongo.getInstance();
ProductosMySQL.getInstance();
```

* #### **Comprobar que si llamo a la factory dos veces, con una misma opción elegida, devuelva la misma instancia.**

Los testee generando un nro. random en el constructor y creando varias llamadas a la clase con el método ```getInstance()``` y luego testee que el nro. devuelto en todos los casos sea el mismo.