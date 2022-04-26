--  Execute this file from the command line by typing:
--  createdb qa
--  psql qa < src/schema.sql
--  to create the database and the tables.

DROP TABLE IF EXISTS questions, answers, photos;

CREATE TABLE questions (
  question_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_id INTEGER NOT NULL,
  question_body TEXT NULL DEFAULT NULL,
  question_date BIGINT,
  asker_name VARCHAR(50) NOT NULL,
  asker_email VARCHAR(60) NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  question_helpfulness INTEGER NOT NULL DEFAULT 0,
);

-- CREATE INDEX questions_reported_index ON questions(reported) WHERE reported IS FALSE;

CREATE TABLE answers (
  answer_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  question_id INTEGER NOT NULL REFERENCES questions(question_id),
  body TEXT NOT NULL,
  date BIGINT,
  answerer_name VARCHAR(50) NOT NULL,
  answerer_email VARCHAR(60) NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  helpfulness INTEGER NOT NULL
);

CREATE TABLE photos (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  answer_id INTEGER NOT NULL REFERENCES answers(answer_id),
  url VARCHAR(300) NOT NULL
);