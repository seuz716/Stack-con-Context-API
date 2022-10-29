import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "seuz",
  api_key: "762461187768984",
  api_secret: "KkkVG_c6wnocGFd8Okf76FVwov8"
  
});

export const uploadImage = async filePath => {
  return await cloudinary.v2.uploader.upload(filePath);
};

export const deleteImage = async id => {
    return await cloudinary.v2.uploader.destroy(id);
  };
