import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ItemsInputs from "../../components/form/form-elements/ItemsInput";
import ItemsStock from "../../components/form/form-elements/ItemsStock";
import ItemsPrice from "../../components/form/form-elements/ItemsPrice";
import FileInputExample from "../../components/form/form-elements/FileInputExample";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import api from "../../services/api";

export default function AddItems() {
  const [formData, setFormData] = useState({
    itemName: "",
    itemSize: "",
    unit: "p",
    salesPrice: "",
    purchasePrice: "",
    openingStock: "",
    asOfDate: "",
    lowStockAlert: false,
    image: null,
  });

  const handleSubmit = async () => {

    console.log(formData);
    //   try {
    //     const res = await api.post("/item/add-item", formData);
    //     alert("Item added successfully!");
    //   } catch (err) {
    //     alert("Failed to add item");
    //   }
    // };
    const payload = new FormData();
    payload.append("itemName", formData.itemName);
    payload.append("unit", formData.unit);
    payload.append("salesPrice", formData.salesPrice);
    payload.append("purchasePrice", formData.purchasePrice);
    payload.append("openingStock", formData.openingStock);
    payload.append("asOfDate", formData.asOfDate);
    payload.append("lowStockAlert", formData.lowStockAlert ? "true" : "false");
    payload.append("image", formData.image);

    await api.post("/item/add-item", payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };

  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin"
        description="This is React.js Form Elements Dashboard page"
      />
      <PageBreadcrumb pageTitle="Add Items" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ItemsInputs formData={formData} setFormData={setFormData} />
          <ItemsStock formData={formData} setFormData={setFormData} />
        </div>
        <div className="space-y-6">
          <ItemsPrice formData={formData} setFormData={setFormData} />
          <FileInputExample formData={formData} setFormData={setFormData} />
        </div>
      </div>
      <div className="mt-6">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}