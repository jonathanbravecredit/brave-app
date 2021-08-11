import { TransunionFilters } from '@shared/utils/transunion/transunion-filters';
import { TransunionMappers } from '@shared/utils/transunion/transunion-mappers';
import { TransunionParsers } from '@shared/utils/transunion/transunion-parsers';
import { TransunionQueries } from '@shared/utils/transunion/transunion-queries';
import { TransunionSorters } from '@shared/utils/transunion/transunion-sorters';

// start building this out to handle all the data from TU
export class TransunionUtil {
  static bcMissing: string = '--';
  static sorter = TransunionSorters;
  static parser = TransunionParsers;
  static mapper = TransunionMappers;
  static query = TransunionQueries;
  static filter = TransunionFilters;
  constructor() {
  }


}