import { ProgressSpinner } from "primereact/progressspinner";

const Loading = () => {
  return (
    <>
      <div className="w-full mt-[4rem] flex justify-center items-center">
        <ProgressSpinner />
      </div>
    </>
  );
};

export default Loading;
