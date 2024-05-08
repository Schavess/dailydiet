export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      homestats: undefined;
      mealcreator: undefined;
      feedback: {
        selection: 'SIM' | 'NÃO';
      };
      mealinfo: {
        hour: string;
        name: string;
        inDiet: boolean;
      }
    }
  }
}