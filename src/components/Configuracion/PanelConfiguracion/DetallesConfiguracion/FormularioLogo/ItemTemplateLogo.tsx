type Infile = {
  objectURL: string;
};

export const itemTemplate = (file: object) => {
  const infile = file as Infile;
  return (
    <div className="flex align-items-center flex-wrap">
      <div className="flex align-items-center m-auto flex-[0_1_15rem]">
        <img
          role="presentation"
          src={infile.objectURL}
          className="w-full border rounded-lg shadow-lg min-h-[5rem] "
        />
      </div>
    </div>
  );
};
