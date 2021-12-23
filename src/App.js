import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ClickCounter from "./Component/ClickCounter/Index";
import DogPicture from "./Component/DogPictureView/Index";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <ClickCounter />
      <QueryClientProvider client={queryClient}>
        <DogPicture />
      </QueryClientProvider>
    </div>
  );
}

export default App;
