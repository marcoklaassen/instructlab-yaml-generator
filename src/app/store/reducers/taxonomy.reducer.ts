import { Action } from '@ngrx/store';
import { TaxonomyAction, TaxonomyActionType } from '../actions/taxonomy.action';
import { Taxonomy } from '../models/taxonomy.model';

const initialState: Taxonomy = {
  version: 2,
  created_by: '',
  task_description: '',
  seed_examples: [],
};

export const TaxonomyReducer = (
  state: Taxonomy = initialState,
  action: Action,
) => {
  switch (action.type) {
    case TaxonomyActionType.EDIT_TAXONOMY:
      let a = action as TaxonomyAction;
      return { ...state, ...a.payload };
    default:
      return state;
  }
};
