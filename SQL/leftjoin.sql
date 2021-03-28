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
SELECT
	career.player, "2P", "2PPCT", "2PA", "3P", "3PPCT", "3PA", "AST", "BLK",
       "Conf", "FG", "FGPCT", "FGA", "FT", "FTPCT", "FTA", "G", "GS", "MP",
       "PF", "PTS", "STL", "School", "Season", "TOV", "TRB",
       "last_season", "unique_player_key", "draft_year", draft.round, draft.pick, "new_key"
FROM
	career
LEFT JOIN draft ON new_key = official_key;
	
	
SELECT * FROM draft

SELECT * FROM career
