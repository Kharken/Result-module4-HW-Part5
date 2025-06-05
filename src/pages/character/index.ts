
import { lazy } from 'react';
import { Character } from './Character';

export const LazyCharacter = lazy(() => import('./Character').then(() => ({default: Character})));
