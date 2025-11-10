# Sistema MOPED - Documentación
Sistema de Monitoreo Pedagógico y Gestión Educativa

## 🚀 Estado Actual del Desarrollo
El sistema MOPED ha sido desarrollado con las siguientes funcionalidades:

### ✅ Funcionalidades Implementadas

#### 1. Sistema de Autenticación
- Login único para todos los usuarios
- 3 roles de usuario:
  - ADMIN: Acceso total al sistema
  - SUPER ESPECIALISTA: Visualización de todos los gráficos
  - ESPECIALISTA: Registro de fichas y visualización de gráficos propios

#### 2. Dashboards por Rol
- **Dashboard Administrador** (`/admin`)
  - Gestión de usuarios
  - Sistema MOPED (ver todas las fichas)
  - Repositorio de documentos
  - Noticias y contenido
  - Redes educativas
  - Configuración del sistema
- **Dashboard Super Especialista** (`/super-especialista`)
  - Visualización de todos los gráficos
  - Filtrado por especialista
  - Filtrado por nivel educativo
  - Filtrado por momento
  - Filtrado por red educativa
- **Dashboard Especialista** (`/especialista`)
  - Registro de las 3 fichas de monitoreo
  - Visualización de IEs asignadas
  - Gráficos estadísticos propios
  - Control de progreso por momento

#### 3. Sistema de Fichas MOPED
- **Ficha de Gestión Pedagógica**
  - 23 ítems de evaluación
  - Escala Likert de 4 niveles: Inicio, Proceso, Logrado, Destacado
  - Campos completos de IE, fechas, alumnos por nivel
  - Recomendaciones y compromisos
- **Ficha de Planificación Curricular**
  - 13 ítems de evaluación
  - Escala de 3 niveles: Inicio, Proceso, Logrado
  - Incluye nombre del docente observado
  - Campos completos de alumnos y discapacidad por nivel
- **Ficha de Desempeño Docente**
  - 5 ítems de evaluación
  - Escala Likert de 4 niveles: Inicio, Proceso, Logrado, Destacado
  - Incluye nombre del docente observado
  - Campos completos de IE y alumnos

#### 4. Sistema de Gráficos Estadísticos
- Para Especialistas:
  - Gráficos de barras con porcentajes por ítem
  - Visualización por tipo de ficha (tabs)
  - Colores diferenciados por nivel:
    - Rojo: Inicio
    - Amarillo: Proceso
    - Azul: Logrado
    - Verde: Destacado
  - Contador de fichas registradas

#### 5. Sistema de Configuración
- Configuración de Momentos:
  - Establecer el momento actual (1, 2 o 3)
  - Activar/desactivar cada momento
  - Configurar el año actual
  - Ver estadísticas del sistema

#### 6. Estructura de Base de Datos
La base de datos está organizada en:
- Usuarios: con roles y asignaciones
- Redes Educativas (REI): 16 redes configuradas
- Fichas: 3 tipos de fichas de monitoreo
- Configuración: momentos y año actual
- IEs Asignadas: control por especialista y momento

## 📝 Credenciales de Prueba
- **Administrador**
  - Usuario: `admin`
  - Contraseña: `admin123`
- **Super Especialista**
  - Usuario: `super`
  - Contraseña: `super123`
- **Especialista**
  - Usuario: `especialista1`
  - Contraseña: `esp123`

## 🔄 Flujo de Trabajo

### 1. Admin configura el sistema:
- Establece el momento actual
- Activa/desactiva momentos
- Asigna IEs a especialistas

### 2. Especialista registra fichas:
- Selecciona una IE asignada
- Completa los ítems de evaluación
- Guarda la ficha
- La IE se marca como completada para ese momento

### 3. Especialista visualiza gráficos:
- Ve estadísticas de sus propias fichas
- Analiza porcentajes por ítem
- Identifica áreas de mejora

### 4. Super Especialista analiza:
- Ve todos los gráficos
- Filtra por especialista
- Compara resultados

### 5. Admin supervisa:
- Ve todas las fichas
- Analiza estadísticas generales
- Gestiona el sistema completo

## 🎨 Diseño

### Colores principales:
- Admin: Azul
- Super Especialista: Púrpura
- Especialista: Verde

- Tema: Oscuro para login, claro para dashboards
- Componentes: shadcn/ui para UI consistente
- Responsive: Diseño adaptable a móviles y tablets

## 📊 Características de los Gráficos
- Barras horizontales con porcentajes
- Colores intuitivos por nivel
- Contador de respuestas por ítem
- Organización por tabs
- Sin datos iniciales (se muestran al registrar fichas)

## 🔧 Tecnologías Utilizadas
- Framework: Next.js 15
- UI Library: shadcn/ui + Radix UI
- Estilos: Tailwind CSS
- Notificaciones: Sonner
- Iconos: Lucide React
- Base de datos: JSON (temporal, puede migrarse a base de datos real)

## 🚧 Funcionalidades Pendientes

### Gestión de Usuarios (Admin)
- Crear nuevos usuarios
- Editar usuarios existentes
- Asignar IEs a especialistas
- Eliminar usuarios

### Repositorio de Documentos
- Subir PDFs
- Agregar enlaces de YouTube
- Categorías dinámicas
- Sistema de búsqueda

### CMS para Noticias
- Crear/editar noticias
- Página principal pública
- Categorías (Acontecimientos, Monitoreo, Concursos)

### Gráficos Avanzados
- Filtrado por nivel educativo
- Filtrado por red educativa
- Exportación a Excel/PDF
- Gráficos comparativos

### Gestión de Redes Educativas
- CRUD completo de redes
- Asignación de IEs a redes
- Visualización por red

## 💡 Recomendaciones Futuras

### Base de Datos Real:
- Migrar de JSON a PostgreSQL o MongoDB
- Implementar autenticación con JWT
- Hash de contraseñas con bcrypt

### Almacenamiento de Archivos:
- Usar servicios como AWS S3 o Cloudinary
- Implementar sistema de cuotas

### Exportación de Datos:
- Generar reportes en PDF
- Exportar gráficos a Excel
- Backup automático de datos

### Notificaciones:
- Email cuando se abre un nuevo momento
- Recordatorios para completar fichas
- Alertas para administradores

### Auditoría:
- Registro de cambios
- Historial de ediciones
- Logs de acceso

## 📱 Características Responsivas
- Adaptado para dispositivos móviles
- Tablets y escritorio
- Menús colapsables
- Grids adaptables

## 🎯 Próximos Pasos
- Implementar gestión de usuarios
- Crear repositorio de documentos
- Desarrollar CMS para noticias
- Agregar más filtros a gráficos
- Implementar sistema de reportes
- Migrar a base de datos real (producción)
