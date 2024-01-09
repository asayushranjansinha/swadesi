"use client";
import { Button } from "@/components/ui/button";
import { Product, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useNewProduct } from "@/hooks/useNewProducts";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

function page() {
  const testmodal = useNewProduct();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://658eeec82871a9866e7a0c09.mockapi.io/ecommerce-admin-panel/products"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result: Product[] = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Our Products</h1>
        <Button onClick={() => testmodal.onOpen()}>
          <span className="text-md font-bold">Add New</span>
          <Icon icon="ic:outline-add" height="24" width="24" className="ml-2" />
        </Button>
      </div>
      <DataTable
        data={data}
        columns={columns}
        showFilters
        filterWith={["id", "stock", "price", "name"]}
      />
    </>
  );
}

export default page;
