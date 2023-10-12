import React from 'react';
import { useTranslation } from 'next-i18next';

type TranslationProps = {
  text: string;
  options?: any;
  translationFileKeys: string | string[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function Translation({
  text,
  className,
  options,
  translationFileKeys,
  ...props
}: TranslationProps) {
  const { t } = useTranslation(translationFileKeys);
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
