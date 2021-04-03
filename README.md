# Slam Dunk Analytics
![Alt text](Flask/static/logo.png?raw=true "Title")

## Background

With the advent of Moneyball, sports organizations are all using analytics to give themselves a greater competitive edge. 

Building through the draft is one of the best ways for a team to go from basement-dweller to a contender in their respective sport.

## Motivation

We are huge basketball fans and have seen many teams (sometimes our own) suffer through NBA drafts with mixed results. Draft picks, both good and bad, create a cascading effect for an organization's success that can be felt for years to come.

Our Slam Dunk Analytics machine learning model helps teams analyze draft prospects so that they can make the best use of their draft capital.

## Context

- There are 30 NBA teams.

- Annual draft has 2 rounds, each team gets 1 pick per round (60 picks total).

- Drafts are an important way for teams to become competitive.

- Worse teams are rewarded with earlier draft picks.

- Some teams “tank” to get a better pick, but there’s pressure to make the most of it.


## Goals

- Create an accurate model to supplement teams’ scouting departments to help them make draft picks to help bolster their rosters.

- Discover high value picks and potential sleeper picks so teams can get the most value for their draft position.

## Plan

1. Identify problem
2. Scrape data
3. Train ML Model
4. Predit draft results
5. Visualize data

Languages/Techniques Used:

 1. Python 
  -Pandas
  -Numpy
  -Sklearn
  -BeautifulSoup
  -Matplotlib
  -Flask
  -SQLAlchemy
 2. Postgres SQL
 3. AWS
 4. Javascript
  -D3
  -Plotly
  -Node.js
 5. HTML/CSS
 6. Heroku

## Scraping Process

- We obtained our data from Sportsreference.com/cbb. Individual player links are organized by last name, so we had to scrape through each letter of the alphabet (as seen in the first image below). 

- After retrieving and cleaning player links (getting rid of duplicate links at the bottom of the page), we then needed to pull per 40 stats from each player as opposed to per game stats (we wanted to get stats representative of a player's time on the court, as opposed to including any time during a game that they are on the bench). These were commented out, so we needed to use the bs4.comment option to retrieve the tables before converting to pandas.

- This data was all combined with historical NBA draft data (1990 and onward initially, as this was the first year of the modern NBA draft lottery) from basketball-reference.com.

![Alt text](Flask/static/scrape.png?raw=true "scrape")
![Alt text](Flask/static/scrape2.png?raw=true "scrape2")

## Model Results

- Classification was ultimately chosen over regression due to the large variance in our data (each pick in the draft getting a number 1-60, an undrafted player getting a 0).

- Decision Tree was the most accurate model used (average accuracy of 0.973 for 2017-19), and the one we ultimately used to create our predicted drafts + 2021 NBA Mock Draft.

- Random Forest (accuracy of 0.976 as a whole, but no predicted drafted players)
- Neural Net (accuracy of 0.977 as a whole, but less than 60 predicted drafted players/year) 
- KNN (highest accuracy k=11, 0.970, but less than 60 predicted drafted players/year)
- Recursive Feature Elimination w/Cross Validation (accuracy of 0.95 on average for different n_features where n_features =/= 1)

- Draft predictions showed a trend of improvement throughout the years.

- Taking the 3 most recent years 2017-2019 (excluding 2020 for anamalies in the NCAA season), our model improved from 1, to 2, then 6 Slam Dunk Picks, predicting players at their exact draft pick.

## Feature Importances
![Alt text](Flask/static/featureimportances.png?raw=true "featureimportance")
