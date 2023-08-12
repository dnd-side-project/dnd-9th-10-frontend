import { getBbokCharacters } from "../apis/character";
import { getFriends } from "../apis/friend";
import MainPage from "./_components/MainPage";

export default async function Page() {
  const friends = await getFriends();
  const characters = await getBbokCharacters();

  return <MainPage friends={friends} characters={characters} />;
}
