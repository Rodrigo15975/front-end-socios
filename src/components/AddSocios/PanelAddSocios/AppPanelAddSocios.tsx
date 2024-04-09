import AppPanelFormAddSocios from "./PaneFormAddSocios/AppPanelFormAddSocios";
import TitlePanelAddSocios from "./TitlePanelAddSocios";

const AppPanelAddSocios = () => {
  return (
    <>
      <article className="flex-[0_1_110rem] flex items-center justify-center p-4 m-auto min-h-[100vh]">
        <section className="flex rounded-md p-4 flex-wrap bg-bg_default gap-4 min-h-[95vh] w-full">
          <TitlePanelAddSocios />
          <AppPanelFormAddSocios />
        </section>
      </article>
    </>
  );
};

export default AppPanelAddSocios;
