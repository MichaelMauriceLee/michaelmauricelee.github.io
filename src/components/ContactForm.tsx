import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { type BaseSyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import i18next from '../i18n/i18n';
import Card from './Card';
import React from 'react';

const FormValues = z.object({
  name: z.string().min(1, i18next.t('errors.nameRequired') ?? ''),
  email: z
    .string()
    .email(i18next.t('errors.invalidEmail') ?? '')
    .min(1, i18next.t('errors.emailRequired') ?? ''),
  subject: z.string().min(1, i18next.t('errors.subjectRequired') ?? ''),
  message: z.string().min(1, i18next.t('errors.messageRequired') ?? ''),
});

type FormValues = z.infer<typeof FormValues>;

export default function ContactForm() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [showAlert, setShowAlert] = useState(false);
  const [severity, setSeverity] = useState<'success' | 'error'>('success');
  const [message, setMessage] = useState('');

  const sendEmail = async (formValues: FormValues) => {
    const result = await emailjs.send(
      'portfolio',
      'portfolio_form',
      formValues,
      'user_gSfkba0Rf5gMdNzGxHLxj'
    );
    return result;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: 'onTouched',
    resolver: zodResolver(FormValues),
  });

  const onSubmit = async (
    formValues: FormValues,
    event?: BaseSyntheticEvent
  ) => {
    if (event) {
      event.preventDefault();
    }

    try {
      await sendEmail(formValues);
      setSeverity('success');
      setMessage(t('emailSuccessfullySent') ?? '');
      reset();
    } catch (err: unknown) {
      setSeverity('error');
      setMessage(err instanceof Error ? err.message : String(err));
    } finally {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div
      id={t('sections.contact') ?? ''}
      className={`mt-5 motion-safe:transition-all motion-safe:duration-1000 ${
        inView
          ? 'opacity-100 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
      }`}
      ref={ref}
    >
      <Card>
        <div className="section-header">
          {t('contact')}
        </div>

        {/* Custom Alert */}
        {showAlert && (
          <div className={`alert alert-${severity}`}>
            <span>{message}</span>
            <button 
              type="button" 
              className="alert-close"
              onClick={() => setShowAlert(false)}
              aria-label="Close alert"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">{t('name')}</label>
            <input
              id="name"
              type="text"
              className="form-input"
              {...register('name')}
              disabled={isSubmitting}
            />
            {errors.name?.message && (
              <p className="form-error">{errors.name?.message}</p>
            )}

            <label htmlFor="email">{t('email')}</label>
            <input
              id="email"
              type="text"
              className="form-input"
              {...register('email')}
              disabled={isSubmitting}
            />
            {errors.email?.message && (
              <p className="form-error">{errors.email?.message}</p>
            )}

            <label htmlFor="subject">{t('subject')}</label>
            <input
              id="subject"
              type="text"
              className="form-input"
              {...register('subject')}
              disabled={isSubmitting}
            />
            {errors.subject?.message && (
              <p className="form-error">{errors.subject?.message}</p>
            )}

            <label htmlFor="message">{t('message')}</label>
            <textarea
              id="message"
              className="form-input form-textarea"
              {...register('message')}
              disabled={isSubmitting}
              rows={10}
            />
            {errors.message?.message && (
              <p className="form-error">{errors.message?.message}</p>
            )}
          </div>
          
          <button 
            className="btn btn-primary" 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : (
              t('submit')
            )}
          </button>
        </form>
      </Card>
    </div>
  );
}
