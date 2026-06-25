import { Component, ErrorInfo, ReactNode } from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { COMPANY_INFO } from '../constants';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    
    // Catch chunk load errors (often happens on deployments where hash changes)
    if (error.name === 'ChunkLoadError' || error.message.includes('dynamically imported module') || error.message.includes('Importing a module script failed')) {
      const reloadCount = parseInt(sessionStorage.getItem('chunk_reload_count') || '0', 10);
      if (reloadCount < 3) {
        sessionStorage.setItem('chunk_reload_count', (reloadCount + 1).toString());
        window.location.reload();
      } else {
        console.error("Too many reloads for chunk load error, stopping.");
      }
    }
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-xl w-full text-center">
            <div className="flex justify-center mb-6 text-brand-red">
              <AlertTriangle size={64} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Une erreur inattendue est survenue</h1>
            <p className="text-lg text-gray-600 mb-8">
              Nous sommes désolés, un problème technique empêche l'affichage de cette page.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => {
                   sessionStorage.removeItem('chunk_reload_count');
                   this.setState({ hasError: false });
                   window.location.reload();
                }}
                className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors w-full sm:w-auto"
              >
                Réessayer
              </button>
              <a href="/" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full bg-white flex items-center justify-center">
                  Retour à l'accueil
                </Button>
              </a>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto">
                <Button size="lg" className="w-full flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Appeler
                </Button>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
