"use client";
import { useEffect, useState } from "react";
import NewProductModal from "../admin/NewProductModal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <NewProductModal />
    </>
  );
}
