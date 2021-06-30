/**
 * Configuration for the pagination's navigation display
 * 
 * **Note**: **truncateAt** and **truncateLimit** can only function if the **truncate** flag property its set to **true**
 * @property {boolean} hideNavAtBase - Set to true and it will hide the "Prev" navigation icon.
 * @property {boolean} hideNavAtLimit - Set to true and it will hide the "Next" navigation icon.
 * @property {string} prevIconName - Material Icon name for the "Prev" navigation control.
 * @property {string} nextIconName - Material Icon name for the "Next" navigation control.
 * @property {boolean} truncate - Set to true and it will enable truncate to make the pagination more accesible.
 * @property {number} truncateAt - Specific index number of the pagination where the pagination will start truncate.
 * @property {number} truncateLimit - Specific index number of the pagination where the pagination will stop truncate.
 */
export interface IBasePaginationNavigationConfiguration {
  hideNavAtBase?: boolean;
  hideNavAtLimit?: boolean;
  prevIconName?: string;
  nextIconName?: string;
  truncate?: boolean;
  truncateAt?: number;
  truncateLimit?: number;
}
