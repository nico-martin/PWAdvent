import { Day, Page } from '@app/types';

export interface State {
  offline: boolean;
  menuOpen: boolean;
  days: Record<number, Day>;
  vapidKey: {
    loading: boolean;
    key: string;
  };
  page: Page;
}

export interface Actions {}
