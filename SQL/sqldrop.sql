SELECT * FROM draft

SELECT * FROM career

--------
--Georgi Funtarov Duplicated in scrape. Delete.
SELECT * FROM career
WHERE player = 'Georgi Funtarov'

DELETE FROM career
WHERE player = 'Georgi Funtarov' AND "FGA" = 16
---------


--Anthony Mathis Duplicated in scrape. Delete
SELECT * FROM career
WHERE player = 'Anthony Mathis'

SELECT * FROM draft
WHERE player like 'Derrick Coleman'



--Create primary key for career
ALTER TABLE career 
ADD PRIMARY KEY (new_key);


--Create foreign key for draft
ALTER TABLE draft
ADD CONSTRAINT official_key
FOREIGN KEY(official_key) 
REFERENCES career(new_key)


--Create draft table then import draft.csv
CREATE TABLE draft (
	"year" VARCHAR,
	team_abb VARCHAR,
	player VARCHAR,
	college VARCHAR,
	round VARCHAR,
	pick VARCHAR,
	official_key VARCHAR,
FOREIGN KEY (official_key)
REFERENCES career (new_key)
);