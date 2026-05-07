export type Stage = "Applied" | "Interview" | "Offer" | "Rejected";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  stack: string[];
}

export interface Application {
  id: string;
  company: string;
  role: string;
  stage: Stage;
}
