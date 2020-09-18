# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Approval, HTML Bones, Basic CSS | complete
|Day 2| Responsive Window CSS, JS links, all basics functional | complete
|Day 3| MVP/Debug | complete
|Day 4| POST MVP/Catch up on MVP  | complete
|Day 5| Final Edits/Post MVP | Incomplete
|Day 5| Present | Incomplete


## Project Description

I wish for my portfolio site to eventually be a small version of the CSS zen garden and include fun visual interactivity with the user.

Inspirations: 

http://www.emilyridge.ie/ I really like the grid setup for the portfolio

https://benadam.me/  This site has a nice simplicity and small user interactions

https://jacekjeznach.com/portfolio/ This site has a fun contrasting color scheme and interaction in the nav bar. 

## Google Sheet

[MY GOOGLE SHEET](https://docs.google.com/spreadsheets/d/1W2rS6S1Qy3rwI0i-FWU3PIaEsxifn49PMLESV9TE7A4/edit?usp=sharing)

## Wireframes
Examples
- [Mobile](https://imgur.com/sxLZ8Bn)
- [Tablet](https://imgur.com/x6L9lfs)
- [Desktop](https://imgur.com/8tS3Q3Q)

## Time/Priority Matrix 

[MY MATRIX](https://imgur.com/a/ikvr5yE)

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| NavIcons/Social | H | 1hr | 3hr |
| Project Page, CSS | H | 2hr | 3hr |
| HTML Bare Bones | L | 1.5hr | 2hr |  
| Contact Page, CSS | M | 1hr|  2hr | 
| About Me Page, CSS | L | 1hr | 2hr|
| Puling from Google sheets and rendering, JS | H | 2hrs|  4hr | 
| Setup Project Links, CSS | H | 2hr | 1hr |
| Clickables, JS | H | 2hrs | 2hr |
| Home Page, CSS | H | 1hr | 1hr |
| Skills Page, CSS | L | 1hr | 1.5hr |
| Classes/IDs | M | 2hr | 3hr |
| Window Logic | H | 2r | 4hr|
| Total | H | 18hrs| 28.5hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Polish Projects | M | 4hr | 0hr |
| Extra Design Materials | L | 2hr | 0hr |
| Personal Brand Icon | L | 1hr | 0hr |
| Extra CSS, color schemes | L | 2hr | 3hr |
| Animation and main theme | M | 3hr | 4hr |
| Total | H | 12hrs| 7hrs |

## Additional Libraries
 
 JQUERY and Bootstrap 

## Code Snippet
//This code snippet allows the mobile nav bar to disappear when scrolling.
.smart-scroll{ //keeps bar at the top
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
   
  }
  .scrolled-down{ //moves the bar out of sight
     transform:translateY(-100%); transition: all 0.3s ease-in-out;
  }
  .scrolled-up{ //brings bar back into sight
     transform:translateY(0); transition: all 0.3s ease-in-out;
  }

if ($('.smart-scroll').length > 0) { // check if element exists, always above 0
    var last_scroll_top = 0;//starting scroll position
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();//keeps track of scroll position
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;//keeps track of spot
    });
}

## Issues and Resolutions
**ERROR**: cross-Origin Read Blocking (CORB) blocked cross-origin response <URL> with MIME type text/html

**RESOLUTION**: switched image links from imgur to cloudinary

**ERROR**: CSS not reponding to edits

**RESOLUTION**: pointing at the wrong element and under the wrong media query