Para levantar servidor seguir los siguientes pasos:

1. npm install

Para instalar las dependencias. Luego crear una base de Datos de PostgreSQL y crear un archivo .env con la variable de DATABASE_URL con la ruta y los datos de la base de datos creada

formato `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/{DB_NAME}`

2. npx prisma migrate dev --name init

Crea la base de datos nueva. Si arroja un error de conexion es porque falla la url de la base de datos

3. npm run dev

Para iniciar el servidor y empezar a hacer requests en el puerto default 5000

4. npx prisma db seed

Para poblar con la data mock

Otros comandos utiles:

- npx prisma migrate reset

Borra la base de datos y carga la info nuevamente dejando la bd en un estado conocido