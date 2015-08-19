CREATE DATABASE deadsongs;

\c deadsongs

CREATE TABLE albums(id SERIAL PRIMARY KEY, albumname varchar(255), song varchar(255), releasedate varchar(255), albumcover varchar(65535));
