const App = () => {
  const name = 'Roman';
  return (
    <>
      <h1>
        React TypeScript Template -{process.env.NODE_ENV}.{process.env.name}.
        By: {name}!
      </h1>
    </>
  );
};

export default App;
