
import { lazy } from 'react';
import { Location } from './Location';

export const LazyLocation = lazy(() => import('./Location').then(() => ({default: Location})));
