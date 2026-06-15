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
      window.location.reload();
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
            
            <div className="flex justify-center">
              <a href={`tel:${COMPANY_INFO.phoneClean}`}>
                <Button size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Nous appeler : {COMPANY_INFO.phone}
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
