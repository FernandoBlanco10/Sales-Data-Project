# 📊 Sales API & Analytics Pipeline (Backend + Data Engineering Project)

**Autor:** Fernando Blanco

Proyecto integral que combina **desarrollo backend** e **ingeniería de datos**, simulando un flujo real de negocio: desde la creación de usuarios, productos y ventas mediante una API segura, hasta la generación de métricas analíticas con un proceso ETL en Python.

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)]
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)]
[![Sequelize](https://img.shields.io/badge/Sequelize-6.x-52B0E7?logo=sequelize&logoColor=white)]
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-336791?logo=postgresql&logoColor=white)]
[![JWT](https://img.shields.io/badge/JWT-Authentication-000000?logo=jsonwebtokens&logoColor=white)]
[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?logo=python&logoColor=white)]
[![Pandas](https://img.shields.io/badge/Pandas-Data%20Analysis-150458?logo=pandas&logoColor=white)]
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-D71F00?logo=sqlalchemy&logoColor=white)]

---

## 📌 Descripción general

Este proyecto implementa un **flujo completo backend + data engineering** que permite:

- Gestionar usuarios, productos y ventas mediante una **API REST segura**.
- Proteger endpoints usando **JWT**.
- Persistir datos transaccionales en **PostgreSQL**.
- Ejecutar un **proceso ETL en Python** para generar métricas analíticas.
- Crear tablas agregadas listas para análisis y reporting

El objetivo es simular un **escenario real de sistemas empresariales**, donde conviven un sistema OLTP (API) y un proceso analítico (ETL).

---

## 🧱 Arquitectura del proyecto

```bash
sales-data-project/
│
├── backend/                 # API REST (Node.js)
│   ├── src/
│   │   ├── config/           # Configuración DB
│   │   ├── models/           # Modelos Sequelize
│   │   ├── routes/           # Rutas API
│   │   ├── controllers/      # Lógica de negocio
│   │   ├── middlewares/      # Auth JWT
│   │   └── app.js
│   └── package.json
│
├── data_pipeline/            # ETL en Python
│   ├── etl_sales.py
│   └── requirements.txt
│
└── README.md
```


## 🔄 Flujo de datos


1. **Autenticación**
    
    -   Los usuarios se registran y hacen login.
    -   Se genera un **JWT** que protege las rutas críticas.
  
        
2.  **Ingesta (OLTP)**
    
    -   Se crean productos y ventas mediante la API.
    -   Cada venta:
        
        -   Está asociada a un usuario.
        -   Está asociada a un producto.
        -   Calcula automáticamente el total.

            
3.  **Persistencia**
    
    -   Los datos transaccionales se almacenan en **PostgreSQL**.
    -   Se usan claves primarias y foráneas.
    -   Sequelize actúa como ORM.
  
        
4.  **ETL (OLAP)**
    -   Un script en **Python**:
        -   Extrae ventas desde PostgreSQL     
        -   Limpia y convierte tipos          
        -   Agrega métricas diarias            
        -   Crea una tabla analítica (`sales_summary`)


5.  **Análisis**
    
    -   La tabla agregada queda lista para:
        -   Dashboards            
        -   BI           
        -   Reportes
            

----------

## 🗄️ Base de datos

### Modelos principales

-   **User**
    
-   **Product**
    
-   **Sale**
    

### Relaciones

-   Un usuario tiene muchas ventas. 
-   Un producto tiene muchas ventas.    
-   Cada venta pertenece a un usuario y a un producto.
    

### Tabla analítica

| columna      | descripción                    |
| ------------ | ------------------------------ |
| fecha        | Fecha de la venta              |
| num_ventas   | Número total de ventas del día |
| total_ventas | Monto total vendido            |

----------

## 🔐 Autenticación (JWT)

-   Login genera un token JWT 
-   El token se envía en el header:    
`Authorization: Bearer <token>` 
-   Las siguientes rutas están protegidas:    
    -   Crear productos        
    -   Registrar ventas        
    -   Consultar ventas
        

----------

## 🔄 ETL en Python

El script `etl_sales.py` realiza:

1.  **Extract**
    
    -   Lectura de la tabla `sales` desde PostgreSQL
        
2.  **Transform**
    
    -   Conversión de tipos        
    -   Agrupación por fecha        
    -   Cálculo de métricas
        
3.  **Load**
    
    -   Creación de la tabla `sales_summary` en PostgreSQL

----------

## ▶️ Cómo ejecutar y probar el proyecto

### 🧩 Requisitos previos

-   Git    
-   Node.js (18+)    
-   Python (3.9+)    
-   PostgreSQL    
-   Postman
    

----------

### 📥 1. Clonar el repositorio

`git clone https://github.com/FernandoBlanco10/Sales-Data-Project.git` 

----------

### 🗄️ 2. Configurar la base de datos

Crear una base de datos en PostgreSQL (por ejemplo):

`CREATE DATABASE sales_db;` 

Configurar las credenciales en:

```bash
backend/src/config/database.js
data_pipeline/etl_sales.py
```

----------

### 🚀 3. Levantar la API (Node.js)

```bash
cd backend
npm install
npm run dev
```

La API quedará disponible en:

`http://localhost:3000` 

----------

### 🧪 4. Probar flujo con Postman

1.  Registrar usuario    
2.  Login y copiar JWT    
3.  Crear producto (ruta protegida)    
4.  Registrar venta (ruta protegida)    
5.  Listar ventas
    

----------

### 🔄 5. Ejecutar ETL (Python)

```bash
cd data_pipeline
python etl_sales.py
```

Esto creará la tabla `sales_summary`.

----------

### 🔍 6. Verificar resultados

`SELECT  *  FROM sales_summary;` 

----------

## 🧠 Decisiones técnicas relevantes

-   Separación clara de responsabilidades:
    
    -   API → sistema transaccional (OLTP)
        
    -   Python → procesamiento analítico
        
-   Uso de JWT para seguridad.
    
-   ORM para consistencia del modelo.
    
-   ETL desacoplado del backend
    
-   PostgreSQL como fuente de verdad.
    

----------

## 🎯 Objetivo del proyecto

Demostrar habilidades en:

-   Backend con Node.js.
    
-   Autenticación y autorización.
    
-   Modelado relacional.
    
-   SQL.
    
-   Ingeniería de datos (ETL).
    
-   Python aplicado a datos.
    
-   Arquitectura end-to-end.
