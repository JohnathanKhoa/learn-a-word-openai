import Compliment from "@/open-ai-actions";
import { translate } from "bing-translate-api";
export default async function Home() {
  const compliment = await Compliment();
  const word = await translate(compliment!, null, 'vietnamese');
  console.log(await word!.translation);
  return (
    <main>
      <div>
      {word!.translation}
      </div>
    </main>
  );
}
