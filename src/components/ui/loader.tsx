const Loader: React.FC = () => {
  const renderDots = "Loading".split("").map((char) => (
    <span key={char} className="">
      {char}
    </span>
  ));

  return (
    <div className="absolute top-0 right-0 z-50 h-screen w-screen bg-amber-200">
      {renderDots}
    </div>
  );
};

export default Loader;
