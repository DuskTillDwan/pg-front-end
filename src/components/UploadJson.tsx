'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function UploadJson() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("File uploaded successfully!");
      } else {
        setMessage("Failed to upload file.");
      }
    } catch (error) {
      setMessage("Error uploading file.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Card className="w-full max-w-md p-4">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Upload JSON File</h2>
          <Input type="file" accept=".json" onChange={handleFileChange} />
          <Button onClick={handleUpload} className="w-full">Upload</Button>
          {message && <p className="text-center text-sm mt-2">{message}</p>}
        </CardContent>
      </Card>
    </div>
  );
}