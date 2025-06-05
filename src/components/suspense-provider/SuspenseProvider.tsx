import React, { Suspense } from 'react';
import { SuspenseProviderProps } from '../../types/app-types';

export const SuspenseProvider: React.FC<SuspenseProviderProps> = ({ children, fallback }) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>);
};
