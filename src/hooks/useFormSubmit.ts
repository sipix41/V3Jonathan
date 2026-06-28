import { useState } from 'react';
import { trackEvent } from './useAnalytics';


type UseFormSubmitResult = {
  submitStatus: 'idle' | 'loading' | 'success' | 'error';
  submitForm: (data: Record<string, any> | FormData, subject: string) => Promise<boolean>;
};

export const useFormSubmit = (): UseFormSubmitResult => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submitForm = async (data: Record<string, any> | FormData, subject: string): Promise<boolean> => {
    try {
      setSubmitStatus('loading');
      
      let payload: Record<string, any> = {};
      
      if (data instanceof FormData) {
        data.forEach((value, key) => {
          payload[key] = value;
        });
      } else {
        payload = { ...data };
      }

      if (!payload._subject) payload._subject = subject;
      if (!payload._template) payload._template = 'table';

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch('/api/submit-form', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

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
