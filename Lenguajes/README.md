
# Laboratorio Módulo Lenguajes

Esta carpeta contiene los ejercicios del módulo de Lenguajes del máster, diseñados para practicar habilidades con JavaScript y TypeScript.

## Estructura del proyecto

```plaintext
Lenguajes/
├── node_modules/         # Dependencias del proyecto
├── src/                  # Carpeta principal con el código fuente
│   ├── 02-entregables/   # Ejercicios del módulo
│       ├── ejercicio-01.ts
│       ├── ejercicio-02.ts
│       ├── ejercicio-03.ts
│       ├── ejercicio-04.ts
│       ├── ejercicio-05.ts
├── .gitignore            # Archivos y carpetas ignorados por Git
├── bs-config.json        # Configuración para browser-sync
├── package-lock.json     # Archivo de dependencias bloqueadas
├── package.json          # Archivo de configuración de npm
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Archivo de documentación
```

## Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/) en tu máquina.

## Pasos para ejecutar los ejercicios

### 1. Instalar dependencias

En la carpeta raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

### 2. Transpilar los archivos TypeScript

Ejecuta el siguiente comando para transpilar los archivos `.ts` ubicados en `src/02-entregables` a archivos `.js`:

```bash
npm run transpile
```

Los archivos transpilados se guardarán en la carpeta configurada en tu proyecto, que generalmente será `transpiled`.

### 3. Ejecutar los archivos JavaScript

Una vez que los archivos TypeScript han sido transpilados, puedes ejecutar cada ejercicio usando Node.js. Por ejemplo:

```bash
node transpiled/ejercicio-01.js
```

Reemplaza `ejercicio-01.js` por el nombre del archivo que deseas ejecutar.

## Notas adicionales

- Si necesitas hacer cambios en los archivos TypeScript, recuerda volver a transpilar usando el comando `npm run transpile` antes de ejecutar los ejercicios.
- Para asegurarte de que los cambios sean consistentes, verifica la estructura generada en la carpeta `transpiled`.

---

Con esta configuración, tendrás todo lo necesario para trabajar y probar tus ejercicios del módulo de Lenguajes.