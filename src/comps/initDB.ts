import mongoose from 'mongoose';

export default async () => {
  if (!import.meta.env.MONGO_URL) return console.log("NO MONGOOSE TOKEN")
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(import.meta.env.MONGO_URL, {
      dbName: "cdio"
    } as any);
  }
}
