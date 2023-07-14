import { Schema, model } from 'mongoose';

const siteDataSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  site_name: {
    type: String,
    required: true,
  },
  position: {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
});

export const SiteDataModel = model('SiteData', siteDataSchema);
