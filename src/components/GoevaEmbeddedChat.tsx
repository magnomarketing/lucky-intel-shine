import { useEffect, useRef, useState } from 'react';

interface GoevaEmbeddedChatProps {
  agentId?: string;
  embedUrl?: string; // URL completa alternativa
}

const GoevaEmbeddedChat = ({ 
  agentId = '73dbdf75-ce21-462a-ac9d-c0df95819bae',
  embedUrl 
}: GoevaEmbeddedChatProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Construir la URL del chat - usar embedUrl si está disponible, sino construir con agentId
  const chatUrl = embedUrl || `https://goeva.ai/chat/${agentId}`;

  useEffect(() => {
    // Pequeño delay para la animación de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className="w-full max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-lg overflow-hidden relative"
      style={{ 
        minHeight: '650px',
        height: '650px'
      }}
    >
      {/* Loading State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
          <div className="text-center p-8">
            <div className="animate-pulse mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            <p className="text-lg font-medium text-foreground">Iniciando Lucky Assistant...</p>
            <p className="text-sm mt-2 text-muted-foreground">Tu asistente inteligente de conectividad</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
          <div className="text-center p-8 max-w-md">
            <div className="w-16 h-16 bg-destructive/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-lg font-medium text-foreground mb-2">No se pudo cargar el chat</p>
            <p className="text-sm text-muted-foreground mb-4">Por favor, contacta directamente:</p>
            <a 
              href="mailto:contacto@luckyintelligence.com"
              className="btn-primary px-6 py-2 rounded-lg font-semibold inline-block"
            >
              Enviar Email
            </a>
            <p className="text-xs text-muted-foreground mt-4">URL: {chatUrl}</p>
          </div>
        </div>
      )}
      
      {/* Goeva Chat Iframe */}
      <iframe
        ref={iframeRef}
        src={chatUrl}
        className="w-full h-full border-0"
        title="Lucky Net Finder - Asistente Virtual"
        allow="microphone; camera; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
        onLoad={() => {
          setIsLoading(false);
          console.log('Goeva chat loaded successfully');
        }}
        onError={(e) => {
          console.error('Error loading Goeva chat iframe:', e);
          setHasError(true);
          setIsLoading(false);
        }}
        style={{
          borderRadius: 'inherit'
        }}
      />
    </div>
  );
};

export default GoevaEmbeddedChat;

