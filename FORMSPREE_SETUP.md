# Configuración de Formspree para el Formulario de Contacto

## Configuración Rápida con Formspree (Recomendado)

Formspree es una opción más simple y gratuita que EmailJS. Permite hasta 50 submissions por mes en el plan gratuito.

### Pasos para configurar Formspree:

#### 1. Crear cuenta en Formspree
- Ve a [https://formspree.io/](https://formspree.io/)
- Regístrate con tu email
- Confirma tu cuenta de email

#### 2. Crear un nuevo formulario
- En el dashboard, haz clic en "New Form"
- Dale un nombre como "Contact Form - Lucky Intelligence"
- Copia el **Form ID** que se genera (algo como `xrgjqkqw`)

#### 3. Configurar el formulario en el código
- Abre el archivo `src/components/ContactSectionAlternative.tsx`
- Busca la línea que dice:
```typescript
const formspreeEndpoint = 'https://formspree.io/f/xqaljgeq';
```
- Reemplaza `YOUR_FORM_ID` con tu Form ID real:
```typescript
const formspreeEndpoint = 'https://formspree.io/f/xrgjqkqw';
```

#### 4. Usar el componente alternativo
- En tu archivo principal (App.tsx o donde uses el formulario), importa el componente alternativo:
```typescript
import ContactSectionAlternative from './components/ContactSectionAlternative';
```
- Reemplaza `<ContactSection />` por `<ContactSectionAlternative />`

#### 5. Probar el formulario
- Ejecuta el proyecto: `npm run dev`
- Ve al formulario de contacto
- Llena y envía un formulario de prueba
- Verifica que recibas el email en tu cuenta de Formspree

### Ventajas de Formspree:
✅ **Configuración súper simple** - Solo necesitas un Form ID
✅ **Gratuito** - 50 submissions por mes
✅ **Sin configuración de servidor** - Todo se maneja desde el frontend
✅ **Spam protection** - Protección automática contra spam
✅ **Notificaciones por email** - Recibes los formularios en tu email
✅ **Dashboard web** - Puedes ver todos los submissions en su dashboard

### Personalización del email recibido:
En el dashboard de Formspree puedes:
- Configurar el email de destino
- Personalizar el asunto del email
- Agregar campos personalizados
- Configurar respuestas automáticas

### Ejemplo de email que recibirás:
```
Asunto: New submission from Contact Form - Lucky Intelligence

Nombre: Juan Pérez
Email: juan@empresa.com
Empresa: Mi Empresa
Mensaje: Necesito información sobre sus servicios de telecomunicaciones
Fecha: 15/12/2024, 14:30:25
```

## Migración desde EmailJS:

Si ya tienes EmailJS configurado y quieres cambiar a Formspree:

1. **Mantén ambos componentes** - `ContactSection.tsx` (EmailJS) y `ContactSectionAlternative.tsx` (Formspree)
2. **Cambia la importación** en tu componente principal
3. **Prueba ambos** para ver cuál prefieres
4. **Elimina el que no uses** cuando estés satisfecho

## Configuración avanzada:

### Campos personalizados:
Puedes agregar más campos al formulario modificando el objeto que se envía:

```typescript
body: JSON.stringify({
  nombre: formData.nombre,
  email: formData.email,
  empresa: formData.empresa || 'No especificada',
  mensaje: formData.mensaje || 'Sin mensaje adicional',
  fecha: new Date().toLocaleString('es-MX'),
  // Campos adicionales:
  telefono: formData.telefono,
  servicio: formData.servicio,
  presupuesto: formData.presupuesto
})
```

### Respuestas automáticas:
En el dashboard de Formspree puedes configurar respuestas automáticas para:
- Confirmar recepción del formulario
- Enviar información adicional
- Redirigir a una página de agradecimiento

### Integración con otras herramientas:
Formspree se puede integrar con:
- Zapier
- Slack
- Google Sheets
- CRM systems
- Y muchas más herramientas
