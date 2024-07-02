import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { NextButtonComponent } from '../next-button/next-button.component';
import { JsonToYamlService } from '../services/json-to-yaml.service';
import { AppState } from '../store/models/state.model';

@Component({
  selector: 'yaml-output-tab',
  standalone: true,
  imports: [CommonModule, NextButtonComponent],
  templateUrl: './yaml-output-tab.component.html',
  styleUrl: './yaml-output-tab.component.scss',
})
export class YamlOutputTabComponent {
  taxonomyYaml$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private jsonToYamlService: JsonToYamlService,
  ) {}

  ngOnInit(): void {
    this.taxonomyYaml$ = this.store
      .select((store) => store.taxonomy)
      .pipe(map((values) => this.jsonToYamlService.jsonToYaml(values)));
  }
}
