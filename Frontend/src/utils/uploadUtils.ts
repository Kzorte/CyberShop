import axios from 'axios';

// Fungsi untuk mengunggah file ke server
export const uploadFile = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    // Ganti '/api/upload' dengan endpoint yang sesuai di backend Anda
    const response = await axios.post('/api/upload', formData);

    if (response.status === 200) {
      // Ganti 'imageUrl' dengan nama properti yang sesuai dari respons backend
      return response.data.imageUrl;
    } else {
      throw new Error('Upload failed');
    }
  } catch (error) {
    throw new Error('Upload failed: ' + error.message);
  }
};

// Fungsi lain yang mungkin diperlukan terkait dengan pengunggahan file
// ...

