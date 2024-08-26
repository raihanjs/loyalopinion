import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import GiftCard from "../../components/GiftCard/GiftCard";

export default function RewardsPage() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("giftcards.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <>
      <Hero
        img="https://cdn4.rsncdn.com/prd/dynamicAsset/vop4/asset_pages_rewards_hero/23/en_US/4d629647-437c-4b60-8a0f-dc6f9d945216"
        title="Earn gift cards from top US retailers"
        subTitle=" Reward yourself with vouchers from Amazon.com, Macy’s, Target and many more, when you take online surveys. "
      />

      <section className="py-20">
        <div className="container">
          <div className="flex justify-center flex-wrap gap-5">
            {cards?.map((card, i) => (
              <GiftCard card={card} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
