import Card from "../src/components/card";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="Lion King" />
    </div>
  );
};

export default App;
