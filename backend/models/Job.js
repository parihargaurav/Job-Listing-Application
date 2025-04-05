const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  job_link: String,
  employment_type: String,
  source: String,
  experience: String,
  postedDateTime: Date,
  min_exp: Number,
  max_exp: Number,
});

module.exports = mongoose.model('Job', jobSchema);
