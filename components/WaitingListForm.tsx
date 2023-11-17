import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { LanguageUnion } from '@/@types/page-types';
import { useTranslation } from '@/app/i18n/client';

interface WaitingListFormProps {
  inputWidth: string;
  locale: LanguageUnion;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  titleContent: React.ReactNode;
}

export default function WaitingListForm(props: WaitingListFormProps) {
  const { titleContent, inputWidth, locale, inputValue, setInputValue } = props;

  const { t } = useTranslation(locale);

  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputValue)) {
      const errorMessage = t('errors.invalid_email') || 'Email is invalid!';
      toast.error(errorMessage);
      setError(errorMessage);
      return;
    }

    try {
      const response = await fetch(`${window.location.origin}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: inputValue }),
      });

      if (!response.ok) {
        const data = await response.json();
        const errorMessage =
          data.error ||
          t('errors.unexpected_error') ||
          'An unexpected error occurred.';
        toast.error(errorMessage);
        setError(errorMessage);
        return;
      }

      setInputValue('');
      toast.success('You are on the waiting list!');
      setError('');
    } catch (err) {
      const errorMessage =
        t('errors.unexpected_error') || 'An unexpected error occurred.';
      toast.error(errorMessage);
      setError(errorMessage);
      setTimeout(() => setError(''), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-shrink gap-2.5">
      {titleContent}
      <div className="w-full flex flex-row">
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            if (error) setError('');
          }}
          placeholder={t('enter_your_email') as string}
          className={`${inputWidth} border-2 rounded-l-2xl border-r-0 ${
            error ? 'border-red-500' : 'border-amber-500'
          } px-3 py-4`}
        />
        <button
          type="submit"
          className="btn-gradient px-4 py-4 !rounded-l-none rounded-r-2xl -translate-x-1.5 font-semibold whitespace-nowrap"
        >
          {t('buttons.notify_me')}
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
