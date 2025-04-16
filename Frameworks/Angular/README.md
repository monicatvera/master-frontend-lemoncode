# 🧪 Laboratorio Angular - Mini Aplicación con Angular Material

## ✅ Ejercicio Obligatorio - Layout Completo de Mini Aplicación

### Objetivos

- Generación de componentes y servicios usando Angular CLI.
- Integración de Angular Material.
- Implementación de routing.
- Creación de un layout con cabeceras, menús y pie.
- Gestión de estado de autenticación mediante servicios.
- Validación y envío de formularios.

### Enlace de referencia
[Ejemplo orientativo (no exacto)](https://carherco.es/curso-angular-ejercicio-final)

---

### Pasos principales

1. Crear un nuevo proyecto Angular con SCSS y routing.
2. Añadir Angular Material (recomendado hacerlo al inicio).
3. Crear estructura de layout con componentes:
   - Cabecera pública / privada
   - Menú público / privado
   - Footer
   - Páginas enrutadas: `Home`, `Login`, `Acerca de`, `Dashboard`, `Galería`, `CRUD`, `Profile`
4. Configurar rutas para cada una de las páginas.
5. Crear formulario de login con validaciones (username/password).
6. Crear servicio `AuthService` con métodos:
   - `login({ username, password }): boolean`
   - `logout()`
   - `isLogged()`
   - `getUsername()`
7. Redirigir al dashboard si el login es exitoso.
8. Mostrar menú público o privado según el estado del login.
9. Mostrar botón de logout y el username cuando el usuario está logueado.
10. 💡 **RETO**: Añadir persistencia de estado en `localStorage`.

---

## 🎨 Ejercicio Opcional - Galería de Fotos

### Objetivos

- Manejo de bindings y directivas estructurales.
- Uso de recursos estáticos en `assets`.
- Implementación de una galería con funcionalidades interactivas.

### Estructura

1. Guardar al menos 8 fotos en `src/assets`.
2. Crear una lista de objetos de imagen con `id`, `src` y `title`.
3. Dividir la galería en 3 bloques:
   - Imagen seleccionada
   - Miniaturas
   - Botonera (Anterior, Siguiente, Aumentar, Disminuir, Play, Stop)
4. Funcionalidades:
   - Navegación entre imágenes
   - Aumento y reducción de tamaño
   - Reproducción automática de imágenes
   - Mostrar botones según estado (play/stop)
5. 💡 **RETOS**:
   - Resaltar la imagen seleccionada.
   - Paginación del listado con `slice`.
   - Implementar directiva `rotate` para rotar imágenes con clic.

---

## 🔁 Ejercicio Opcional - Directiva Rotate

### Objetivos

- Crear una directiva personalizada para rotar imágenes.
- Parametrización con `@Input()`.
- Manejo de eventos con `@HostListener`.

### Uso

```html
<img rotate />
<img rotate="45" />
<img rotate="45" step="15" />
