import React, { useState } from 'react';
import axios from 'axios'; // Bergantung pada library yang Anda gunakan untuk mengirim permintaan HTTP

interface FileUploaderProps {
  onUploadSuccess?: (imageUrl: string) => void;
  onUploadError?: (error: any) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onUploadSuccess, onUploadError }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Ganti '/api/upload' dengan endpoint yang sesuai di backend Anda
      const response = await axios.post('/api/upload', formData);

      if (response.status === 200 && onUploadSuccess) {
        const imageUrl = response.data.imageUrl; // Ganti 'imageUrl' dengan nama properti yang sesuai dari respons backend
        onUploadSuccess(imageUrl);
      }
    } catch (error) {
      if (onUploadError) {
        onUploadError(error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
