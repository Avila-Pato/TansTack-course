"use client";
import AppQuery from "../hooks/AppQuery";

const Tanstack = () => {
  const { RandomQuery } = AppQuery();

  if (RandomQuery.isError) {
    return <h1>Error: {JSON.stringify(RandomQuery.error.message)}</h1>;
  }

  return (
    <>
      <div>
        {RandomQuery.isFetching ? (
          <h1>Loading...</h1>
        ) : (
          <h1>{RandomQuery.data}</h1>
        )}
        <span style={{ display: "block", paddingBottom: "32px" }}>.....</span>
      </div>

      <div>
        <button onClick={() => RandomQuery.refetch()}>
          Generar nuevo número
        </button>
      </div>
    </>
  );
};

export default Tanstack;
