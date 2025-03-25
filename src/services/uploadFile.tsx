const API_URL = process.env.NEXT_PUBLIC_API_URL;
const uploadEndpoint = `${API_URL}/upload`;

export const uploadFile = async (file: File) => {

  const formData = new FormData();
  formData.append("file", file);

  return fetch(uploadEndpoint, {
    method: "POST",
    body: formData,
  });
};
