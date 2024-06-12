import { useRouteError } from "react-router-dom";

const RouteError = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops !!!</h1>
      <h2>Something went wrong !!!</h2>
      <h3>{err?.error?.message}</h3>
    </div>
  );
};

export default RouteError;