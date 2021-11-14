import spinner from "../utils/Walk.gif";

function Loader(): JSX.Element {
  return (
    <div className="loader">
      <img src={spinner} alt="stick man gif walking" />
      <h1>Fetching data</h1>
    </div>
  );
}

export default Loader;
