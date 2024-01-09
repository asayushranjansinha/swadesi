import Header from "@/components/admin/Header";
import HeaderMobile from "@/components/admin/HeaderMobile";
import SideNav from "@/components/admin/SideNav";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex">
      <SideNav />
      <main className="flex-grow flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen overflow-hidden">
        <Header />
        <HeaderMobile />
        <div className="p-4 pb-8">
          {children}
        </div>
      </main>
    </div>
  );
}


export default AdminLayout;
