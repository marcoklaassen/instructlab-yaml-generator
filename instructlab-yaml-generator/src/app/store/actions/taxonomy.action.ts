import { Action } from '@ngrx/store';
import { Taxonomy } from '../models/taxonomy.model';

export enum TaxonomyActionType {
  EDIT_TAXONOMY = '[TAXONOMY] Edit Taxonomy',
}
export class EditTaxonomyAction implements Action {
  readonly type = TaxonomyActionType.EDIT_TAXONOMY;
  constructor(public payload: Partial<Taxonomy>) {}
}
export type TaxonomyAction = EditTaxonomyAction;
