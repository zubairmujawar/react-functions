import Items from "./Items";

const FoodItems = () => {
  const food = ["Rice", "Biryani", "polao", "Kheema pav", "Dal", "wheat", "Milk"];

  return (
    <div className="container">
      <h1>List of Foods</h1>
      {
        
      food.map((name) => (                
        <Items foodItem={name} key={name} /> // props reciving name should be same
        ))
      }
    </div>
  );
};

export default FoodItems;
