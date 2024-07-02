import { Injectable } from '@angular/core';
import * as yaml from 'js-yaml';

@Injectable({
  providedIn: 'root',
})
export class JsonToYamlService {
  constructor() {}

  jsonToYaml(jsonObj: any): string {
    try {
      const yamlStr = yaml.dump(jsonObj);
      return yamlStr;
    } catch (e) {
      console.error('Error converting JSON to YAML:', e);
      throw e;
    }
  }
}
