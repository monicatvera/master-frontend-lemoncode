# Laboratorio Módulo Layout Básico

Este proyecto contiene los ejercicios del Laboratorio del Módulo Layout Básico. Cada ejercicio demuestra conceptos de diseño y desarrollo web utilizando HTML y SCSS.

## Estructura del proyecto

```plaintext
Basico/
├── node_modules/
├── styles/
│   ├── ejercicio1.scss
│   ├── ejercicio2.scss
│   ├── ejercicio3.scss
│   └── ejercicio4.scss
├── .gitignore
├── ejercicio1.html
├── ejercicio2.html
├── ejercicio3.html
├── ejercicio4.html
├── package-lock.json
├── package.json
```


## Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/) en tu máquina.
- Un servidor de desarrollo para visualizar los archivos (por ejemplo, Vite).

## Pasos para ejecutar los ejercicios

### Instalar dependencias

En la carpeta raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

### Iniciar el servidor de desarrollo

Luego, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Acceder a los ejercicios

Una vez iniciado el servidor, abre tu navegador y navega a las siguientes URLs según el ejercicio que desees probar:

- **Ejercicio 1:** [http://localhost:5173/ejercicio1.html](http://localhost:5173/ejercicio1.html)
- **Ejercicio 2:** [http://localhost:5173/ejercicio2.html](http://localhost:5173/ejercicio2.html)
- **Ejercicio 3:** [http://localhost:5173/ejercicio3.html](http://localhost:5173/ejercicio3.html)
- **Ejercicio 4:** [http://localhost:5173/ejercicio4.html](http://localhost:5173/ejercicio4.html)

## Instrucciones para el Ejercicio 2

El **Ejercicio 2** permite cambiar entre dos temas (`temaA` y `temaB`). Para probar ambos modos, sigue estos pasos:

1. Abre el archivo `styles/ejercicio2.scss`.

2. Localiza la línea donde se usa el tema actual:

   ```scss
   @use "temaA" as *; // Cambia a temaA o temaB según necesidad
3. Cambia "temaA" por "temaB" si deseas probar el otro tema.
4. Guarda los cambios y recarga la página en tu navegador.