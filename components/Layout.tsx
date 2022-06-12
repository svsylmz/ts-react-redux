import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children, mainPage }: any) {
  return (
    <>
      <Header />

      {mainPage ? (
        <>
          <div className="page-title absolute mt-6 ml-2 text-2xl font-bold">
            TMDB PROJECT
          </div>
          <div className="py-10 flex bg-slate-100">
            <div className="pl-2 pr-2 sticky h-screen hidden lg:block top-0 w-1/5 mt-8">
              <Sidebar />
            </div>

            <div className="container mx-auto p-2 mt-6">{children}</div>
          </div>
        </>
      ) : (
        <>{children}</>
      )}

      <Footer />
    </>
  );
}
