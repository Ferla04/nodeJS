# Crear un API REST con buenas practicas
Fuente: https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

## Inicializar proyecto
```
  npm init -y
```

## Instalacion
```
  npm install -D nodemon
  npm i express
  npm i uuid
```
uuid es para la creación de ids aleatorios

## Agregar en el package.json en los scripts
```
  "start": "node src/app.js",
  "dev": "nodemon src/app.js",
```

## Notas
- Tener versionado en rutas