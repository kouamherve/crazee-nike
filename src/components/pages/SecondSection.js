import HomeCard from "../reusable-ui/HomeCard";

export default function SecondSection() {
  return (
    <section>
      <HomeCard
        detail="Just Dropped"
        title="The Aura Bag"
        image="https://cdn.pixabay.com/photo/2016/08/30/14/10/bag-1630852_1280.jpg"
      />
      <HomeCard
        detail="New Arrivals"
        title="Air Jordan 4 'Oxydized Green'"
        image="https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619_1280.jpg"
      />
      <HomeCard
        detail="Don't Waste Your Energy"
        title="Run in Pegasus 41"
        image="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg"
      />
      <HomeCard
        detail="Look Good, Play Good"
        title="Prime Time Gear"
        image="https://cdn.pixabay.com/photo/2020/05/27/07/40/nike-5226090_1280.jpg"
      />
    </section>
  );
}
