import { Route, Routes } from "react-router-dom";
import { allRouths } from "./routes/rouths";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {allRouths.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
