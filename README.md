# Dashboard Pokémon con Recharts y React

## 1. Título del Proyecto  
"Dashboard Pokémon con Recharts y React"  

## 2. Objetivo  
Crear una aplicación interactiva que muestre estadísticas y datos visuales de los Pokémon, obtenidos desde la PokeAPI, utilizando la biblioteca de gráficos Recharts.  

## 3. Requerimientos Funcionales  

### Interfaz de Usuario  
- Una página principal que liste los Pokémon con sus nombres e imágenes.  

### Gráficos Interactivos  
- Un gráfico de barras que represente las estadísticas base (HP, Ataque, Defensa, etc.) de un Pokémon seleccionado.  
- Un gráfico de radar que muestre una comparación visual de las estadísticas base.    

### Conexión con la API  
- Consumir datos de la PokeAPI.  

## 4. Requerimientos Técnicos  

### Frontend  
- Utilizar React como framework principal.  
- Utilizar Recharts para la representación gráfica.  

### Gestión de Estado  
- Incluir manejo de errores y estados de carga al consumir la PokeAPI.  

### Estilos  
- Diseñar una interfaz responsiva usando TailwindCSS.  
- Agregar transiciones y animaciones básicas para una mejor experiencia del usuario.  

## 5. Detalles Específicos  

### Página Principal (Home)  
- Mostrar una lista de Pokémon con su nombre, imagen y un botón para ver más detalles.  
- Agregar un sistema de paginación o scroll infinito para cargar más Pokémon dinámicamente desde la API.  

### Página de Detalle (Detail)  
- Mostrar información específica del Pokémon seleccionado:  
  - Nombre, imagen, número de la Pokédex.
  - Estadísticas base representadas mediante gráficos interactivos (gráfico de barras o radar).  
- Opción para regresar a la página principal.  
- Implementar manejo de errores si el Pokémon solicitado no existe. 

## 6. Diseño de Componentes  

### Componentes Reutilizables  
- **Card de Pokémon**: Para mostrar la información básica de cada Pokémon en la lista principal.  
- **Loader**: Indicador de carga mientras se obtienen datos de la API.  
- **Gráficos con Recharts**: Componentes independientes para diferentes tipos de gráficos.  

### Componentes Específicos  
- **Lista de Pokémon**: Un componente que renderice múltiples tarjetas con datos básicos.  
- **Detalle de Pokémon**: Un componente que combine gráficos y detalles específicos.  

## 7. Gestión de Datos  

### Obtención de Datos de la API  
- Usar fetch para realizar las llamadas a la PokeAPI.  
- Implementar funciones para:  
  - Obtener la lista de Pokémon (paginada).  
  - Obtener detalles de un Pokémon específico.  

## 8. Detalles Visuales  
  
### Diseño Responsivo  
- Asegurarte de que el diseño funcione bien en dispositivos móviles y pantallas grandes.  
- Usar un diseño limpio con contenedores y márgenes bien definidos.  
