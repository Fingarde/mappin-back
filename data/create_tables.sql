-- SQLite
CREATE TABLE IF NOT EXISTS users (
  uuid TEXT PRIMARY KEY,
  username TEXT,
  password TEXT
);

CREATE TABLE IF NOT EXISTS pins (
  uuid TEXT PRIMARY KEY,
  userUuid TEXT,
  latitude REAL,
  longitude REAL,
  itemUuid TEXT,
  date INTEGER
);

