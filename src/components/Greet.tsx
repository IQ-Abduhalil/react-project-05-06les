type GreetProps = {
  name: string;
  count?: number;
};

const Greet = ({ name, count = 0 }: GreetProps) => {
  return (
    <>
      {/* {Users.map((item, index) => {
        return (
          <div key={index}>
            {item.first} {item.last} 
          </div>
        );
      })} */}

      <h1>
        {name} {count}
      </h1>
    </>
  );
};

export default Greet;
