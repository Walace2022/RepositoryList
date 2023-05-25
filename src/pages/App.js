import { useState } from "react";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { Container } from "./styles";

function App() {
const [repos, setRepos] = useState();

  return (
    <Container>
      <span>Ola</span>
      <Input />
      <Button />
      <ItemRepo/>
    </Container>
  );
}

export default App;
