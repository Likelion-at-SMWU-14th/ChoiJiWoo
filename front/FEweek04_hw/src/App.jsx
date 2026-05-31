import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #3b1207;
  padding: 50px;
`;

function App() {
  return (
    <div>
      <AppContainer>
        <Header />
        <MovieCard />
        <Footer />
      </AppContainer>
    </div>
  );
}
export default App;
