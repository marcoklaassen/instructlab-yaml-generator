import { Routes } from '@angular/router';
import { DetailsTabComponent } from './details-tab/details-tab.component';
import { QuestionsTabComponent } from './questions-tab/questions-tab.component';
import { YamlOutputTabComponent } from './yaml-output-tab/yaml-output-tab.component';

export const routes: Routes = [
  {
    path: '',
    component: DetailsTabComponent,
    title: 'Details',
  },
  {
    path: 'questions',
    component: QuestionsTabComponent,
    title: 'Questions',
  },
  {
    path: 'output',
    component: YamlOutputTabComponent,
    title: 'Output',
  },
];
