import type { ReactNode } from 'react';
import classNames from 'classnames';
import React from 'react';

type Props = {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function Card({
  children,
  imgSrc,
  imgAlt,
  onClick,
  className,
}: Readonly<Props>) {
  return (
    <div
      className={classNames(
        'flex rounded-lg border border-gray-200 bg-white shadow-md flex-col',
        className
      )}
      onClick={onClick}
    >
      {imgSrc && (
        <img className="rounded-t-lg" alt={imgAlt ?? ''} src={imgSrc} />
      )}
      <div className="flex h-full flex-col gap-4 p-6">{children}</div>
    </div>
  );
}
