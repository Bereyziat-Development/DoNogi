import React from 'react';
import { useTranslation } from '@/app/i18n/client';
import { LanguageUnion } from '@/@types/page-types';

type TranslationProps = {
  text: string;
  options?: any;
  translationFileKeys?: string;
  locales: LanguageUnion;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Translation({
  text,
  className,
  options,
  translationFileKeys,
  locales,
  ...props
}: TranslationProps) {
  const { t } = useTranslation(locales, translationFileKeys);
  return (
    <span
      {...props}
      className={className}
      dangerouslySetInnerHTML={{
        __html: (t(text, options ? options : null) as unknown as string) ?? ``,
      }}
    />
  );
}
