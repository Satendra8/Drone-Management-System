import { Schema, model } from 'mongoose';

const droneSchema = new Schema({
  site_id: {
    type: Schema.Types.ObjectId,
    ref: 'SiteData',
  },
  drone_id: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  deleted_by: {
    type: String,
  },
  deleted_on: {
    type: Date,
  },
  drone_type: {
    type: String,
    required: true,
  },
  make_name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

export const DroneModel = model('Drone', droneSchema);
