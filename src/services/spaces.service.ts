import { CreateBucketCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { ListBucketsCommand } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SpacesService {

    // AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
    s3Client = new S3({
        endpoint: process.env.S3_SPACES_URL,
        region: process.env.S3_SPACES_REGION,
        credentials: {
            accessKeyId: process.env.S3_SPACES_KEY,
            secretAccessKey: process.env.S3_SPACES_SECRET,
        }
    });

    constructor() {
    }

    async listBuckets() {
        try {
            const data = await this.s3Client.send(new ListBucketsCommand({}));
            console.log("Success", data);
            return data; // For unit tests.
        } catch (err) {
            console.log("Error", err);
        }
    }

    async uploadFileToBucket(bucketName: string, key: string, body: string) {
        const bucketParams = {
            Bucket: bucketName,
            Key: key,
            Body: body
        };

        try {
            const data = await this.s3Client.send(new PutObjectCommand(bucketParams));
            console.log(
                "Successfully uploaded object: " +
                bucketParams.Bucket +
                "/" +
                bucketParams.Key
            );
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    async createBucket(bucketName: string) {
        try {
            console.log("CREATING BUCKET: " + bucketName)
            const data = await this.s3Client.send(new CreateBucketCommand({ Bucket: bucketName }));
            console.log("Successfully created bucket", data.Location);
        } catch (err) {
            console.log("Error", err);
        }
    }

}
