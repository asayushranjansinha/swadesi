import Header from "@/components/admin/Header";
import HeaderMobile from "@/components/admin/HeaderMobile";
import SideNav from "@/components/admin/SideNav";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <SideNav />
      <div className="flex-grow flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen">
        <Header />
        <HeaderMobile />
        <div className="min-w-full p-4 pb-8 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
