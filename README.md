# Curso online: Gobernanza de Datos en el Estado de Chile — CONAF

Curso autoinstruccional de 7 módulos, con actividades interactivas, preguntas de control, evaluación final y certificado imprimible. No requiere servidor, base de datos ni librerías externas.

## Cómo usarlo

- **En un computador:** descomprima la carpeta y abra `index.html` con Chrome, Edge o Firefox.
- **Publicado en la intranet o GitHub Pages:** suba la carpeta completa tal cual. No necesita configuración.
- **Avance de cada participante:** se guarda en el navegador (`localStorage`). Si cambia de equipo o borra datos del navegador, el avance se pierde.

## Estructura

```
index.html           Estructura de la página (encabezado, menú, pie)
css/styles.css       Estilos e identidad visual (colores y tipografía en :root)
js/contenido.js      TODO el contenido: módulos, preguntas, glosario y fuentes
js/app.js            Navegación, progreso, quizzes, actividades y certificado
assets/img/          Coloque aquí el logo oficial (ver abajo)
```

## Identidad visual CONAF

- **Logo:** la página busca primero `assets/img/logo-conaf.png`. Si no existe, carga el logo publicado en www.conaf.cl, y si no hay conexión muestra el texto "CONAF". Para uso sin internet o en intranet, copie el logo oficial (proporcionado por Comunicaciones) a `assets/img/logo-conaf.png`.
- **Colores y tipografía:** están en el bloque `:root` al inicio de `css/styles.css`. Se usaron verdes institucionales de CONAF, la franja azul y roja del Gobierno de Chile y la fuente Roboto. Si Comunicaciones tiene códigos exactos del manual de marca, basta con reemplazar esos valores.

## Cómo editar el contenido

Todo el texto está en `js/contenido.js`:

- Cada módulo tiene `titulo`, `duracion`, `icono`, `html` (la lección) y `quiz` (preguntas).
- Cada pregunta es `{ p: "pregunta", op: ["opción A", "opción B", ...], c: índice_correcto, e: "explicación" }` (el índice parte en 0).
- El mínimo para aprobar la evaluación final se cambia en `aprobacionFinal`.
- Las actividades se insertan con `<div data-actividad="nombre"></div>` y están programadas en `app.js`.

## Mantención

El contenido está actualizado al 11 de noviembre de 2026. Antes de cada versión, verifique el estado del proyecto que posterga la Ley 21.719 (boletín 18.623-07) y actualice el Módulo 3 y la línea de tiempo si cambia la fecha.
