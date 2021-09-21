import { BRAVE_TECHNICAL_ERROR } from '@shared/utils/brave/constants';
import { BraveGenerators } from '@shared/utils/brave/generators/brave-generators';
import { BraveQueries } from '@shared/utils/brave/queries/brave-queries';
import { BraveScrubbers } from '@shared/utils/brave/scrubbers/brave-scrubbers';

/**
 * Util class for defining global app objects and methods
 */
export class BraveUtil {
  static technicalError = BRAVE_TECHNICAL_ERROR;
  static queries = BraveQueries;
  static generators = BraveGenerators;
  static scrubbers = BraveScrubbers;
  constructor() {}
}
