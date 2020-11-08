import { Day } from '@app/types';

export interface State {
  offline: boolean;
  menuOpen: boolean;
  days: Record<number, Day>;
}

export interface Actions {}
