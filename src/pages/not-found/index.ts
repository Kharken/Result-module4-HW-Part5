import { lazy } from 'react';
import { NotFound } from './NotFound';

export const LazyNotFound = lazy(() => import('./NotFound').then(() => ({ default: NotFound })));
