export type RootStackParamList = {
  Home: undefined;
  AllStory: undefined;
  Test: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
