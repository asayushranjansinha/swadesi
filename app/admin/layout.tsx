import Header from "@/components/admin/Header";
import HeaderMobile from "@/components/admin/HeaderMobile";
import SideNav from "@/components/admin/SideNav";
import Sidebar from "@/components/admin/Sidebar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-grow">
        <div className="flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen">
          <Header />
          <HeaderMobile />
          {children}
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
