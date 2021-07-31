import { IBasePaginationNavigationConfiguration } from './interfaces';

export const BASE_PAGINATION_DEFAULT_NAVIGATION_CONFIGURATION: IBasePaginationNavigationConfiguration = {
  hideNavAtLimit: false,
  hideNavAtBase: false,
  prevIconName: 'arrow_back',
  nextIconName: 'arrow_forward',
  truncate: false,
  truncateAt: 0,
  truncateLimit: 0
};

export const BASE_PAGINATION_COLORS = {
  default: {
    regular: 'text-gray-300',
    active: 'text-indigo-800'
  },
  primary: {
    regular: 'text-indigo-800',
    active: 'text-orange-500'
  }
};

export const BASE_PAGINATION_BACKGROUND_COLORS = {
  default: {
    regular: 'bg-gray-300',
    active: 'bg-indigo-800'
  },
  primary: {
    regular: 'bg-indigo-800',
    active: 'bg-orange-500'
  }
};
