import Items from "./Items";
// reference: KG codding react course, time: 3h:49min:20sec  

const FoodItems = ({item}) => {

  return (
    <div className="container">
      <h1>List of Foods</h1>
      {
      item.map((name) => (                
        <Items foodItem={name} key={name} /> // props reciving name should be same
        ))
      }
    </div>
  );
};

export default FoodItems;
