
import { lazy } from 'react';
import { Login } from './Login';

export const LazyLogin = lazy(() => import('./Login').then(() => ({default: Login})));
