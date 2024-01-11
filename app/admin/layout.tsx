import SideNav from "@/components/admin/SideNav";
import Header from "@/components/admin/Header";
import HeaderMobile from "@/components/admin/HeaderMobile";
import { useUserStore } from "@/hooks/userStore";
import { redirect } from "next/navigation";

function AdminLayout({ children }: { children: React.ReactNode }) {
  // for unauthenticated users redirect to home
  if (!useUserStore.getState().user) redirect("/");
  return (
    <div className="w-full flex flex-col md:flex-row">
      <SideNav />
      <div className="flex-grow flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen">
        <Header />
        <HeaderMobile />
        <div className="min-w-full p-4 pb-8">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
