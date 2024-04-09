import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="px-4 py-8 flex min-h-screen w-full items-center justify-center">
      <section className="bg-bg_default rounded-xl shadow-lg max container m-auto p-[1rem] ">
        <article className="border rounded-md border-border_three/10 shadow-md min-h-[90vh]">
          {children}
        </article>
      </section>
    </div>
  );
};

export default Container;
