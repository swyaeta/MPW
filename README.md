# MPW — My Portfolio Website

So this is my personal portfolio website that I built from literally scratch using HTML, CSS and JS. 
live link is here: **https://swyaeta.github.io/MPW/**

basically I wanted one place where people can see who I am, what I've made, what I'm learning and learn about me, so yeah this is that one place now.

## The design

I went with full neo-brutalist on this website — thick black borders everywhere, hard offset shadows (the kind that look 3D-ish when you hover), bold uppercase headers in Orbitron font, and Rajdhani for the regular text. colors are pink + berry + a neon yellow accent which honestly took me a while to select ( i probally spent a hour deciding on colours. There's also a dark mode toggle because obviously every website needs one in 2026. I basically choosed the colours to be like hello kitty themed.
<img width="1833" height="863" alt="Screenshot (898)" src="https://github.com/user-attachments/assets/f793c5ef-e551-4594-9f83-8a393c047cbd" /> 
<img width="1891" height="860" alt="Screenshot (897)" src="https://github.com/user-attachments/assets/2f399a92-4a45-431f-8472-b83ff57570ad" />
 These are the dark mode theme


## the webpages

**`index.html`** — this is home page.it is scattered tilted cards like sticky notes thrown on a desk lol. the hero card (my name + tagline) has this thick offset shadow that makes it pop out 3d-ish, with extra padding around it so it doesnt feel cramped and actually breathes a bit. theres a welcome card next to it being all heyyyyy welcome to my site, a small card listing hack club/robotics/tkd/grade as quick tags, an interests card, and two buttons at the bottom — learn more and contact. every single card is rotated at a slightly different angle on purpose so it looks handmade and not some boring perfect grid. dark mode toggle and visit counter chilling on top.

<img width="1827" height="883" alt="Screenshot (894)" src="https://github.com/user-attachments/assets/8fbbcdb9-660e-4820-a8ff-d7b5cff1dbe6" />


**`explore.html`** —This shows all about me in detail, this is where I actually go into my coding origin story - starting with unity in 2025 after a random youtube video, switching to godot bc it felt easier, making a 2d game with a fox (foxie) getting chased by a frog (forgie) that literally never worked properly so I never published it lmaooo, then getting into visual novels with ren'py , then building my discord bot studbudie in javascript and deploying it on railway. it repeats education/roles/skills/hobbies too but in a totally different layout, plus its own navbar and a back button to go home.  
sectionwise its basically one big card per topic stacked down the page — hero, about, education, stream, roles, skills, hobbies, each with their own padding so things dont feel squished together. i bumped the padding up inside each card so the text has room to breathe instead of touching the borders. colors are the same colour system but i tweaked some of the shades slightly for this page so it doesnt look exactly identical to index, still keeps the thick border + hard shadow look throughout though and interactive.
(like this )
<img width="1831" height="855" alt="Screenshot (895)" src="https://github.com/user-attachments/assets/8a3792bd-d9e9-4915-93d0-340b5bbd4427" />


**`contact.html`** — contact.html is its own dedicated page now instead of just being a section squished at the bottom of index. theres a back to homepage button up top left plus a navbar with home, learn more and contact hub buttons in yellow, and the usual visit counter + dark mode toggle in the corner. theres an intro card explaining im open to questions, collabs, or just connecting with other devs/creatives/stem people. below that its split into two side by side cards — connect with me on the left with instagram, tiktok, github and linkedin each as their own clickable strip, and contact with me on the right which is the actual form with name, email and message fields. same thick border hard shadow look as the rest of the site, just laid out as a proper standalone page this time.

<img width="1848" height="883" alt="Screenshot (896)" src="https://github.com/user-attachments/assets/04b4f371-4556-41e9-a218-2159741c0ca1" />


## the code files

**`style.css`** — styles index.html. I used css variables for theming so when you hit the dark mode toggle it just swaps the variable values instead of me having to write two whole separate stylesheets.

**`explore.css`** — separate stylesheet just for explore.html. same color system as the main one but completely different layout rules bc the navbar and back button needed their own thing.

**`script.js`** — does three jobs: handles the light/dark toggle (and actually remembers your choice using localStorage so it doesn't reset every time you reload, which annoyed me so much before I fixed it), runs the visit counter (also localStorage based), and makes the nav links scroll smoothly to each section instead of just snapping there instantly.

**`README.md`** — yeah, this thing you're reading right now.

**`LICENSE`** — MIT license, just keeping it open in case anyone wants to reference how I built something.

**`.gitignore`** — keeps random OS junk files, editor settings, and any future api keys/secrets out of the actual repo so I don't accidentally leak something dumb later.

## tech stack 

HTML5, CSS3 (flexbox + grid + css variables for theming), plain vanilla javascript (no frameworks, no libraries, just raw JS), Google Fonts for Orbitron and Rajdhani, Font Awesome for all the icons, Formspree to handle the contact form without needing an actual backend server, and GitHub Pages for hosting it for free.

So yea, this my portfoilo website made by scratch from css,html and js. 
thanxs for reading all this
