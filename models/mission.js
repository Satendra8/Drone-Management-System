import { Schema, model } from 'mongoose';

const missionSchema = new Schema({
  site_id: {
    type: Schema.Types.ObjectId,
    ref: 'SiteData',
    required: true,
  },
  drone_id: {
    type: Schema.Types.ObjectId,
    ref: 'Drone',
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  name: {
    type: String,
    required: true,
  },
  alt: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  waypoints: [
    {
      alt: {
        type: Number,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export const MissionModel = model('Mission', missionSchema);
