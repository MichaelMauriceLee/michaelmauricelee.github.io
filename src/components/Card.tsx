import type { ReactNode } from 'react';
import classNames from 'classnames';
import React from 'react';

type Props = {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  children: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'project';
};

export default function Card({
  children,
  imgSrc,
  imgAlt,
  onClick,
  className,
  variant = 'default',
}: Readonly<Props>) {
  if (variant === 'project') {
    return (
      <div
        className={classNames('project-card', className)}
        onClick={onClick}
        onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {imgSrc && (
          <div className="overflow-hidden">
            <img alt={imgAlt ?? ''} src={imgSrc} />
          </div>
        )}
        <div className="project-card-content">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={classNames(
        'card flex flex-col',
        className,
        onClick && 'cursor-pointer'
      )}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {imgSrc && (
        <img className="rounded-t-xl" alt={imgAlt ?? ''} src={imgSrc} />
      )}
      <div className="flex h-full flex-col gap-4 p-6">{children}</div>
    </div>
  );
}
