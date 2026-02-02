import { Queue } from "bullmq";

const notificationQueue = new Queue('notificationQueue', {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});

async function init() {
  const result = await notificationQueue.add('sendNotification', {
    name: "Pratik Raj",
    email: "pratikraj220011@gmail.com"
  });

  console.log('Job added to the queue:', result.id);
}

init();