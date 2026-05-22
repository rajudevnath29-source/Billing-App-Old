// import { API_BASE_URL } from '../../../services/api';
// import { PencilIcon, TrashBinIcon, UserIcon} from "../../../icons";
// import { useNavigate } from "react-router-dom";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../../ui/table";

// interface Item {
//   id: number;
//   item_name: string;
//   unit: string;
//   sales_price: number;
//   purchase_price: number;
//   image: string;
//   created_at: string;
// }

// interface AllItemTableProps {
//   data: Item[];
//   onDelete: (id: number) => void;
// }

// export default function AllItemTable({ data , onDelete }: AllItemTableProps) {
//   const navigate = useNavigate();
//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
//       <div className="max-w-full overflow-x-auto">
//         <Table>
//           <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
//             <TableRow>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
//               >
//                 Item
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
//               >
//                 Sales Price
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
//               >
//                 Purchase Price
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
//               >
//                 Current Stock
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
//               >
//                 Date
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
//               >
//                 Action
//               </TableCell>
//             </TableRow>
//           </TableHeader>

//           <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//             {data.map((item) => (
//               <TableRow key={item.id}>
//                 <TableCell className="px-5 py-4 text-start">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 overflow-hidden rounded-full">
//                       <img
//                         width={40}
//                         height={40}
//                         src={`${API_BASE_URL}${item.image}`}
//                         alt={item.item_name}
//                       />
//                     </div>
//                     <div>
//                       <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
//                         {item.item_name}
//                       </span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="px-5 py-4 text-start">₹{item.sales_price}</TableCell>
//                 <TableCell className="px-5 py-4 text-start">₹{item.purchase_price}</TableCell>
//                 <TableCell className="px-5 py-4 text-start">{item.opening_stock}</TableCell>
//                 <TableCell className="px-5 py-4 text-start">{item.created_at?.slice(0, 10)}</TableCell>
//                 <TableCell className="px-5 py-4 text-start">
//                   <div className="flex gap-4 relative">
//                     <button  onClick={() => navigate(`/add-items/${item.id}`)}><PencilIcon className="h-5 w-5 text-blue-500" /></button>
//                     <button ><TrashBinIcon className="h-5 w-5 text-red-500" /></button>
//                     <button><UserIcon className="h-5 w-5 text-green-500" /></button>
//                   </div>

//                   {/* <div className="flex items-center gap-2">
//                     <button className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-2 py-1 text-sm font-medium shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
//                       <PencilIcon className="h-5 w-5 text-black-500" />
//                     </button>

//                     <button className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-2 py-1 text-sm font-medium shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
//                       <TrashBinIcon className="h-5 w-5 text-red-500" />
//                     </button>
//                     <button className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-2 py-1 text-sm font-medium shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
//                       <UserIcon className="h-5 w-5 text-green-500" />
//                     </button>
//                   </div> */}

//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { API_BASE_URL } from '../../../services/api';
import { PencilIcon, TrashBinIcon, UserIcon } from "../../../icons";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

interface Item {
  id: number;
  item_name: string;
  unit: string;
  sales_price: number;
  purchase_price: number;
  image: string;
  created_at: string;
  opening_stock: number;
}

interface AllItemTableProps {
  data: Item[];
  onDelete: (id: number) => void;
}

export default function AllItemTable({ data, onDelete }: AllItemTableProps) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const openModal = (id: number) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedId !== null) {
      onDelete(selectedId);
    }
    setShowModal(false);
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                {/* <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Sr. No.</TableCell> */}
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Item</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Sales Price</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Purchase Price</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Current Stock</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Date</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Action</TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {data.map((item, index) => (
                <TableRow key={item.id}>
                  {/* <TableCell className="px-5 py-4 text-start">{index + 1}</TableCell> */}
                  <TableCell className="px-5 py-4 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img src={`${API_BASE_URL}${item.image}`} alt={item.item_name} width={40} height={40} />
                      </div>
                      <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">{item.item_name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">₹{item.sales_price}</TableCell>
                  <TableCell className="px-5 py-4 text-start">₹{item.purchase_price}</TableCell>
                  <TableCell className="px-5 py-4 text-start">{item.opening_stock}</TableCell>
                  <TableCell className="px-5 py-4 text-start">{item.created_at?.slice(0, 10)}</TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <div className="flex gap-4 relative">
                      <button onClick={() => navigate(`/add-items/${item.id}`)}><PencilIcon className="h-5 w-5 text-blue-500" /></button>
                      <button onClick={() => openModal(item.id)}><TrashBinIcon className="h-5 w-5 text-red-500" /></button>
                      {/* <button><UserIcon className="h-5 w-5 text-green-500" /></button> */}
                      <button onClick={() => setSelectedItem(item)}><UserIcon className="h-5 w-5 text-green-500" /></button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 z-99999">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold text-gray-800">Delete Confirmation</h2>
            <p className="mt-2 text-sm text-gray-600">Are you sure you want to delete this item?</p>
            <div className="mt-4 flex justify-center gap-4">
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"> Yes, Delete </button>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">Cancel</button>
            </div>
          </div>
        </div>
      )};

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm z-99999">
          <div className="relative w-full max-w-xl rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg">
            {/* Close Button (top-right corner) */}
            <button onClick={() => setSelectedItem(null)}className="absolute right-4 top-2 text-gray-400 hover:text-red-500 text-4xl font-bold focus:outline-none">&times;</button>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <img
                  src={`${API_BASE_URL}${selectedItem.image}`}
                  alt={selectedItem.item_name}
                  className="w-32 h-32 rounded-lg object-cover border border-gray-300"
                />
              </div>

              {/* Details */}
              <div className="w-full md:w-2/3 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {selectedItem.item_name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300"><strong>Unit:</strong> {selectedItem.unit}</p>
                <p className="text-gray-600 dark:text-gray-300"><strong>Sales Price:</strong> ₹{selectedItem.sales_price}</p>
                <p className="text-gray-600 dark:text-gray-300"><strong>Purchase Price:</strong> ₹{selectedItem.purchase_price}</p>
                <p className="text-gray-600 dark:text-gray-300"><strong>Opening Stock:</strong> {selectedItem.opening_stock}</p>
                <p className="text-gray-600 dark:text-gray-300"><strong>Date:</strong> {selectedItem.created_at?.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        </div>
      )};


    </>
  );
}

