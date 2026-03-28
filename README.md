# 🍳 Recetas App

Aplicación web fullstack de gestión de recetas de cocina. Permite a los usuarios registrarse, publicar sus propias recetas, explorar las de otros usuarios y gestionar su perfil.

## 🚀 Tecnologías

**Backend**
- Java 25 + Spring Boot 4
- Spring Security + JWT
- Spring Data JPA + Hibernate
- MySQL
- Lombok
- Maven

**Frontend**
- React 19 + TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## ✨ Funcionalidades

- Registro e inicio de sesión con autenticación JWT
- Explorar recetas de todos los usuarios
- Buscador de recetas por título en tiempo real
- Paginación de recetas
- Crear, editar y eliminar tus propias recetas
- Perfil de usuario con tus recetas publicadas
- Rutas protegidas según autenticación

## 📁 Estructura del proyecto

```
recetas-app/
├── backend/          # API REST con Spring Boot
│   ├── src/
│   │   └── main/java/com/dani/recetas/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       ├── model/
│   │       ├── dto/
│   │       ├── mapper/
│   │       ├── exception/
│   │       └── security/
│   └── pom.xml
└── frontend/         # SPA con React + TypeScript
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── services/
    │   └── types/
    └── package.json
```

## ⚙️ Instalación y uso

### Requisitos previos
- Java 25
- Node.js 22+
- MySQL 8

### Base de datos

```sql
CREATE DATABASE recetas_db;
```

### Backend

Configura las variables en `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/recetas_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
jwt.secret=tu_clave_secreta_de_al_menos_32_caracteres
jwt.expiration=86400000
```

Arranca el servidor:

```bash
cd backend
./mvnw spring-boot:run
```

El servidor estará disponible en `http://localhost:8080`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🔐 Endpoints principales de la API

### Autenticación
| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Registro de usuario | ❌ |
| POST | `/api/auth/login` | Inicio de sesión | ❌ |

### Recetas
| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/api/recipes` | Obtener todas las recetas | ✅ |
| GET | `/api/recipes/{id}` | Obtener receta por ID | ✅ |
| POST | `/api/recipes` | Crear receta | ✅ |
| PUT | `/api/recipes/{id}` | Editar receta | ✅ |
| DELETE | `/api/recipes/{id}` | Eliminar receta | ✅ |

### Usuarios
| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/api/users` | Obtener todos los usuarios | ✅ |
| GET | `/api/users/{id}` | Obtener usuario por ID | ✅ |
| GET | `/api/users/me` | Obtener usuario autenticado | ✅ |

### Categorías
| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/api/categories` | Obtener todas las categorías | ✅ |
| POST | `/api/categories` | Crear categoría | ✅ |
| PUT | `/api/categories/{id}` | Editar categoría | ✅ |
| DELETE | `/api/categories/{id}` | Eliminar categoría | ✅ |

## 🔑 Autenticación

La API usa JWT. Para acceder a los endpoints protegidos incluye el token en el header:

```
Authorization: Bearer <token>
```

El token se obtiene al hacer login y expira en 24 horas.
