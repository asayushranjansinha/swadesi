import { useUserStore } from "@/hooks/userStore";
import { redirect } from "next/navigation";

function AdminLayout({ children }: { children: React.ReactNode }) {
  // for unauthenticated users redirect to home
  if (!useUserStore.getState().user) redirect("/");
  return <div>{children}</div>;
}

export default AdminLayout;
