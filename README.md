# Sistema de Administración  
## FI - UNAM - Departamento de Computación  
## Descripción General

Sistema web para la gestión administrativa del Departamento de Computación.

El proyecto fue migrado a **React** utilizando **Vite** como herramienta de desarrollo moderno, con el objetivo de:

- Mejorar la mantenibilidad del código.
- Facilitar la implementación de diseño responsivo.
- Permitir una estructura modular y escalable.
- Garantizar continuidad técnica para futuras generaciones.

> ⚠️ IMPORTANTE  
> La versión oficial y activa del sistema se encuentra dentro de la carpeta:
>
> ```
> ReactPaginaAdmin
> ```
>
> La carpeta con implementación en HTML, CSS y JavaScript vanilla corresponde a una versión anterior y se mantiene únicamente como referencia histórica.

---

## 🏗 Tecnologías Utilizadas

- React
- Vite
- Node.js
- npm
- HTML5
- CSS3
- JavaScript (ES6+)

---

## 🖥 Requisitos del Entorno

Para ejecutar el proyecto es necesario contar con:

- Node.js (versión LTS recomendada)
- npm

Verificar instalación:

```bash
node -v
npm -v
````

---

## Clonación del Repositorio

```bash
git clone <repository-url>
cd PaginaAdministracion
```

---

## Ejecución en Entorno Local (Desarrollo)

### 1. Acceder al proyecto React

```bash
cd ReactPaginaAdmin
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

Por defecto, Vite ejecutará la aplicación en:

```
http://localhost:5173
```

---

## Visualización en Dispositivos Móviles

Para pruebas responsivas en teléfonos o tabletas:

1. Asegurar que el dispositivo esté conectado a la misma red que el equipo de desarrollo.
2. Ejecutar:

```bash
npm run dev -- --host
```

3. Acceder desde el navegador móvil a la dirección IP local mostrada en la terminal.

---

## Estructura del Proyecto

```
PaginaAdministracion/
│
├── ReactPaginaAdmin/          # Proyecto oficial (React + Vite)
│   ├── src/                   # Código fuente principal
│   ├── public/                # Recursos públicos
│   ├── package.json
│   └── vite.config.js
│
└── (versión anterior vanilla) # Implementación histórica
```

---

## Buenas Prácticas y Lineamientos de Mantenimiento

Para asegurar la continuidad y claridad del proyecto:

### 1. Organización del Código

* Mantener estructura modular por componentes.
* Separar lógica, presentación y estilos.
* Evitar código duplicado.

### 2. Convenciones

* Usar nombres descriptivos en variables y componentes.
* Mantener consistencia en el idioma (preferentemente español).
* Documentar funciones complejas con comentarios claros.

### 3. Control de Versiones

* No subir archivos generados (`node_modules`).
* Utilizar ramas para nuevas funcionalidades.
* Describir adecuadamente los commits.

### 4. Escalabilidad

* Mantener componentes reutilizables.
* Centralizar configuración.
* Documentar nuevas dependencias agregadas.

### 5. Responsividad

* Verificar cambios en:

  * Escritorio
  * Tablet
  * Móvil
* Utilizar herramientas de inspección del navegador.

---

## Licencia

Este proyecto está bajo la:

**Licencia Pública General de GNU v3.0 (GPL-3.0)**

Alineado con las iniciativas de Software Libre de la
**Universidad Nacional Autónoma de México (UNAM)**.

