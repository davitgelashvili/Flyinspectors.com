import Item from "./Item";

const WeGivesYou = () => {

  const data = [
    {
      id: 2356,
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732535835/Group_1_jcoppd.svg",
      title: "title 1",
      list: [
        "list 1",
        "list 2",
      ]
    },
    {
      id: 35252,
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732535835/Logo_Fly-removebg-preview_1_kqkruo.png",
      // title: "title 2",
      list: [
        "list 1",
        "list 2",
      ]
    },
    {
      id: 46453,
      icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732535834/Group_2_cafvlv.svg",
      title: "title 3",
      list: [
        "list 1",
        "list 2",
      ]
    }
  ]
  return (
    <div className="WeGivesYou">
      <div className="container">
        <div className="row">
          {data?.map((item) => {
            return (
              <div className="col-lg-4">
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
