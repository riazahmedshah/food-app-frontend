export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string[];
  bgColor: string;
}

export interface Step {
  id: string;
  number: number;
  title: string;
  description: string[];
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}