import { TransunionScrubbers } from '@shared/utils/transunion/scrubbers';
import { TransunionFilters } from '@shared/utils/transunion/filters/transunion-filters';
import { TransunionMappers } from '@shared/utils/transunion/mappers/transunion-mappers';
import { TransunionParsers } from '@shared/utils/transunion/parsers/transunion-parsers';
import { TransunionQueries } from '@shared/utils/transunion/queries/transunion-queries';
import { TransunionSorters } from '@shared/utils/transunion/sorters/transunion-sorters';
import { TransunionGenerators } from '@shared/utils/transunion/generators/transunion-generators';

// start building this out to handle all the data from TU
export class TransunionUtil {
  static bcMissing: string = '--';
  static sorters = TransunionSorters;
  static parsers = TransunionParsers;
  static mappers = TransunionMappers;
  static queries = TransunionQueries;
  static filters = TransunionFilters;
  static scrubbers = TransunionScrubbers;
  static generators = TransunionGenerators;
  constructor() {}
}
