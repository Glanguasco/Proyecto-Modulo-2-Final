# 💰 Control de Presupuesto Personal

Una aplicación web simple para gestionar ingresos y gastos personales, desarrollada con JavaScript vanilla y HTML.

## 📖 Descripción

Esta aplicación permite llevar un control básico de finanzas personales mediante el registro de ingresos y gastos, proporcionando análisis automático y cálculos en tiempo real.

## 🗂️ Estructura del Proyecto

```
📁 presupuesto-app/
├── 📄 index.html      # Interfaz de usuario
├── 📄 app.js          # Lógica de la aplicación
└── 📄 README.md       # Documentación
```

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno
- No requiere servidor web

### Instrucciones
1. Descarga todos los archivos en una carpeta
2. Abre `index.html` en tu navegador
3. ¡Comienza a registrar tus movimientos!

## ⚡ Funcionalidades

### Funciones Principales
- ✅ **Registro de movimientos** - Agregar ingresos y gastos
- ✅ **Cálculo automático** - Totales y balance en tiempo real
- ✅ **Análisis inteligente** - Estadísticas y promedios
- ✅ **Historial visual** - Lista de todos los movimientos
- ✅ **Filtros avanzados** - Búsqueda por nombre y rango de valores

### Análisis Incluidos
- 📊 Total de ingresos y gastos
- 📈 Balance general (ingresos - gastos)
- 🎯 Movimiento de mayor y menor valor
- 📋 Contadores de movimientos por tipo
- 💡 Promedios de ingresos y gastos

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura y formularios
- **CSS3** - Estilos y responsive design
- **JavaScript ES6** - Lógica de negocio

### Conceptos de Programación Aplicados
- **Programación Orientada a Objetos** - Constructor `Movimiento` y prototipos
- **Programación Funcional** - Filter, map, reduce
- **Manipulación del DOM** - Actualización dinámica de la interfaz
- **Event Handling** - Gestión de formularios y eventos
- **Arrays y Objetos** - Almacenamiento y procesamiento de datos

## 🏗️ Arquitectura del Código

### Clase Principal
```javascript
function Movimiento(tipo, nombre, valor) {
    this.tipo = tipo;      // "ingreso" o "gasto"
    this.nombre = nombre;  // Descripción
    this.valor = valor;    // Cantidad
    this.fecha = new Date().toLocaleDateString();
}
```

### Funciones de Cálculo
- `calcularIngresos()` - Suma todos los ingresos
- `calcularGastos()` - Suma todos los gastos
- `calcularBalance()` - Diferencia entre ingresos y gastos

### Funciones de Análisis
- `analizarMovimientos()` - Estadísticas completas
- `filtrarPorRango()` - Filtrar por valores mínimo y máximo
- `buscarPorNombre()` - Búsqueda por texto
- `obtenerTop3()` - Los 3 movimientos más altos

### Conexión con HTML
- `agregarMovimiento()` - Interfaz para nuevos registros
- `actualizarInterfaz()` - Refresco de datos en pantalla
- `mostrarMovimientos()` - Visualización de la lista

## 📊 Flujo de Datos

1. **Entrada** → Usuario completa formulario
2. **Procesamiento** → Se crea objeto `Movimiento`
3. **Almacenamiento** → Se añade al array `presupuesto`
4. **Cálculo** → Se ejecutan funciones de análisis
5. **Visualización** → Se actualiza la interfaz HTML

## 🎯 Casos de Uso

### Registro Básico
```javascript
// Ejemplo de uso programático
agregarMovimiento("ingreso", "Salario", 2000);
agregarMovimiento("gasto", "Supermercado", 150);
```

### Consultas y Filtros
```javascript
// Buscar movimientos
buscarPorNombre("salario");
filtrarPorRango(100, 500);
obtenerTop3("gasto");
```

## 🔍 Características Técnicas

### Responsive Design
- Grid CSS para layouts adaptativos
- Diseño mobile-first
- Compatibilidad con diferentes tamaños de pantalla

### Validaciones
- Campos obligatorios en formularios
- Validación de tipos de datos
- Prevención de valores negativos

### Experiencia de Usuario
- Feedback visual inmediato
- Colores diferenciados (verde=ingresos, rojo=gastos)
- Interfaz intuitiva y limpia

## 🚀 Posibles Mejoras Futuras

- 💾 Persistencia de datos (LocalStorage)
- 📅 Filtros por fecha
- 📈 Gráficos y visualizaciones
- 📱 Aplicación móvil
- 🔐 Sistema de usuarios
- 📤 Exportación de datos

## 📚 Conceptos de Desarrollo Web Aplicados

Para estudiantes, este proyecto implementa:

### JavaScript Fundamental
- Variables y funciones
- Arrays y objetos
- Bucles y condicionales
- Programación orientada a objetos

### DOM Manipulation
- `getElementById()` - Captura de elementos
- `addEventListener()` - Gestión de eventos
- `innerHTML` - Modificación de contenido
- Formularios y validación

### CSS Moderno
- Flexbox y Grid
- Variables CSS
- Pseudo-selectores
- Responsive design

### Buenas Prácticas
- Separación de responsabilidades (HTML/CSS/JS)
- Código comentado y organizado
- Nomenclatura clara y consistente
- Funciones reutilizables

## 👨‍💻 Autor

Desarrollado como proyecto de aprendizaje en desarrollo web.

---

⭐ **¡Contribuciones y sugerencias son bienvenidas!**