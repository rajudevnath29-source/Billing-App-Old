import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import FileInput from "../input/FileInput";
import Label from "../Label";

export default function FileInputExample({ formData, setFormData }) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setFormData({ ...formData, image: file });

      // Create local preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (JPG, PNG, etc).");
    }
  };

  return (
    <ComponentCard title="Other Input">
      <div className="space-y-4">
        <div>
          <Label>Upload Image</Label>
          {/* Ensure accept="image/*" is passed to restrict selectable files */}
          <FileInput
            onChange={handleFileChange}
            className="custom-class"
            accept="image/*"
          />
        </div>

        {previewImage && (
          <div className="w-32 h-32 overflow-hidden rounded-lg border border-gray-300">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </ComponentCard>
  );
}