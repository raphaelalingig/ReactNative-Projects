import React, { useState } from "react"; // Import useState
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false); 

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation isSwitchOn={isSwitchOn} /> 
      </SafeAreaView>
    </PaperProvider>
  );
}
