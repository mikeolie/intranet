import ReactS3Client from "react-aws-s3-typescript";
import { ImageState } from "../common/types";

import config from "../config/aws";

const uploadFilesToAws = async (imagesToUpload: Array<ImageState>) => {
  const s3 = new ReactS3Client(config);
  return new Promise((resolve) => {
    const dataLocations = imagesToUpload.map(async (image) => {
      const res = await s3
        .uploadFile(image.file, image.file.name.replace(/\.[^/.]+$/, ""))
        .catch((err) => err);
      return res.location;
    });
    resolve(dataLocations);
  });
};

export default uploadFilesToAws;
