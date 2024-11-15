'use client';

import Form from 'next/form';
import { useTranslation } from 'react-i18next';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function AuthForm({
  action,
  children,
  defaultEmail = '',
}: {
  action: any;
  children: React.ReactNode;
  defaultEmail?: string;
}) {
  const { t } = useTranslation();
  
  return (
    <Form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="email"
          className="text-sm font-medium text-white"
        >
          {t('login.form.email')}
        </Label>

        <Input
          id="email"
          name="email"
          className="h-11 border-0 bg-white/10 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-white/40"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          autoFocus
          defaultValue={defaultEmail}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="password"
          className="text-sm font-medium text-white"
        >
          {t('login.form.password')}
        </Label>

        <Input
          id="password"
          name="password"
          className="h-11 border-0 bg-white/10 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-white/40"
          type="password"
          required
        />
      </div>

      {children}
    </Form>
  );
}