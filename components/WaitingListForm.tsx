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

  // State to handle errors.
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission.

    if (
      !inputValue ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue)
    ) {
      toast.error('Email is invalid!');
      setError('Email is invalid');
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: inputValue }),
        },
      );

      if (!response.ok) {
        const data = await response.json();
        toast.error(data.error || 'An unexpected error occurred.');
        setError(data.error || 'An unexpected error occurred.');
        return;
      }

      // Handle success. For example, you can reset the input or show a success message.
      setInputValue('');
      toast.success('You are on the waiting list!');
    } catch (err) {
      setError('An unexpected error occurred.');
      setTimeout(() => setError(''), 1200);
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col flex-shrink gap-2.5"
    >
      {titleContent}

      <div className="w-full flex flex-row">
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            setError('');
          }}
          placeholder="Enter your email here"
          className={`${inputWidth} border-2 rounded-l-2xl border-r-0 ${
            error ? 'border-red-500' : 'border-amber-500'
          } px-3 py-4`}
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
