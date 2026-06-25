import { useState } from 'react';
import { trackEvent } from './useAnalytics';

// Remplacez cette valeur par votre jeton secret FormSubmit
const FORMSUBMIT_TOKEN = import.meta.env.VITE_FORMSUBMIT_TOKEN || "VOTRE_CODE_SECRET_ICI";

type UseFormSubmitResult = {
  submitStatus: 'idle' | 'success' | 'error';
  submitForm: (data: Record<string, any> | FormData, subject: string) => Promise<boolean>;
};

export const useFormSubmit = (): UseFormSubmitResult => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const submitForm = async (data: Record<string, any> | FormData, subject: string): Promise<boolean> => {
    try {
      setSubmitStatus('idle');
      
      let body: any;
      let headers: HeadersInit = { 'Accept': 'application/json' };

      if (data instanceof FormData) {
        body = data;
        if (!data.has('_subject')) {
           data.append('_subject', subject);
        }
        if (!data.has('_template')) {
           data.append('_template', 'table');
        }
        // When using FormData with fetch, do not set Content-Type manually
      } else {
        body = JSON.stringify({
          _subject: subject,
          _template: "table",
          ...data
        });
        headers['Content-Type'] = 'application/json';
      }
      
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`, {
        method: "POST",
        headers,
        body
      });

      if (response.ok) {
         setSubmitStatus('success');
         trackEvent('generate_lead', 'form', subject);
         return true;
      } else {
         setSubmitStatus('error');
         return false;
      }
    } catch (error) {
      console.error("Problème de connexion", error);
      setSubmitStatus('error');
      return false;
    }
  };

  return { submitStatus, submitForm };
};
