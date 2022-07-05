interface AWS_CONFIG {
  bucketName: string
  region: string
  accessKeyId: string
  secretAccessKey: string
}

const BUCKET_NAME = "liberty-pact"
const REGION = "us-west-1"

const config: AWS_CONFIG = {
  bucketName: BUCKET_NAME,
  region: REGION,
  accessKeyId: process.env.REACT_APP_ID as string,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY as string,
}

export default config

