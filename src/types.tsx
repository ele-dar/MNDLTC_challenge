export type FeedbackData = {
  name: string;
  score: number;
  feedback: string;
};

export interface MockResponse {
  status: number;
  json: () => Promise<FetchResponse>;
}

export type FetchResponse = {
  data: { feedback: FeedbackData[] };
};

export type DataContextType = {
  data: FeedbackData[];
};
