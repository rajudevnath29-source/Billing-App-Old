import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
// import Select from "../Select";
// import PhoneInput from "../group-input/PhoneInput";


export default function ItemsInputs({ formData, setFormData }) {
  // const sizeOptions = [
  //   { code: "m", label: "MB" },
  //   { code: "g", label: "GB" },
  //   { code: "t", label: "TB" },
  //   { code: "0", label: "None" },
  // ];

  return (
    <>
      <ComponentCard title="Items">
        <div className="space-y-6">
          <div>
            <Label htmlFor="input">Item Name</Label>
            <Input
              type="text" id="iten_name"
              value={formData.itemName}
              placeholder = "Enter Your Item Full Name"
              onChange={(e) => setFormData({ ...formData, itemName: e.target.value })} />
          </div>
        </div>
        {/* <div>
          <Label>Item Size</Label>
          <PhoneInput
            selectPosition="end"
            defaultCode="g"
            countries={sizeOptions}
            placeholder="128 GB"
            value={formData.itemSize}
            onChange={(val) => setFormData({ ...formData, itemSize: val })}
          />
        </div> */}
      </ComponentCard>
    </>
  );
}