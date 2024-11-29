import Item from "./Item";

const WeGivesYou = () => {

  const data = [
    {
      id: 2356,
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732535835/Group_1_jcoppd.svg",
      title: "Yourself",
      subtitle:"Overwhelming, annoying, time consuming",
      list: [
        "Cost risk: 0",
        "Time-consuming",
        "Overwhelming",
        "Low chance of success",
        "High chance of having to appeal to the court",
        "Stressful",
        "Most likely to give up",
      ]
    },
    {
      id: 35252,
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732535835/Logo_Fly-removebg-preview_1_kqkruo.png",
      subtitle:"Simple, takes 5 minutes, promising",
      list: [
        "Cost risk: 0",
        "You only need to submit claim (takes 5 minutes)",
        "High chance of success",
        "Help of experts in this field",
        "Stress free (We do everything)",
      ]
    },
    {
      id: 46453,
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732535834/Group_2_cafvlv.svg",
      title: "Lawyer",
      subtitle:"Expensive, Complex",
      list: [
        "Cost risk: several hundred euros (as much as the compensation you may get)",
        "Time-consuming",
        "High chance of having to appeal to the court",
        "Chance of success depends on the specialist",
        "Stressful (you have to cooperate with the lawyer)",
      ]
    }
  ]
  return (
    <div className="WeGivesYou">
      <div className="container">
        <div className="row">
          {data?.map((item) => {
            return (
              <div className="col-lg-4" key={item.id}>
                <Item item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default WeGivesYou;
