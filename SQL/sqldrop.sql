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



--Create primary key for career
ALTER TABLE career 
ADD PRIMARY KEY (official_key);


--Create foreign key for draft
ALTER TABLE draft
ADD CONSTRAINT official_key
FOREIGN KEY(official_key) 
REFERENCES career(official_key)