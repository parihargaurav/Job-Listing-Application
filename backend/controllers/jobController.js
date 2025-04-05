const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
  try {
    const { location } = req.query;
    const filter = location ? { location: new RegExp(location, 'i') } : {};
    const jobs = await Job.find(filter);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
