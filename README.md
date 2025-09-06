¡Genial! 🚀 Aquí tienes un **README.md** listo para tu proyecto `node-docker-hello`. Incluye instrucciones claras para **DEV** (hot-reload) y **PROD** (imagen empaquetada).

---

## `README.md`

```markdown
# 🚀 Node.js + Docker Hello

Ejemplo sencillo de cómo correr una API **Node.js con Express** dentro de Docker:

- **Modo DEV** → usando `docker-compose.yml` (hot-reload, dependencias se instalan en cada arranque).
- **Modo PROD** → usando `Dockerfile` + `docker-compose.prod.yml` (imagen propia, lista para portar a cualquier máquina/servidor).

---

## 📂 Estructura

```

node-docker-hello/
├─ src/
│  └─ index.js
├─ package.json
├─ Dockerfile
├─ docker-compose.yml
├─ docker-compose.prod.yml
├─ .gitignore
└─ .dockerignore

````

---

## 🛠️ Requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)  
- Git (para clonar este repo)

---

## 🔹 Modo Desarrollo (hot-reload con Compose)

```bash
docker compose up
````

* API disponible en [http://localhost:3000](http://localhost:3000)
* Edita `src/index.js` y los cambios se aplican automáticamente gracias a **nodemon**.
* Para detener: `Ctrl+C` o:

```bash
docker compose down
```

⚠️ En este modo NO se usa el `Dockerfile`, sino la imagen oficial `node:20-alpine`.

---

## 🔹 Modo Producción (imagen empaquetada con tu código)

### Con Compose (recomendado)

```bash
docker compose -f docker-compose.prod.yml up -d --build
docker compose -f docker-compose.prod.yml logs -f
```

* API disponible en [http://localhost:3000](http://localhost:3000)
* Para detener:

```bash
docker compose -f docker-compose.prod.yml down
```

### Manual (sin Compose)

```bash
# construir la imagen
docker build -t node-docker-hello:1.0 .

# correr contenedor
docker run -p 3000:3000 node-docker-hello:1.0
```

---

## 📦 Publicar imagen en un registry

Ejemplo con Docker Hub:

```bash
# loguearse
docker login

# taggear la imagen
docker tag node-docker-hello:1.0 TU_USUARIO/node-docker-hello:1.0

# publicar
docker push TU_USUARIO/node-docker-hello:1.0
```

Ahora cualquier persona puede correr tu app con:

```bash
docker run -p 3000:3000 TU_USUARIO/node-docker-hello:1.0
```

---

## 📚 Comandos útiles

```bash
docker ps            # contenedores activos
docker ps -a         # todos (incluyendo detenidos)
docker images        # ver imágenes locales
docker logs -f <id>  # logs de un contenedor
docker exec -it <id> sh   # shell dentro del contenedor
docker stop <id>     # parar contenedor
docker rm <id>       # borrar contenedor
docker rmi <id>      # borrar imagen
```

---

## 📝 Notas

* `docker-compose.yml` → para **desarrollo** (hot-reload).
* `docker-compose.prod.yml` → para **producción** (empaquetado con `Dockerfile`).
* `.dockerignore` asegura que archivos innecesarios (`node_modules`, `.git`, etc.) no entren en la imagen.

---

```

---


