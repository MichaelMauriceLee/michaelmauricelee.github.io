import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BaseSyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Button, Card, Spinner } from 'flowbite-react';
import { useInView } from 'react-intersection-observer';
import i18next from 'i18next';

const FormValues = z.object({
  name: z.string().min(1, i18next.t('errors.nameRequired') ?? ''),
  email: z
    .string()
    .min(1, i18next.t('errors.emailRequired') ?? '')
    .email(i18next.t('errors.invalidEmail') ?? ''),
  subject: z.string().min(1, i18next.t('errors.subjectRequired') ?? ''),
  message: z.string().min(1, i18next.t('errors.messageRequired') ?? ''),
});

type FormValues = z.infer<typeof FormValues>;

const ContactForm = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [showAlert, setShowAlert] = useState(false);
  const [severity, setSeverity] = useState('success');
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
    formState: { errors, isDirty, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(FormValues),
  });

  const onSubmit = async (
    formValues: FormValues,
    event?: BaseSyntheticEvent
  ) => {
    event && event.preventDefault();

    try {
      await sendEmail(formValues);
      setSeverity('success');
      setMessage(t('emailSuccessfullySent') ?? '');
      reset();
    } catch (err: any) {
      setSeverity('failure');
      setMessage(err.text);
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
          ? 'opacity-1 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
      }`}
      ref={ref}
    >
      <Card>
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          {t('contact')}
        </div>
        {showAlert && (
          <Alert color={severity} onDismiss={() => setShowAlert(false)}>
            <span className="font-medium">{message}</span>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="name">{t('name')}</label>
            <input
              id="name"
              type="text"
              {...register('name')}
              disabled={isSubmitting}
            />
            {errors.name?.message && <p>{errors.name?.message}</p>}

            <label className="mt-2" htmlFor="email">
              {t('email')}
            </label>
            <input
              id="email"
              type="text"
              {...register('email')}
              disabled={isSubmitting}
            />
            {errors.email?.message && <p>{errors.email?.message}</p>}

            <label className="mt-2" htmlFor="subject">
              {t('subject')}
            </label>
            <input
              id="subject"
              type="text"
              {...register('subject')}
              disabled={isSubmitting}
            />
            {errors.subject?.message && <p>{errors.subject?.message}</p>}

            <label className="mt-2" htmlFor="message">
              {t('message')}
            </label>
            <textarea
              id="message"
              {...register('message')}
              disabled={isSubmitting}
              rows={10}
            />
            {errors.message?.message && <p>{errors.message?.message}</p>}
          </div>
          <Button
            className="mt-4"
            type="submit"
            disabled={!isDirty || isSubmitting}
          >
            {isSubmitting ? (
              <div className="mr-3">
                <Spinner size="sm" light={true} />
              </div>
            ) : (
              t('submit')
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
