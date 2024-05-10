export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      homestats: undefined;
      mealcreator: undefined;
      mealeditor: {
        id: string;
        inDiet: boolean;
      };
      feedback: {
        selection: 'SIM' | 'NÃO';
      };
      mealinfo: {
        id: string;
        hour: string;
        name: string;
        date: string;
        description: string;
        inDiet: boolean;
      }
    }
  }
}