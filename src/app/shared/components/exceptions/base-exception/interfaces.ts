/**
 * Type of exception category for base visual exceptions
 *
 * Available values
 *
 * @example
 * // 1) "Open Dispute Exists"
 * 'open_exists';
 *
 * // 2) "Try Later (Site)"
 * 'try_later_s';
 *
 * // 3) "Try Later (TU)"
 * 'try_later_tu';
 *
 * // 4) "File Maintenance Needed"
 * 'file_maintenance';
 *
 * // 5) "Ineligible for online disputes"
 * 'ineligible';
 */
export type TExceptionCategoryType = 'open_exists' | 'try_later_s' | 'try_later_tu' | 'file_maintenance' | 'ineligible';

export interface IBaseExceptionCategory {
  type: TExceptionCategoryType;
  message: string;
  description: string;
  actionText: string;
}

export interface IBaseException {
  code: string;
  categoryType: TExceptionCategoryType;
  metaErrorDisplay: string;
  description: string;
}
