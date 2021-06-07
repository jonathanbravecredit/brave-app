import {
  AgenciesInput,
  EquifaxInput,
  ExperianInput,
  TransunionInput,
} from '@shared/services/aws/api.service';

export class AgenciesStateModel implements AgenciesInput {
  transunion?: TransunionInput | null | undefined;
  equifax?: EquifaxInput | null | undefined;
  experian?: ExperianInput | null | undefined;
  currentRawQuestions?: string;
}
