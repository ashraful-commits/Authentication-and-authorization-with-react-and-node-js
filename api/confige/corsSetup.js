const allowedOrigins = ["http://localhost:5174"];

const corsOption = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  credential: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOption;
