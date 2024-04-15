import { ProgressSpinner } from "primereact/progressspinner";

const LoadingForm = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[200]">
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      </div>
    </>
  );
};

export default LoadingForm;
