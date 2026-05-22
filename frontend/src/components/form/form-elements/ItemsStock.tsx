import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import PhoneInput from "../group-input/PhoneInput";
import DatePicker from "../date-picker.tsx";
import Switch from "../switch/Switch";
import { AlertHexaIcon } from "../../../icons";

export default function ItemsStock({ formData, setFormData }) {
  const countries = [{ code: "p", label: "/PCS" }];

  return (
    <ComponentCard title="Stock">
      <div>
        <Label>Opening Stock</Label>
        <PhoneInput
          selectPosition="end"
          countries={countries}
          placeholder="EX: 35"
          // value={formData.openingStock}
          onChange={(val) => setFormData({ ...formData, openingStock: val })}
        />
      </div>

      <div>
        <DatePicker
          id="date-picker"
          label="As of Date"
          // defaultDate= {new Date().toISOString().split("T")[0]}
          placeholder="Select a date"
          onChange={(dates, currentDateString) =>
            setFormData({ ...formData, asOfDate: currentDateString })
          }
        />
      </div>

      <div className="flex gap-4 relative">
        <AlertHexaIcon />
        <Label>Low Stock Alert</Label>
        <div className="absolute right-2">
          <Switch
            label=""
            defaultChecked={formData.lowStockAlert}
            onChange={(val) => setFormData({ ...formData, lowStockAlert: val })}
          />
        </div>
      </div>
    </ComponentCard>
  );
}