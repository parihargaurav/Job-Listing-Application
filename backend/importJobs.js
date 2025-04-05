const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Job = require('./models/Job');
const rawJobData = require('./data/jobs.json');
const connectDB = require('./config/db');

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    // Fix dates from $date format to ISO string
    const jobData = rawJobData.map(job => ({
      ...job,
      postedDateTime: job.postedDateTime?.$date || new Date()
    }));

    await Job.deleteMany(); // optional
    await Job.insertMany(jobData);
    console.log('✅ Jobs imported successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
};

importData();
