import { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Loader2, Sparkles } from 'lucide-react';

interface FormData {
  nombre: string;
  email: string;
  empresa: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  empresa?: string;
  mensaje?: string;
}

const ContactSectionAlternative = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    // Validar empresa (opcional pero si se llena debe tener al menos 2 caracteres)
    if (formData.empresa.trim() && formData.empresa.trim().length < 2) {
      newErrors.empresa = 'El nombre de la empresa debe tener al menos 2 caracteres';
    }

    // Validar mensaje (opcional pero si se llena debe tener al menos 10 caracteres)
    if (formData.mensaje.trim() && formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      email: '',
      empresa: '',
      mensaje: ''
    });
    setErrors({});
    setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Opción 1: Usar Formspree (gratuito, hasta 50 submissions por mes)
      const formspreeEndpoint = 'https://formspree.io/f/xqaljgeq'; // Reemplaza con tu Form ID
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          empresa: formData.empresa || 'No especificada',
          mensaje: formData.mensaje || 'Sin mensaje adicional',
          fecha: new Date().toLocaleString('es-MX')
        })
      });

      if (response.ok) {
        console.log('Formulario enviado exitosamente');
        setSubmitStatus('success');
        setShowSuccessAnimation(true);
        resetForm();
        
        // Ocultar la animación después de 3 segundos
        setTimeout(() => {
          setShowSuccessAnimation(false);
        }, 3000);
      } else {
        throw new Error('Error en el servidor');
      }
      
      // Resetear el estado de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
      
      // Resetear el estado de error después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 lg:py-24 gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Conecta con Nuestros <span className="text-gradient">Especialistas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Descubre cómo nuestras soluciones pueden transformar tu infraestructura de telecomunicaciones
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-md border border-border">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className={`mb-6 p-6 bg-gradient-to-r from-success/10 to-primary/5 border border-success/20 rounded-lg flex flex-col items-center text-center gap-4 transition-all duration-500 ${showSuccessAnimation ? 'scale-105 shadow-lg' : ''}`}>
                  <div className={`w-16 h-16 bg-success/20 rounded-full flex items-center justify-center transition-all duration-300 ${showSuccessAnimation ? 'scale-110' : ''}`}>
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-success">¡Consulta Enviada Exitosamente!</h3>
                      {showSuccessAnimation && <Sparkles className="w-5 h-5 text-success animate-pulse" />}
                    </div>
                    <p className="text-success/80 mb-3">
                      Gracias por contactarnos. Nuestro equipo de especialistas revisará tu consulta y te responderá en menos de 24 horas.
                    </p>
                    <div className="bg-success/5 rounded-md p-3 border border-success/10">
                      <p className="text-sm text-success/70">
                        <strong>Próximos pasos:</strong> Te enviaremos un email de confirmación y uno de nuestros expertos se pondrá en contacto contigo para discutir tus necesidades específicas.
                      </p>
                    </div>
                    <div className="mt-4 p-2 bg-success/10 rounded-md">
                      <p className="text-xs text-success/60">
                        📧 Email de confirmación enviado • ⏰ Respuesta en 24h • 👨‍💼 Asesoría personalizada
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-6 bg-gradient-to-r from-destructive/10 to-red-500/5 border border-destructive/20 rounded-lg flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-destructive mb-2">Error al Enviar la Consulta</h3>
                    <p className="text-destructive/80 mb-3">
                      Lo sentimos, hubo un problema al enviar tu mensaje. Por favor intenta nuevamente o contáctanos directamente.
                    </p>
                    <div className="bg-destructive/5 rounded-md p-3 border border-destructive/10">
                      <p className="text-sm text-destructive/70">
                        <strong>Alternativas de contacto:</strong> Puedes escribirnos directamente a{' '}
                        <a href="mailto:contacto@luckyintelligence.com" className="text-primary hover:underline">
                          contacto@luckyintelligence.com
                        </a>{' '}
                        o llamarnos al número de contacto.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                      errors.nombre ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Tu nombre completo"
                    disabled={isSubmitting}
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-destructive">{errors.nombre}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                      errors.email ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="tu.email@empresa.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                      errors.empresa ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Nombre de tu empresa"
                    disabled={isSubmitting}
                  />
                  {errors.empresa && (
                    <p className="mt-1 text-sm text-destructive">{errors.empresa}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${
                      errors.mensaje ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Cuéntanos sobre tus necesidades de telecomunicaciones..."
                    disabled={isSubmitting}
                  />
                  {errors.mensaje && (
                    <p className="mt-1 text-sm text-destructive">{errors.mensaje}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary px-6 py-4 rounded-md font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Consulta
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card rounded-lg p-8 shadow-md border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Contacto Directo</h3>
                    <p className="text-muted-foreground">Respuesta en menos de 24 horas</p>
                  </div>
                </div>
                <a 
                  href="mailto:contacto@luckyintelligence.com"
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  contacto@luckyintelligence.com
                </a>
              </div>

              <div className="bg-card rounded-lg p-8 shadow-md border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">¿Por qué contactarnos?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                    Evaluación gratuita de tu infraestructura
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                    Propuesta personalizada sin compromiso
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                    Asesoría especializada en telecomunicaciones
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                    Implementación llave en mano
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionAlternative;
