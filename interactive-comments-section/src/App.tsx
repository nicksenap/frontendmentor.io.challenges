import React, { useContext } from "react";
import "./App.css";
import { CardContainer } from "./components/CardContainer";
import { DeletePopUp } from "./components/DeletePopUp";
import data from "./data/data.json";
import { RootType } from "./interfaces/Types";
import AppProvider, { AppContext } from "./context/AppContext";

function App() {
  const refinedData: RootType = data as RootType;
  const {} = useContext(AppContext);
  return (
    <AppProvider>
      <div className="App">
        <DeletePopUp />
        {refinedData.comments.map((card: any) => {
          return <CardContainer {...card} />;
        })}
      </div>
    </AppProvider>
  );
}

export default App;
