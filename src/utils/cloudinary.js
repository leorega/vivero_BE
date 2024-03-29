import { v2 as cloudinary } from "cloudinary";

const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } =
    process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
});

const uploadImage = async (file) => {
    const result = await cloudinary.uploader.upload(file, {
        folder: "vivero",
    });
    return result;
};

const deleteImage = async (public_id) => {
    await cloudinary.uploader.destroy(public_id);
};

export { uploadImage, deleteImage };
