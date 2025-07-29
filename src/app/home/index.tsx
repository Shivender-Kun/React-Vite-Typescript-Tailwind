import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import Page from "../../components/layout/page";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { increaseCount } from "../../store/reducers/counter";

const Home: React.FC = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <Page.Wrapper>
      <Page.Heading title="Home" />
      <Page.Content>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <div className="flex gap-8">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="animate-spin" alt="React logo" />
          </div>
          <h1 className="text-2xl">Vite + React</h1>
          <div className="flex flex-col items-center gap-4">
            <button
              className="rounded-lg border-1 bg-amber-300 p-4"
              onClick={() => dispatch(increaseCount())}
            >
              count is {count}
            </button>
            <p>
              Edit <code>src/pages/Home/index.tsx</code> and save to test HMR
            </p>
          </div>
        </div>
      </Page.Content>
    </Page.Wrapper>
  );
};

export default Home;
