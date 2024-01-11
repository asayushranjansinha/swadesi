import SalesAndInventory from "@/components/admin/SalesAndInventory";
import WidgetContainer from "@/components/admin/WidgetContainer";

function AdminPage() {
  return (
    <section className="w-full h-full">
      <WidgetContainer />
      <SalesAndInventory />
    </section>
  );
}

export default AdminPage;
