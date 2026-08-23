---
title: "career-detective"
summary: "A short career quiz becomes ranked real jobs and matched TUM experiences, rendered in an interactive orbit visualisation"
order: 2
tech: ["Python", "LLM"]
repo: https://github.com/namitdeb739/career-detective
draft: false
year: 2026
status: Complete
---

Our project analyzes AI and Tech job market trends to help people better
understand career opportunities in Germany compared to other developed
countries. Rather than relying on fragmented job boards, we use machine
learning to aggregate and analyze large scale job posting data. This project
helps graduates and job seekers to better navigate the current job market as
well as help students to familiarize with ongoing trends to prepare earlier.

## Architecture

One HTTP API sits in front of two different matching engines: a semantic job
ranker and a tag-based experience matcher.

An offline data pipeline turns the raw TUM sources and the AI-jobs dataset into
a standardized set of tables that match student clubs, programmes and projects
to relevant skills, industries, and job titles.
