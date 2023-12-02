const Items = ({foodItem}) => {

  return (

    <div className="">
      <p key={foodItem} className="list-item">{foodItem}</p>
    </div>
  );
};

export default Items;
