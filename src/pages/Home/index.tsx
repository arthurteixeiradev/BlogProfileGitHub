import { Post } from "../Post";
import { Summary } from "./components/Summary";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Summary />
      <Post />
    </HomeContainer>
  );
}
