import { Worker } from "bullmq";

const worker = new Worker('notificationQueue', async (job) => {
  console.log('Processing job...', job.id, job.data);
}, {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});
