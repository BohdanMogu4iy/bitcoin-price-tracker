require('dotenv').config()

module.exports = {
  "development": {
    "use_env_variable": "DATABASE_URL",
    "dialect":"postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS TO FIX UNHANDLED REJECTION
      },
    }
  },
  "test": {
    "use_env_variable": "DATABASE_URL",
    "dialect":"postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS TO FIX UNHANDLED REJECTION
      },
    }
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect":"postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS TO FIX UNHANDLED REJECTION
      },
    },
    logging: false
  }
};
