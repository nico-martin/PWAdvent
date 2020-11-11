import { Day, Page } from '@app/types';

export interface State {
  offline: boolean;
  menuOpen: boolean;
  days: Record<number, Day>;
  page: Page;
}

export interface Actions {}
