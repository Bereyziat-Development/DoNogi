import React from 'react';

interface WaitingListFormProps {
  inputWidth: string;
  titleContent: React.ReactNode;
}

export default function WaitingListForm(props: WaitingListFormProps) {
  const { titleContent, inputWidth } = props;

  return (
    <form className="flex flex-col flex-shrink gap-2">
      {titleContent}

      <div className="w-full flex flex-row">
        <input
          placeholder="Enter your email here"
          className={`${inputWidth} border-2 rounded-l-2xl border-r-0 border-amber-500 px-3 py-4`}
        />
        <button className="btn-gradient px-4 py-4 !rounded-l-2xl -translate-x-1.5 font-semibold whitespace-nowrap">
          Notify me!
        </button>
      </div>
    </form>
  );
}
