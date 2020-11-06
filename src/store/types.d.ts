import { Day } from '@app/types';

export interface State {
  offline: boolean;
  days: Record<number, Day>;
}

export interface Actions {}
