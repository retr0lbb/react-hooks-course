import React from "react";

// Define your data interface
export interface DataInterface {
  number: number;
  text: string;
  secrete: string;
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

// Define your initial data
export const data: DataInterface = {
  number: 123,
  text: "Context Api",
  secrete: "im a furry",
  state: null,
  setState: () => {}
};

// Create the context
export const DataContext = React.createContext(data);
