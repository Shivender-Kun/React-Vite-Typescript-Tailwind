import { Footer, Header, Sidebar } from "../components/layout";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
