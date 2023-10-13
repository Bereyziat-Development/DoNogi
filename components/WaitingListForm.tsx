import React from 'react';

interface WaitingListFormProps {
  showExtraTitle?: boolean;
}

export default function WaitingListForm(props: WaitingListFormProps) {
  const { showExtraTitle } = props;

  return (
    <form>
      <div className="flex flex-col gap-3">
        <span className="w-full whitespace-nowrap flex flex-row gap-2">
          {showExtraTitle && (
            <p className="text-gradient text-lg md:text-xl font-semibold">
              Do Nogi app is on its way.
            </p>
          )}{' '}
          <p className="text-paragraph text-lg md:text-xl">
            Join our waiting list!
          </p>
        </span>

        <div className="w-full flex flex-row">
          <input
            placeholder="Enter your email here"
            className="w-[362px] border-2 rounded-l-2xl border-amber-500 px-3 py-4"
          />
          <button className="btn-gradient px-4 py-4 !border-2 !rounded-l-2xl ">
            Notify me!
          </button>
        </div>
      </div>
    </form>
  );
}
