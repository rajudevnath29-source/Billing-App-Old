import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import Select from "../Select.tsx";


export default function ItemsPrice({ formData, setFormData }) {
const unitOptions = [{ value: "p", label: "PCS" }];

  return (
    <>
      <ComponentCard title="Pricing">
        <div>
          <Label>Unit</Label>
          <Select
            options={unitOptions}
            placeholder="Select Unit"
            // onChange={handleSelectChange}
            defaultValue = "p"
            className="dark:bg-dark-900"
            value={formData.unit}
            onChange={(value) => setFormData({ ...formData, unit: value })}
          />
        </div>
        <div>
          <Label>Sales Price</Label>
          <div className="relative">
            <Input
              placeholder="130"
              type="text"
              className="pl-[62px]"
              value={formData.salesPrice}
              onChange={(e) => setFormData({ ...formData, salesPrice: e.target.value })}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <h3> ₹ </h3>
            </span>
          </div>
        </div>
        <div>
          <Label>Purchase Price</Label>
          <div className="relative">
            <Input
              placeholder="115"
              type="text"
              className="pl-[62px]"
              value={formData.purchasePrice}
              onChange={(e) => setFormData({ ...formData, purchasePrice: e.target.value })}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <h3> ₹ </h3>
            </span>
          </div>
        </div>
      </ComponentCard>
    </>
  );
}