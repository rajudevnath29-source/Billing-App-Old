import { useEffect, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
// import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import AllItemTable from "../../components/tables/BasicTables/AllItemTable";
import api from "../../services/api";

export default function ViewItems() {

  const [items, setItems] = useState([]);
  const fetchItems = () => {
    api.get("item/view-items")
      .then((res) => setItems(res.data))
      .catch(() => alert("Failed to fetch items"));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`item/delete/${id}`);
      alert("Item deleted successfully.");
      fetchItems(); // Refresh the table after deletion
    } catch (error) {
      console.error("Error deleting item", error);
      alert("Failed to delete item.");
    }
  };
  return (
    <>

      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Item List" />
      <div className="space-y-6">
        {/* <ComponentCard title="All Items"> */}
        <AllItemTable data={items} onDelete={handleDelete} />
        {/* </ComponentCard> */}
      </div>
    </>
  );
}
