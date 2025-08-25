# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Regístrate para obtener una cuenta gratuita
- La cuenta gratuita permite 200 emails por mes

### 2. Configurar un servicio de email
- En el dashboard de EmailJS, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu cuenta de email
- Guarda el **Service ID** que se genera

### 3. Crear un template de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Usa el siguiente template como base:

**Nombre del Template:** Contact Form
**Asunto:** Nueva consulta desde el sitio web - {{nombre}}

**Contenido del template:**
```
Nueva consulta recibida desde el sitio web de Lucky Intelligence

Información del contacto:
- Nombre: {{nombre}}
- Email: {{email}}
- Empresa: {{empresa}}
- Mensaje: {{mensaje}}

Fecha de envío: {{fecha}}

---
Este mensaje fue enviado automáticamente desde el formulario de contacto del sitio web.
```

- Guarda el template y copia el **Template ID**

### 4. Obtener la Public Key
- Ve a "Account" en el menú lateral
- En la sección "API Keys", copia tu **Public Key**

### 5. Configurar las credenciales en el proyecto
- Abre el archivo `src/lib/emailjs-config.ts`
- Reemplaza los valores placeholder con tus credenciales reales:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'tu_service_id_aqui',
  TEMPLATE_ID: 'tu_template_id_aqui', 
  PUBLIC_KEY: 'tu_public_key_aqui',
};
```

### 6. Probar el formulario
- Ejecuta el proyecto: `npm run dev`
- Ve al formulario de contacto
- Llena y envía un formulario de prueba
- Verifica que recibas el email

## Características del formulario implementado:

✅ **Validación en tiempo real**
- Campos requeridos (nombre, email)
- Validación de formato de email
- Validación de longitud mínima

✅ **Estados de UI**
- Indicador de carga durante el envío
- Mensajes de éxito/error
- Campos deshabilitados durante el envío

✅ **Manejo de errores**
- Validación del lado del cliente
- Manejo de errores de red
- Mensajes de error descriptivos

✅ **UX mejorada**
- Limpieza automática de errores al escribir
- Reset del formulario después del envío exitoso
- Feedback visual inmediato

## Alternativas a EmailJS:

Si prefieres usar otro servicio, puedes reemplazar la lógica en `handleSubmit`:

### SendGrid
```typescript
// Usar la API de SendGrid
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Mailgun
```typescript
// Usar la API de Mailgun
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Backend propio
```typescript
// Enviar a tu propio backend
const response = await fetch('/api/contact-form', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```
