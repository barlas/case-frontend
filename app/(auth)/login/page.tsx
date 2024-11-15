'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { AuthForm } from '@/components/custom/auth-form';
import { TurkishAirlinesLogo } from '@/components/custom/icons';
import { LanguageSelector } from '@/components/custom/language-selector';
import { SubmitButton } from '@/components/custom/submit-button';
import { ThemeSelector } from '@/components/custom/theme-selector';

import { login, LoginActionState } from '../actions';

export default function Page() {
  const { t } = useTranslation();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [state, formAction] = useActionState<LoginActionState, FormData>(login, {
    status: 'idle',
  });

  useEffect(() => {
    if (state.status === 'failed') {
      toast.error(t('login.error.invalidCredentials'));
    } else if (state.status === 'invalid_data') {
      toast.error(t('login.error.invalidData')); 
    } else if (state.status === 'success') {
      setIsSuccessful(true);
      router.refresh();
    }
  }, [state.status, router, t]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get('email') as string);
    formAction(formData);
  };

  return (
    <div className="min-h-dvh">
      <div className="min-h-dvh bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto flex min-h-dvh flex-col items-center justify-center px-4">
          <div className="fixed inset-x-0 top-0 flex items-center justify-between bg-black/20 px-6 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <TurkishAirlinesLogo />
            </div>
            <div className="flex items-center gap-2">
              <ThemeSelector />
              <LanguageSelector className="border-none bg-white/10 text-white hover:bg-white/20" />
            </div>
          </div>

          <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 backdrop-blur-md">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-2xl font-bold text-white">{t('login.form.signIn')}</h1>
              <p className="text-sm text-gray-300">{t('login.form.signInTitle')}</p>
            </div>
            <AuthForm action={handleSubmit} defaultEmail={email}>
              <SubmitButton isSuccessful={isSuccessful}>
                {t('login.form.signIn')}
              </SubmitButton>

              <p className="mt-4 text-center text-sm text-gray-300">
                {t('login.form.signUpPrompt')}
                <Link href="/register" className="font-semibold text-white hover:text-[#E81932]">
                  {t('login.form.signUpCta')}
                </Link>
                {t('login.form.signInCtaContent')}
              </p>
            </AuthForm>
          </div>
        </div>
      </div>
    </div>
  );
}