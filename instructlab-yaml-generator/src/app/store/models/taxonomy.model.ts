export interface Taxonomy {
  version: 2;
  created_by: string;
  task_description: string;
  seed_examples: SeedExample[];
}

export interface SeedExample {
  question: string;
  answer: string;
}
