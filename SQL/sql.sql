CREATE TABLE draft (
	year INT,
	team_abb VARCHAR(10),
	player VARCHAR(100),
	college VARCHAR(100),
	round INT,
	pick INT
);

--Check import
SELECT * FROM draft;

SELECT * FROM career;

--Delete anything earlier than 1993 to match career info
DELETE FROM draft WHERE year < 1993;

--Inner join of player career stats and draft, show all columns
SELECT *
FROM career
INNER JOIN draft
ON draft.player = career.player
;

--Inner join of player career stats and draft, each column
SELECT career.player,
"Combined", "School", "Conf", "G", "GS", "MP", "FG", "FGA", "FGPCT", "2P", "2PA", "2PPCT", "3P", "3PA", "3PPCT", "FT", "FTA", "FTPCT", "TRB", "AST", "STL", "BLK", "TOV", "PF", "PTS"
FROM career
INNER JOIN draft
ON draft.player = career.player
;

--Add new_key to draft table
alter table draft add column new_key varchar(255);  -- or whatever
update draft
    set "new_key" = concat("player", ', ', "year");


alter table career add column new_key varchar(255);  -- or whatever
update career
    set "new_key" = concat("player", ', ', "draft_year");