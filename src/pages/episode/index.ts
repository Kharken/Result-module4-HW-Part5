import { lazy } from 'react';
import { Episode } from './Episode';

export const LazyEpisode = lazy(() => import('./Episode').then(() => ({ default: Episode })));
