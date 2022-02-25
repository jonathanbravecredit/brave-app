export interface Initiative {
  id: string;
  program: string;
  programTasks: any[];
  initiative: string;
  initiativeReason: string;
  initiativeStatus: string;
  initiativeTitle: string;
  initiativeTasks: InitiativeTask[];
}
export interface InitiativeTask {
  parentId: string;
  taskId: string;
  taskStatus: string;
  taskOrder: number;
  taskCard: InitiativeTaskCard;
  taskLabel: string;
  subTasks: InitiativeSubTask[] | null;
}
export interface InitiativeTaskCard {
  header: string;
  textOne: string;
}
export interface InitiativeExtendedTaskCard extends InitiativeTaskCard {
  textTwo: string | null;
  textButton: string | null;
  metric: string;
  successHeader: string;
  successText: string;
  questionHeader: string;
  link: string;
}

export interface InitiativeSubTask extends InitiativeTask {
  taskCard: InitiativeExtendedTaskCard;
}

export interface InitiativePatchBody {
  parentId: string | undefined;
  taskId: string | undefined;
  status: string | undefined;
}
