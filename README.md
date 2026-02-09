# 💊 Inventario de Medicamentos - Firebase Edition

Sistema profesional de gestión de inventario de medicamentos del carro de urgencias con Firestore y Firebase Hosting.

## 🚀 Inicio Rápido

### 1. Instalar dependencias
```bash
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

pip install -r requirements.txt
```

### 2. Configurar Firebase
Edita `.env` y reemplaza `FIREBASE_CONFIG` con tus credenciales de Firebase

### 3. Ejecutar
```bash
python app_firebase.py
```

### 4. Acceder
```
http://127.0.0.1:5000/static/index.html
```

## 📋 Características

- ✅ **Registro de Medicamentos** - Alta/baja de medicamentos
- ✅ **Inventario** - Stock actual con alertas
- ✅ **Historial** - Todos los movimientos de medicamentos
- ✅ **Demanda** - Top 10 medicamentos más dispensados
- ✅ **Reportes** - Excel y PDF (semanal/quincenal)
- ✅ **Firebase Hosting** - Deploy en la nube

## 📁 Estructura

```
├── app_firebase.py       # Backend Flask con Firestore
├── requirements.txt      # Dependencias Python
├── static/
│   └── index.html       # Frontend HTML/CSS/JS
├── .env                 # Configuración (no incluir en git)
└── firebase.json        # Configuración de hosting
```

## 🔑 Credenciales

Obtén tu `FIREBASE_CONFIG` desde:
1. Firebase Console > Project Settings
2. Service Accounts > Generate New Private Key
3. Copia el JSON y reemplaza en `.env`

## 📞 Soporte

Si algo no funciona:
1. Verifica que Firebase esté configurado en `.env`
2. Mira la consola del navegador (F12) para errores JS
3. Verifica la consola del servidor en la terminal
