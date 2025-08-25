// Configuración de EmailJS
// Para usar este servicio, necesitas:
// 1. Crear una cuenta en https://www.emailjs.com/
// 2. Crear un template de email
// 3. Obtener las credenciales necesarias

export const EMAILJS_CONFIG = {
  // Tu Service ID de EmailJS
  SERVICE_ID: 'YOUR_SERVICE_ID', // Reemplaza con tu Service ID
  
  // Tu Template ID de EmailJS
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID
  
  // Tu Public Key de EmailJS
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Reemplaza con tu Public Key
};

// Template de ejemplo para EmailJS:
/*
Template Name: Contact Form
Subject: Nueva consulta desde el sitio web - {{nombre}}

Contenido del template:
Nombre: {{nombre}}
Email: {{email}}
Empresa: {{empresa}}
Mensaje: {{mensaje}}

Fecha: {{fecha}}
*/
