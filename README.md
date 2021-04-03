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

## Scraping Process
![Alt text](Flask/static/scrape.png?raw=true "scrape")
![Alt text](Flask/static/scrape2.png?raw=true "scrape2")

## Model Results

- Classification was ultimately chosen over regression due to the large variance in our data (each pick in the draft getting a number 1-60, an undrafted player getting a 0).

- Decision Tree was the most accurate model used (average accuracy of 0.973 for 2017-19).

- Draft predictions showed a trend of improvement throughout the years.

- Taking the 3 most recent years 2017-2019 (excluding 2020 for anamalies in the NCAA season), our model improved from 1, to 2, then 6 Slam Dunk Picks, predicting players at their exact draft pick.

## Feature Importances
![Alt text](Flask/static/featureimportances.png?raw=true "featureimportance")
