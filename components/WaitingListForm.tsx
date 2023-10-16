import React from 'react';
import { LanguageUnion } from '@/@types/page-types';
import { useTranslation } from '@/app/i18n/client';

interface WaitingListFormProps {
  inputWidth: string;
  locale: LanguageUnion;
  titleContent: React.ReactNode;
}

export default function WaitingListForm(props: WaitingListFormProps) {
  const { titleContent, inputWidth, locale } = props;

  const { t } = useTranslation(locale);

  return (
    <form className="flex flex-col flex-shrink gap-2.5">
      {titleContent}

      <div className="w-full flex flex-row">
        <input
          placeholder="Enter your email here"
          className={`${inputWidth} border-2 rounded-l-2xl border-r-0 border-amber-500 px-3 py-4`}
        />
        <button
          type="submit"
          className="btn-gradient px-4 py-4 !rounded-l-2xl -translate-x-1.5 font-semibold whitespace-nowrap"
        >
          {t('buttons.notify_me')}
        </button>
      </div>
    </form>
  );
}
