import { atom } from 'nanostores';
import type { SideProject } from './types';

export const offset = atom<number>(0);

export const selectedSideProject = atom<SideProject | null>(null);