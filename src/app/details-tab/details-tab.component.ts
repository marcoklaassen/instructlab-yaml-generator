import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { NextButtonComponent } from '../next-button/next-button.component';
import { EditTaxonomyAction } from '../store/actions/taxonomy.action';
import { AppState } from '../store/models/state.model';
import { Taxonomy } from '../store/models/taxonomy.model';

@Component({
  selector: 'details-tab',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NextButtonComponent],
  templateUrl: './details-tab.component.html',
  styleUrl: './details-tab.component.scss',
})
export class DetailsTabComponent implements OnInit {
  detailsForm = new FormGroup({
    githubUser: new FormControl(''),
    skillName: new FormControl(''),
  });

  taxonomy$: Observable<Taxonomy>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.taxonomy$ = this.store.select((store) => store.taxonomy);

    this.detailsForm.valueChanges
      .pipe(
        tap((v) =>
          this.store.dispatch(
            new EditTaxonomyAction({
              created_by: v.githubUser ? v.githubUser : '',
              task_description: v.skillName ? v.skillName : '',
            }),
          ),
        ),
      )
      .subscribe();
  }
}
