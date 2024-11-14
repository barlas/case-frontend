import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import i18n from '@/i18n';

export function useLocale() {
  const params = useParams();
  const locale = params.locale as string || 'en';

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return locale;
}
