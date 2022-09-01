create TABLE nft(
    id SERIAL PRIMARY KEY,
    head VARCHAR(255),
    body VARCHAR(255));
create TABLE crypto(
    id SERIAL PRIMARY KEY,
    head VARCHAR(255),
    body VARCHAR(255));

create TABLE sec(
    id SERIAL PRIMARY KEY,
    head VARCHAR(255),
    body VARCHAR(255));

create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    mail VARCHAR(255),
    nickname VARCHAR(255),
    password VARCHAR(255)
);