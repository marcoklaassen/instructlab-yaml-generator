import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { NextButtonComponent } from '../next-button/next-button.component';
import { EditTaxonomyAction } from '../store/actions/taxonomy.action';
import { AppState } from '../store/models/state.model';
import { Taxonomy } from '../store/models/taxonomy.model';

@Component({
  selector: 'questions-tab',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NextButtonComponent],
  templateUrl: './questions-tab.component.html',
  styleUrl: './questions-tab.component.scss',
})
export class QuestionsTabComponent implements OnInit {
  qaForm: FormGroup;
  taxonomy$: Observable<Taxonomy>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
  ) {
    this.qaForm = this.fb.group({
      questions: this.fb.array([]),
    });
    this.addQuestion();
  }

  ngOnInit(): void {
    this.taxonomy$ = this.store.select((store) => store.taxonomy);

    // TODO size of question / answer dynamically
    this.qaForm.valueChanges
      .pipe(
        tap((v) =>
          this.store.dispatch(
            new EditTaxonomyAction({
              seed_examples: v.questions,
            }),
          ),
        ),
      )
      .subscribe();
  }

  get questions() {
    return this.qaForm.get('questions') as FormArray;
  }

  addQuestion() {
    const questionGroup = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
    });
    this.questions.push(questionGroup);
  }

  removeQuestion(index: number) {
    if (this.questions.length > 1) {
      this.questions.removeAt(index);
    }
  }
}
