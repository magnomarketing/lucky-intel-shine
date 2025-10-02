import { useEffect, useRef, useState } from 'react';

interface GoevaEmbeddedChatProps {
  agentId?: string;
}

const GoevaEmbeddedChat = ({ agentId = '73dbdf75-ce21-462a-ac9d-c0df95819bae' }: GoevaEmbeddedChatProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading && (
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
      
      {/* Goeva Chat Iframe */}
      <iframe
        ref={iframeRef}
        src={`https://www.goeva.ai/chat/${agentId}`}
        className="w-full h-full border-0"
        title="Lucky Net Finder - Asistente Virtual"
        allow="microphone; camera; autoplay"
        onLoad={() => setIsLoading(false)}
        style={{
          borderRadius: 'inherit'
        }}
      />
    </div>
  );
};

export default GoevaEmbeddedChat;

