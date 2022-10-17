export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Actions {
  Set = "SET_FILTERS",
  Change = "CHANGE_FILTERS",
  Clean = "CLEAN_FILTERS"
};
