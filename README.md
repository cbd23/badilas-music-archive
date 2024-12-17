![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![EJS](https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=black) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)

<div id="top"></div>
  
## Badila's Music Archive

<a href="https://badilas-music-archive-production.up.railway.app/" target="_blank">🕹 Live Demo here</a>


### Introduction

Badila's Music Archive is a platform where you can explore and discover (soon you'll also be albe to add) music albums and artists, whether you prefer the new wave or the classics.

It started with more than 50 albums, 20 artists and it continues to grow with you.

The project aims to become a dynamic hub where music enthusiasts can share what they love to listen with the community.

<img width="1468" alt="homepage" src="https://github.com/user-attachments/assets/d8275bb3-98d7-4987-a806-13c1d588c045" />
The homepage is featuring sections like New Releases, Trending artists, and a search bar you can use to explore the archive. It highlights dynamic data fetched from the database, presented using an autoplay slider for a visually engaging experience.

The New Releases section updates when music albums with a release date closer to present day are added to the archive. 


<img width="1206" alt="artist-page" src="https://github.com/user-attachments/assets/4afbed5d-e933-485a-850f-3a60726f0b56" />
Trending artists section updates as you visit different artists' pages, like this one. This action increments the artist's popularity rating.


<img width="1220" alt="artists-page" src="https://github.com/user-attachments/assets/d806e3c2-5e96-474f-81b6-6db5cf2d1c8d" />
You can find all artists displayed on a single page and use the sorting options as you like:


<img width="1222" alt="albums-page" src="https://github.com/user-attachments/assets/d219f82b-1eb8-4d28-be01-c6684ca9640b" />
Or you can go straight to the Albums page:


<img width="1219" alt="album-page" src="https://github.com/user-attachments/assets/8fd66a6d-b87a-45f6-b399-c98487955de3" />
By visiting a music album, you increase their 'times listened' score, so you can see different results when sorting the albums by 'Most played' after you navigate through the albums.



Other options to discover music albums are the Genres page:
<img width="1218" alt="genres-page" src="https://github.com/user-attachments/assets/e9503ead-8c26-4e21-b45e-68460b1096cb" />


The Labels page:
<img width="1216" alt="labels-page" src="https://github.com/user-attachments/assets/bc361110-635f-4fd3-ada2-f168395c4e55" />


or the search bar - which returns both albums and artists based on your input, even if it is incomplete.
<img width="1219" alt="search-result" src="https://github.com/user-attachments/assets/54957039-c000-4726-bcdf-4b841c09b806" />

---

### Technologies Used

**Backend:** Node.js & Express.js

**Frontend:** EJS as templating language, to generate HTML with plain JS and & custom CSS for styling

**Database:** PostgreSQL for structured data management.

**Deployment:** Railway for hosting both the application and the database

**Other tools & mentions:**
  - **npm** for dependency management and for using different modules like node-fetch - which brings Fetch API to Node.js.
  - **MediaWiki Action API** for fetching and displaying the INTRO section insinde an album page and also the ABOUT section inside an artist page.

I didn't want to use an API for fetching the music albums / artists / genres or labels for a few reasons:

  - I wanted to have full control when it comes to the information that I'm displaying, whether we're talking about the artists'/albums' names or an album cover. It was a lot of work and research just to find and select the perfect picture for each of them, but in the end, if I wouldn't have been passionate about music, I wouldn't have built this project at all.
  - it was a great exercise to think what I want and need to happen inside the app, and then design the database schema that fits my needs.
  - every API has its limitations and its risks - so I decided that I'm going to work in order to be able to serve myself the info that I'll be using; speaking about risks, I didn't want to develop this project around an API that may not be live one day.

<br>
You can browse to my other repos to see what I've been working on lately or you can <a href="https://www.linkedin.com/in/catalin-badila/">connect with me on linkedin</a> and say hi if you want


<a href="#top">⬆️Back to Top</a>
