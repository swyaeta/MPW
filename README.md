# MPW — My Portfolio Website

So this is my personal portfolio website that I built from literally scratch using HTML, CSS and JS. 
live link is here: **https://swyaeta.github.io/MPW/**

basically I wanted one place where people can see who I am, what I've made, what I'm learning and learn about me, so yeah this is that one place now.

## the design

I went with full neo-brutalist on this website — thick black borders everywhere, hard offset shadows (the kind that look 3D-ish when you hover), bold uppercase headers in Orbitron font, and Rajdhani for the regular text. colors are pink + berry + a neon yellow accent which honestly took me a while to select ( i probally spent a hour deciding on colours. There's also a dark mode toggle because obviously every website needs one in 2026. I basically choosed the colours to be like hello kitty themed.

## the webpages

**`index.html`** — this is home base. hero section that says hi, it has two options to go to my contacts or explore and has my name, a short point typa on me and 

**`explore.html`** — this one's basically the extended director's cut of About Me lol. this is where I actually go into my coding origin story — starting with unity in 2025 after a random youtube video, switching to godot bc it felt easier, making a 2d game with a fox (foxie) getting chased by a frog (forgie) that literally never worked properly so I never published it lmaooo, then getting into visual novels with ren'py , then building my discord bot studbudie in javascript and deploying it on railway. it repeats education/roles/skills/hobbies too but in a totally different layout, plus its own navbar and a back button to go home.

**`contact.html`** — just a dedicated contact page, linked from the explore page nav.

## the actual code files

**`style.css`** — styles index.html. I used css variables for theming so when you hit the dark mode toggle it just swaps the variable values instead of me having to write two whole separate stylesheets.

**`explore.css`** — separate stylesheet just for explore.html. same color system as the main one but completely different layout rules bc the navbar and back button needed their own thing.

**`script.js`** — does three jobs: handles the light/dark toggle (and actually remembers your choice using localStorage so it doesn't reset every time you reload, which annoyed me so much before I fixed it), runs the visit counter (also localStorage based), and makes the nav links scroll smoothly to each section instead of just snapping there instantly.

**`README.md`** — yeah, this thing you're reading right now.

**`LICENSE`** — MIT license, just keeping it open in case anyone wants to reference how I built something.

**`.gitignore`** — keeps random OS junk files, editor settings, and any future api keys/secrets out of the actual repo so I don't accidentally leak something dumb later.

## tech stack basically

HTML5, CSS3 (flexbox + grid + css variables for theming), plain vanilla javascript (no frameworks, no libraries, just raw JS), Google Fonts for Orbitron and Rajdhani, Font Awesome for all the icons, Formspree to handle the contact form without needing an actual backend server, and GitHub Pages for hosting it for free.

## what I actually learned doing this

real flexbox and grid layout work instead of just copy pasting css i didn't understand, theming properly with css variables instead of hardcoding the same color forty different times across files, how localStorage actually works for saving small bits of data in someone's browser, and finally figuring out how to deploy a static site live through github pages instead of it just sitting on my laptop forever doing nothing. also learned settings > pages exists and that took embarrassingly long to find lol.

## who made this

**Sweta Bhandari** aka swyaeta. grade 12, PCMCS stream, from nepal 🇳🇵. still figuring stuff out but having fun building things along the way.
