export type RootStackParamList = {
  Home: undefined;
  Test: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
