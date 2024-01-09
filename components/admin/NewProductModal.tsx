"use client";

import React from "react";
import { Modal } from "../ui/modal";
import { useNewProduct } from "@/hooks/useNewProducts";
import NewProduct from "../forms/NewProduct";

function NewProductModal() {
  const testmodal = useNewProduct();
  return (
    <Modal
      title="Add New Product"
      description="Fill the form to add new product"
      isOpen={testmodal.isOpen}
      onClose={testmodal.onClose}
    >
      <NewProduct />
    </Modal>
  );
}

export default NewProductModal;
