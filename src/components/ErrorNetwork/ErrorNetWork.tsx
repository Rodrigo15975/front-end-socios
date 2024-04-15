const ErrorNetWork = ({ error }: { error: Error }) => {
  return (
    <>
      <div className="mt-8 text-center">
        <p className="text-2xl">
          Error: <span className="text-rose-700">{error.message}</span>
        </p>
      </div>
    </>
  );
};

export default ErrorNetWork;
