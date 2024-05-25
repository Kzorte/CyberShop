import React, { useState } from 'react';
import axios from 'axios'; // Jika Anda menggunakan axios untuk mengirim permintaan HTTP

const UploadPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

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

      const response = await axios.post('/api/upload', formData); // Mengirim permintaan ke endpoint backend

      if (response.status === 200) {
        setUploadStatus('File uploaded successfully.');
      }
    } catch (error) {
      setUploadStatus('An error occurred while uploading the file.');
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default UploadPage;