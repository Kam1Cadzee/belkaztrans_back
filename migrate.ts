import {dbURI} from './src/config';
const { config, up } = require('migrate-mongo');

const myConfig = {
  mongodb: {
    url: dbURI,
    options: { useNewUrlParser: true, useUnifiedTopology: true, }
  },
  migrationsDir: "./src/db/migrations/",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js"
};

config.set(myConfig);

// then, use the API as you normally would, eg:
up();
