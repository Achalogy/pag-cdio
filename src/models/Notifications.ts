import mongoose, { Schema, model } from "mongoose"

const NotificationsModel = new Schema({

}, {
  strict: false,
  optimisticConcurrency: true
})

const Notifications = mongoose.models["notifications"] ?? model('notifications', NotificationsModel)

export default Notifications