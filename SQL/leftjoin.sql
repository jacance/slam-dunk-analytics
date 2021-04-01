--Create primary key for career
ALTER TABLE career 
ADD PRIMARY KEY (new_key);

--Create primary key for draft
ALTER TABLE draft 
ADD PRIMARY KEY (official_key);


--Left join draft
SELECT
	"year",
	team_abb,
	draft.player,
	college,
	round,
	pick,
	official_key
FROM
	draft
LEFT JOIN career ON new_key = official_key;


--Left join career
CREATE TABLE combined AS
SELECT
	career.player, "2P", "2PPCT", "2PA", "3P", "3PPCT", "3PA", "AST", "BLK",
       "Conf", "FG", "FGPCT", "FGA", "FT", "FTPCT", "FTA", "G", "GS", "MP",
       "PF", "PTS", "STL", "School", "Season", "TOV", "TRB",
       "last_season", "unique_player_key", "draft_year", draft.round, draft.pick, "new_key"
FROM
	career
LEFT JOIN draft ON new_key = official_key;

--Fill Null with 0
UPDATE combined set "player" = 0 WHERE "player" is NULL;
UPDATE combined set "2P" = 0 WHERE "2P" is NULL;
UPDATE combined set "2PPCT" = 0 WHERE "2PPCT" is NULL;
UPDATE combined set "2PA" = 0 WHERE "2PA" is NULL;
UPDATE combined set "3P" = 0 WHERE "3P" is NULL;
UPDATE combined set "3PPCT" = 0 WHERE "3PPCT" is NULL;
UPDATE combined set "3PA" = 0 WHERE "3PA" is NULL;
UPDATE combined set "AST" = 0 WHERE "AST" is NULL;
UPDATE combined set "BLK" = 0 WHERE "BLK" is NULL;
UPDATE combined set "Conf" = 0 WHERE "Conf" is NULL;
UPDATE combined set "FG" = 0 WHERE "FG" is NULL;
UPDATE combined set "FGPCT" = 0 WHERE "FGPCT" is NULL;
UPDATE combined set "FGA" = 0 WHERE "FGA" is NULL;
UPDATE combined set "FT" = 0 WHERE "FT" is NULL;
UPDATE combined set "FTPCT" = 0 WHERE "FTPCT" is NULL;
UPDATE combined set "FTA" = 0 WHERE "FTA" is NULL;
UPDATE combined set "G" = 0 WHERE "G" is NULL;
UPDATE combined set "GS" = 0 WHERE "GS" is NULL;
UPDATE combined set "MP" = 0 WHERE "MP" is NULL;
UPDATE combined set "PF" = 0 WHERE "PF" is NULL;
UPDATE combined set "PTS" = 0 WHERE "PTS" is NULL;
UPDATE combined set "STL" = 0 WHERE "STL" is NULL;
UPDATE combined set "School" = 0 WHERE "School" is NULL;
UPDATE combined set "Season" = 0 WHERE "Season" is NULL;
UPDATE combined set "TOV" = 0 WHERE "TOV" is NULL;
UPDATE combined set "TRB" = 0 WHERE "TRB" is NULL;
UPDATE combined set "last_season" = 0 WHERE "last_season" is NULL;
UPDATE combined set "unique_player_key" = 0 WHERE "unique_player_key" is NULL;
UPDATE combined set "draft_year" = 0 WHERE "draft_year" is NULL;
UPDATE combined set "round" = 0 WHERE "round" is NULL;
UPDATE combined set "pick" = 0 WHERE "pick" is NULL;
UPDATE combined set "new_key" = 0 WHERE "new_key" is NULL;


	
SELECT * FROM draft

SELECT * FROM career

SELECT * FROM combined
