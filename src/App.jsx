import Card from "../src/components/card";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-5xl">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="Lion King" />
    </div>
  );
};

export default App;
