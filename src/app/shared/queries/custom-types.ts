export type GetOwnerQuery = {
  __typename: 'AppData';
  owner?: string | null;
};

export type GetLastRefreshedQuery = {
  __typename: 'AppData';
  agencies: {
    __typename: 'Agencies';
    transunion?: {
      __typename: 'Transunion';
      fulfilledOn?: string | null;
    };
  };
};
