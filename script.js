function submitName(event) {
    event.preventDefault();
    
    let name = document.getElementById("nameText").value;
//.trim() == ''
    if (name) {
        localStorage.setItem("userName", name);
        window.location.href = "index2.html";
    } else {
        alert("Enter you name first!")
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let userName = localStorage.getItem("userName");
    let welcomeText = document.getElementById("nameDis").innerText = `Welcome ${userName}. Pick a Quote`;
})

//MOTIVATION/INSPIRING QUOTES

function motivationQuote() {

    //const molQuote = Math.random();
    const molQuote = Math.floor(Math.random() * 30);

    let quote = '';

    /*
    if (molQuote >= 0.1 && molQuote <= 0.2) {
        quote = `Believe you can and you're halfway there.`;
    } else if (molQuote > 0.2 && molQuote <= 0.3) {
        quote = 'Success is not final, failure is not fatal: It is the courage to continue that counts.' ;
    } else if (molQuote > 0.3 && molQuote <= 0.4) {
        quote = `Your time is limited, so don't waste it living someone else's life.`;
    } else if (molQuote > 0.4 && molQuote <= 0.5) {
        quote = 'Do what you can, with what you have, where you are.';
    } else if (molQuote > 0.5 && molQuote <= 0.6) {
        quote = `The harder you work for something, the greater you'll feel when you achieve it`;
    } else if (molQuote > 0.6 && molQuote < 0.7) {
        quote = `Don’t watch the clock; do what it does. Keep going.`;
    } else if (molQuote > 0.7 && molQuote < 0.8) {
        quote = 'It always seems impossible until it’s done.';
    } else if (molQuote > 0.8 && molQuote < 0.9) {
        quote = 'Great things never come from comfort zones.';
    } else if (molQuote > 0.9 && molQuote < 1) {
        quote = 'Dream big. Start small. Act now.';
    } else {
        quote = 'Stay positive, work hard, make it happen.';
    }*/
    if (molQuote < 0.1){
        quote = "Believe you can and you're halfway there.";
    } else if (molQuote < 0.2){
        quote = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
    } else if (molQuote < 0.3){
        quote = "Your time is limited, so don't waste it living someone else's life.";
    } else if (molQuote < 0.4){
        quote = "Do what you can, with what you have, where you are.";
    } else if (molQuote < 0.5){
        quote = "The harder you work for something, the greater you'll feel when you achieve it.";
    } else if (molQuote < 0.6){
        quote = "Don’t watch the clock; do what it does. Keep going.";
    } else if (molQuote < 0.7){
        quote = "It always seems impossible until it’s done.";
    } else if (molQuote < 0.8){
        quote = "Great things never come from comfort zones.";
    } else if (molQuote < 0.9){
        quote = "Dream big. Start small. Act now.";
    } else if (molQuote < 1) {
        // This handles anything from 0.9 to 1.0
        quote = "Stay positive, work hard, make it happen.";
    } else if (molQuote < 2) {
        quote = "The only way to do great work is to love what you do.";
    } else if (molQuote < 3) {
        quote = "It does not matter how slowly you go as long as you do not stop.";
    } else if (molQuote < 4) {
        quote = "Success is the sum of small efforts, repeated day in and day out.";
    } else if (molQuote < 5) {
        quote = "The only limit to our realization of tomorrow is our doubts of today.";
    } else if (molQuote < 6) {
        quote = "Don’t watch the clock; do what it does. Keep going.";
    } else if (molQuote < 7) {
        quote = "Believe you can and you're halfway there.";
    } else if (molQuote < 8) {
        quote = "Opportunities don't happen. You create them.";
    } else if (molQuote < 9) {
        quote = "Success usually comes to those who are too busy to be looking for it.";
    } else if (molQuote < 10) {
        quote = "The harder you work for something, the greater you'll feel when you achieve it.";
    } else if (molQuote < 11) {
        quote = "Success is not in what you have, but who you are.";
    } else if (molQuote < 12) {
        quote = "You are never too old to set another goal or to dream a new dream.";
    } else if (molQuote < 13) {
        quote = "It’s not whether you get knocked down, it’s whether you get up.";
    } else if (molQuote < 14) {
        quote = "I find that the harder I work, the more luck I seem to have.";
    } else if (molQuote < 15) {
        quote = "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.";
    } else if (molQuote < 16) {
        quote = "If you can dream it, you can do it.";
    } else if (molQuote < 17) {
        quote = "Start where you are. Use what you have. Do what you can.";
    } else if (molQuote < 18) {
        quote = "The future belongs to those who believe in the beauty of their dreams.";
    } else if (molQuote < 19) {
        quote = "The only way to achieve the impossible is to believe it is possible.";
    } else if (molQuote < 20) {
        quote = "Don’t wait for opportunity. Create it.";
    } else if (molQuote < 21) {
        quote = "Hardships often prepare ordinary people for an extraordinary destiny.";
    } else if (molQuote < 22) {
        quote = "Your limitation—it’s only your imagination.";
    } else if (molQuote < 23) {
        quote = "Great things never come from comfort zones.";
    }  else if (molQuote < 24) {
        quote = "Dream it. Wish it. Do it.";
    }  else if (molQuote < 25) {
        quote = "Success doesn’t just find you. You have to go out and get it.";
    }  else if (molQuote < 26) {
        quote = "The only way to guarantee failure is to never try.";
    }  else if (molQuote < 27) {
        quote = "If you want to achieve greatness stop asking for permission.";
    }  else if (molQuote < 28) {
        quote = "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.";
    }  else if (molQuote < 29) {
        quote = "The only place where success comes before work is in the dictionary.";
    }  else {
        quote = "Don’t stop when you’re tired. Stop when you’re done.";
    } 

    document.getElementById('quote-display').innerText = quote;
} 

function motQuote() {
    window.location.href = "Motivation.html";
}

//LOVE QUOTES

function loveQuote() {

   // const luvQuote = Math.random();
    const luvQuote = Math.floor (Math.random()* 30);

    let quote = '';

    if (luvQuote < 0.1){
        quote = "I saw that you were perfect, so I loved you. Then I saw that you were not perfect and I loved you even more.";
    } else if (luvQuote < 0.2){
        quote = "I look at you and see the rest of my life in front of my eyes.";
    } else if (luvQuote < 0.3){
        quote = "You're my favorite notification.";
    } else if (luvQuote < 0.4){
        quote = "I don’t need paradise because I found you.";
    } else if (luvQuote < 0.5){
        quote = "Even on bad days, I’ll still be happy with you.";
    } else if (luvQuote < 0.6){
        quote = "You make me feel like I’m home, even when we’re apart.";
    } else if (luvQuote < 0.7){
        quote = "You’re that ‘once in a lifetime’ kind of vibe.";
    } else if (luvQuote < 0.8){
        quote = "I didn’t choose you, my heart did.";
    } else if (luvQuote < 0.9){
        quote = "With you, every moment becomes a memory worth keeping.";
    } else if (luvQuote < 1) {
        quote = "I love you not just for who you are, but for how I am when I’m with you.";
    } else if (luvQuote < 2) {
        quote = "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.";
    } else if (luvQuote < 3) {
        quote = "You don’t love someone because they’re perfect. You love them in spite of the fact that they’re not.";
    } else if (luvQuote < 4) {
        quote = "I love you, not only for what you are but for what I am when I am with you.";
    } else if (luvQuote < 5) {
        quote = "To love and be loved is to feel the sun from both sides.";
    } else if (luvQuote < 6) {
        quote = "Love is composed of a single soul inhabiting two bodies.";
    } else if (luvQuote < 7) {
        quote = "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.";
    } else if (luvQuote < 8) {
        quote = "You are my heart, my life, my one and only thought.";
    } else if (luvQuote < 9) {
        quote = "The best thing to hold onto in life is each other.";
    } else if (luvQuote < 10) {
        quote = "When I saw you, I fell in love, and you smiled because you knew.";
    } else if (luvQuote < 11) {
        quote = "Love is not finding someone to live with. It’s finding someone you can’t imagine living without.";
    } else if (luvQuote < 12) {
        quote = "I am yours, don’t give myself back to me.";
    } else if (luvQuote < 13) {
        quote = "When you’re in love, you can’t fall asleep because reality is better than your dreams.";
    } else if (luvQuote < 14) {
        quote = "Love is a friendship set to music.";
    } else if (luvQuote < 15) {
        quote = "I have waited for this moment for so long and now that I have you, I will never let you go.";
    } else if (luvQuote < 16) {
        quote = "True love is not about perfection, it’s about accepting each other’s flaws and being happy together.";
    } else if (luvQuote < 17) {
        quote = "In the end, we only regret the chances we didn’t take.";
    } else if (luvQuote < 18) {
        quote = "I could start fires with what I feel for you.";
    } else if (luvQuote < 19) {
        quote = "When I look into your eyes, I know I’ve found the mirror of my soul.";
    } else if (luvQuote < 20) {
        quote = "Love is like the wind, you can’t see it, but you can feel it.";
    } else if (luvQuote < 21) {
        quote = "You are my today and all of my tomorrows.";
    } else if (luvQuote < 22) {
        quote = "You are my today and all of my tomorrows.";
    } else if (luvQuote < 23) {
        quote = "Love is an endless act of forgiveness. Forgiveness is the key to action and freedom.";
    } else if (luvQuote < 24) {
        quote = "Every time I see you, I fall in love all over again.";
    } else if (luvQuote < 25) {
        quote = "Love is not about how much you say ‘I love you’, but how much you prove that it’s true.";
    } else if (luvQuote < 26) {
        quote = "The best love is the one that makes you a better person, without changing you into someone other than yourself.";
    } else if (luvQuote < 27) {
        quote = "With you, every moment becomes a memory worth keeping.";
    } else if (luvQuote < 28) {
        quote = "You don’t marry someone you can live with—you marry the person who you cannot live without.";
    } else if (luvQuote < 29) {
        quote = "I love you with the kind of love that makes the world feel a little less lonely.";
    } else {
        quote = "You make me want to be a better person.";
    }

    document.getElementById('quote-display').innerText = quote;
} 

function luvQuote() {
    window.location.href = "love.html";
}

//SURVIVAL QUOTES

function survivalQuote() {

    //const surQuote = Math.random();
    const surQuote = Math.floor(Math.random() * 30);

    let quote = '';

    if (surQuote < 0.1){
        quote = "You never know how strong you are until being strong is your only choice.";
    } else if (surQuote < 0.2){
        quote = "I’m still standing. That’s something to be proud of.";
    } else if (surQuote < 0.3){
        quote = "Survival is not about being fearless. It’s about making a decision that something else is more important than fear.";
    } else if (surQuote < 0.4){
        quote = "Sometimes, just getting through the day is a victory.";
    } else if (surQuote < 0.5){
        quote = "Rock bottom became the solid foundation on which I rebuilt my life.";
    } else if (surQuote < 0.6){
        quote = "Scars are proof that you survived what tried to break you.";
    } else if (surQuote < 0.7){
        quote = "Survivors are not the strongest or the smartest, but the most adaptable.";
    } else if (surQuote < 0.8){
        quote = "Even in the darkest times, the smallest light shines bright.";
    } else if (surQuote < 0.9){
        quote = "I survived because the fire inside me burned brighter than the fire around me.";
    } else if (surQuote < 1) {
        quote = "Endurance is not just the ability to bear a hard thing, but to turn it into glory.";
    } else if (surQuote < 2) {
        quote = "In the middle of difficulty lies opportunity.";
    } else if (surQuote < 3) {
        quote = "Survival is not about being fearless. It’s about taking action in spite of your fears.";
    } else if (surQuote < 4) {
        quote = "The human spirit is stronger than anything that can happen to it.";
    } else if (surQuote < 5) {
        quote = "Survival is not about avoiding danger, it’s about overcoming it.";
    } else if (surQuote < 6) {
        quote = "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.";
    } else if (surQuote < 7) {
        quote = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
    } else if (surQuote < 8) {
        quote = "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.";
    } else if (surQuote < 9) {
        quote = "Survival is not just about getting through. It’s about growing through the experience.";
    } else if (surQuote < 10) {
        quote = "A survivor is someone who strives to thrive despite their circumstances.";
    } else if (surQuote < 11) {
        quote = "When you come out of the storm, you won’t be the same person who walked in. That’s what the storm is all about.";
    } else if (surQuote < 12) {
        quote = "In the midst of chaos, there is also opportunity.";
    } else if (surQuote < 13) {
        quote = "It’s not the strongest who survive, but the ones most adaptable to change.";
    } else if (surQuote < 14) {
        quote = "You never know how strong you are until being strong is your only choice.";
    } else if (surQuote < 15) {
        quote = "Survival is a story of persistence, courage, and adapting to the impossible.";
    } else if (surQuote < 16) {
        quote = "Strength does not come from what you can do. It comes from overcoming the things you once thought you couldn’t.";
    } else if (surQuote < 17) {
        quote = "To survive, you must find something worth dying for.";
    } else if (surQuote < 18) {
        quote = "We do not remember days, we remember moments.";
    } else if (surQuote < 19) {
        quote = "The difference between a survivor and a victim is their perspective.";
    } else if (surQuote < 20) {
        quote = "You don't survive by being fearless, you survive by being prepared.";
    } else if (surQuote < 21) {
        quote = "Sometimes you have to survive the storm to appreciate the rainbow.";
    } else if (surQuote < 22) {
        quote = "Survival isn’t about being invincible. It’s about adapting to what’s thrown your way.";
    } else if (surQuote < 23) {
        quote = "Survivors know that the worst can come, but they find a way to fight through it.";
    } else if (surQuote < 24) {
        quote = "Every survival situation is an opportunity to evolve and grow.";
    } else if (surQuote < 25) {
        quote = "You can't control the situation, but you can control how you react to it.";
    } else if (surQuote < 26) {
        quote = "Only those who risk going too far can possibly find out how far one can go.";
    } else if (surQuote < 27) {
        quote = "The best way out is always through.";
    } else if (surQuote < 28) {
        quote = "Survival is the ability to swim in strange water.";
    } else if (surQuote < 29) {
        quote = "You survive the storms of life not by avoiding them, but by enduring them.";
    } else {
        quote = "Fear is a reaction, courage is a decision.";
    }

    document.getElementById('quote-display').innerText = quote;
} 

function surQuote() {
    window.location.href = "survival.html";
}

//QUOTES FROM THE DEEP QUOTES

function deepQuote() {

    //const depQuote = Math.random();
    const depQuote = Math.floor(Math.random() * 30);

    let quote = '';

    if (depQuote < 0.1){
       quote = "I wanted to disappear, to fade so quietly that no one would notice I was gone.";
    } else if (depQuote < 0.2){
        quote = "Some days I wish I could just sleep and not wake up. Not out of tiredness, but out of pain.";
    } else if (depQuote < 0.3){
        quote = "The hardest part isn’t wanting to die, it’s feeling like you have no reason to live.";
    } else if (depQuote < 0.4){
        quote = "I’m not looking for attention. I’m looking for peace.";
    } else if (depQuote < 0.5){
        quote = "I smile so no one asks what's wrong, but inside I’m screaming.";
    } else if (depQuote < 0.6){
        quote = "I’m not afraid to die. I’m afraid that living like this will never end.";
    } else if (depQuote < 0.7){
        quote = "Sometimes the most silent people are the ones screaming the loudest inside.";
    } else if (depQuote < 0.8){
        quote = "I don’t want to end my life. I just want the pain to stop";
    } else if (depQuote < 0.9){
        quote = "It hurts to breathe, because every breath reminds me I'm still here.";
    } else if (depQuote < 1){
        quote = "I’m tired of being strong for everyone else when I’m breaking inside.";
    } else if (depQuote < 2){
        quote = "The deeper the sorrow, the less tongue it has.";
    } else if (depQuote < 3){
        quote = "In the depths of darkness, we find the light of our true selves.";
    } else if (depQuote < 4){
        quote = "The deeper the roots, the harder it is to uproot.";
    } else if (depQuote < 5){
        quote = "When you dive into the depths of your soul, you find that everything you seek is already within you.";
    } else if (depQuote < 6){
        quote = "Sometimes you have to go through the deep waters to reach the shore of your dreams.";
    } else if (depQuote < 7){
        quote = "The deeper you go into yourself, the more you discover about the world.";
    } else if (depQuote < 8){
        quote = "In the deepest waters, the most beautiful pearls are created.";
    } else if (depQuote < 9){
        quote = "Only in the deepest silence can we hear the whispers of our soul.";
    } else if (depQuote < 10){
        quote = "The ocean is a reminder that even the deepest mysteries are meant to be explored.";
    } else if (depQuote < 11){
        quote = "The deepest wounds are often the ones we cannot see.";
    } else if (depQuote < 12){
        quote = "From the depths of suffering comes the strength to move forward.";
    } else if (depQuote < 13){
        quote = "The deeper you look, the more you’ll find; but the harder it is to accept.";
    } else if (depQuote < 14){
        quote = "Even the darkest depths have a purpose, for they reveal the brightest stars.";
    } else if (depQuote < 15){
        quote = "Sometimes you have to sink to the depths to discover what truly matters.";
    } else if (depQuote < 16){
        quote = "The deeper the pain, the greater the healing once it is embraced.";
    } else if (depQuote < 17){
        quote = "At the deepest part of yourself, lies an untapped ocean of strength.";
    } else if (depQuote < 18){
        quote = "The deeper we go into the mystery, the more we uncover about who we really are";
    } else if (depQuote < 19){
        quote = "Only in the deep stillness of the heart can you hear the truth.";
    } else if (depQuote < 20){
        quote = "The deeper you sink, the more you learn to rise with grace.";
    } else if (depQuote < 21){
        quote = "The deepest ocean holds the greatest treasures, just as the deepest souls hold the most profound wisdom.";
    } else if (depQuote < 22){
        quote = "In the depths of solitude, the soul learns to speak its truest language.";
    } else if (depQuote < 23){
        quote = "The deeper you go, the less afraid you are to explore the unknown.";
    } else if (depQuote < 24){
        quote = "It is in the deepest places of your heart where you will find your true strength.";
    } else if (depQuote < 25){
        quote = "Only by facing the depths can we ever truly understand the heights.";
    } else if (depQuote < 26){
        quote = "The deeper the roots, the stronger the tree; the more we learn to endure, the greater we become.";
    } else if (depQuote < 27){
        quote = "In the depth of silence, we hear the loudest truths";
    } else if (depQuote < 28){
        quote = "The deeper the despair, the brighter the light that follows.";
    } else if (depQuote < 29){
        quote = "Only the deepest souls can handle the deepest waters.";
    } else {
        quote = "What lies in the depths of your heart will shape the world you experience.";
    }

    document.getElementById('quote-display').innerText = quote;
} 

function deppQuote() {
    window.location.href = "deep.html";
}

//FUNNY QUOTES

function funnyQuote() {

    //const funQuote = Math.random();
    const funQuote = Math.floor(Math.random() *30);

    let quote = '';

    if (funQuote < 0.1){
        quote = "I'm not lazy, I'm just on energy-saving mode.";
    } else if (funQuote < 0.2){
        quote = "My wallet is like an onion. Opening it makes me cry.";
    } else if (funQuote < 0.3){
        quote = "Why fall in love when you can fall asleep?";
    } else if (funQuote < 0.4){
        quote = "Common sense is like deodorant. The people who need it most never use it.";
    } else if (funQuote < 0.5){
        quote = "Monday is proof that God sometimes tests our patience.";
    } else if (funQuote < 0.6){
        quote = "I'm on a seafood diet. I see food and I eat it.";
    } else if (funQuote < 0.7){
        quote = "They say ‘don’t try this at home’… so I went to a friend’s house!";
    } else if (funQuote < 0.8){
        quote = "If stress burned calories, I’d be a supermodel by now.";
    } else if (funQuote < 0.9){
        quote = "I’m not weird. I’m just limited edition.";
    } else if (funQuote < 1) {
        quote = "I tried to be normal once. Worst two minutes of my life.";
    } else if (funQuote < 2) {
        quote = "My bank account and I are not on speaking terms right now.";
    } else if (funQuote < 3) {
        quote = "I don’t snore. I dream I’m a motorcycle.";
    } else if (funQuote < 4) {
        quote = "I need a six-month vacation, twice a year.";
    } else if (funQuote < 5) {
        quote = "My phone battery lasts longer than most people’s relationships.";
    } else if (funQuote < 6) {
        quote = "If karma doesn’t hit you, I gladly will.";
    } else if (funQuote < 7) {
        quote = "I finally realized people are prisoners of their phones... that’s why it’s called a ‘cell’ phone.";
    } else if (funQuote < 8) {
        quote = "I laugh at my own jokes so you don’t have to.";
    } else if (funQuote < 9) {
        quote = "Why do they call it 'fast food' when it takes 20 minutes and I’m still hungry?";
    } else if (funQuote < 10) {
        quote = "Dating me is like using Internet Explorer... eventually, you’ll move on.";
    } else if (funQuote < 11) {
        quote = "I googled my symptoms. Turns out I just need to stop being broke.";
    } else if (funQuote < 12) {
        quote = "If sleeping was a job, I’d be CEO by now.";
    } else if (funQuote < 13) {
        quote = "My talent? Turning everything into a joke... even my life.";
    } else if (funQuote < 14) {
        quote = "They say don’t give up... but have they tried opening a biscuit wrapper quietly at night?";
    } else if (funQuote < 15) {
        quote = "WiFi went down for five minutes, so I had to talk to my family. They seem like nice people.";
    } else if (funQuote < 16) {
        quote = "If Monday had a face, I would punch it";
    } else if (funQuote < 17) {
        quote = "My bed and I love each other, but the alarm clock keeps trying to break us up.";
    } else if (funQuote < 18) {
        quote = "Behind every successful man is a surprised woman.";
    } else if (funQuote < 19) {
        quote = "Life is short. Smile while you still have teeth.";
    } else if (funQuote < 20) {
        quote = "I'm not arguing, I'm just explaining why I'm right.";
    } else if (funQuote < 21) {
        quote = "My phone auto-corrects ‘LOL’ to ‘Are you sure you’re okay?";
    } else if (funQuote < 22) {
        quote = "I’m not broke, I’m just financially restricted until further notice.";
    } else if (funQuote < 23) {
        quote = "Sleeping is my drug, my bed is my dealer, and my alarm clock is the police.";
    } else if (funQuote < 24) {
        quote = "I thought I was in a bad mood, but it turns out I just needed food.";
    } else if (funQuote < 25) {
        quote = "Why chase your dreams when you can just nap and dream again?";
    } else if (funQuote < 26) {
        quote = "If my life had a background song, it’d be the Windows error sound.";
    } else if (funQuote < 27) {
        quote = "My talent is sleeping through alarms like it’s an Olympic sport.";
    } else if (funQuote < 28) {
        quote = "I put ‘Pro’ in ‘problem’ — because I come with experience.";
    } else if (funQuote < 29) {
        quote = "I smile because I have no idea what’s going on.";
    } else  {
        quote = "I don’t need therapy, I need a nap and ₦10 million.";
    }

    document.getElementById('quote-display').innerText = quote;
} 

function funnQuote() {
    window.location.href = "funny.html";
}

//DARK HUMOR

function darkQuote() {

    //const darkQuote = Math.random();
    const darkQuote = Math.floor(Math.random() * 30);

    let quote = '';

    if (darkQuote < 0.1){
        quote = "The difference between me and a coffin? At least people visit the coffin.";
    } else if (darkQuote < 0.2){
        quote = "If I disappear, act like you never met me. We’re not doing missing posters.";
    } else if (darkQuote < 0.3){
        quote = "Therapy is expensive, so I just talk to myself and laugh like a villain.";
    } else if (darkQuote < 0.4){
        quote = "Sometimes I wonder if my problems are real or just bad WiFi.";
    } else if (darkQuote < 0.5){
        quote = "Why chase dreams when you can chase chaos?";
    } else if (darkQuote < 0.6){
        quote = "I'm emotionally unavailable, but my sarcasm is free 24/7";
    } else if (darkQuote < 0.7){
        quote = "I’m not suicidal. I just don’t care if I wake up.";
    } else if (darkQuote < 0.8){
        quote = "I don’t chase dreams anymore. They’ve all blocked me.";
    } else if (darkQuote < 0.9){
        quote = "Some people live for love. I survive out of spite.";
    } else if (darkQuote < 1){
        quote = "Even my imaginary friend left me for someone happier.";
    } else if (darkQuote < 2){
        quote = "I told my therapist about my dark thoughts... now she needs a therapist.";
    } else if (darkQuote < 3){
        quote = "Some people graduate with honors. I am just honored I survived school without catching a case.";
    } else if (darkQuote < 4){
        quote = "Dying inside? Just put on a smile and confuse everybody.";
    } else if (darkQuote < 5){
        quote = "They said laughter is the best medicine — now I’m banned from the hospital.";
    } else if (darkQuote < 6){
        quote = "I’m not emotionally unavailable. I’m emotionally under construction.";
    } else if (darkQuote < 7){
        quote = "I'm not afraid of death. I'm just not in a rush to meet him while I'm broke.";
    } else if (darkQuote < 8){
        quote = "When life closes a door, it usually locks it, sets the house on fire, and blames you.";
    } else if (darkQuote < 9){
        quote = "You either die a hero… or live long enough to become a meme.";
    } else if (darkQuote < 10){
        quote = "My mental health is like Windows 98 — slow, glitchy, and one click from crashing.";
    } else if (darkQuote < 11){
        quote = "They say ‘don’t give up’… but have you seen my life?";
    } else if (darkQuote < 12){
        quote = "At my funeral, play the sound of my alarm clock — just to see who jumps.";
    } else if (darkQuote < 13){
        quote = "I don’t have skeletons in my closet. I have a whole disco party of regrets.";
    } else if (darkQuote < 14){
        quote = "They told me to find the light at the end of the tunnel… I found WiFi instead.";
    } else if (darkQuote < 15){
        quote = "My dark thoughts and I are in a long-term relationship.";
    } else if (darkQuote < 16){
        quote = "I treat my emotions like I treat unread emails — ignore them until I crash.";
    } else if (darkQuote < 17){
        quote = "My life is like a horror movie… just with more snacks and less screaming.";
    } else if (darkQuote < 18){
        quote = "Some people have guardian angels. I think mine quit.";
    } else if (darkQuote < 19){
        quote = "Yes, I laugh at my pain. It’s cheaper than therapy.";
    } else if (darkQuote < 20){
        quote = "‘Don’t be so negative.’ Bro, that’s literally my brand.";
    } else if (darkQuote < 21){
        quote = "Why be scared of the dark when you already live there emotionally?";
    } else if (darkQuote < 22){
        quote = "Burnout? Nah, I’ve reached spiritual ash.";
    } else if (darkQuote < 23){
        quote = "My coping mechanism? Humor and pretending I don’t need sleep.";
    } else if (darkQuote < 24){
        quote = "My therapist stopped taking my calls. I guess even she needed therapy after talking to me.";
    } else if (darkQuote < 25){
        quote = "I asked for peace of mind. Life handed me a playlist of regrets.";
    } else if (darkQuote < 26){
        quote = "The light at the end of the tunnel? That’s just me on fire.";
    } else if (darkQuote < 27){
        quote = "The only thing keeping me alive is the fear of being a ghost with bills.";
    } else if (darkQuote < 28){
        quote = "Some people are afraid of monsters. I’m scared of happiness — it never lasts.";
    } else if (darkQuote < 29){
        quote = "I don't plan my future. I just wait for the next plot twist.";
    } else {
        quote = "If pain builds character, I’m practically a whole horror novel.";
    }

    document.getElementById('quote-display').innerText = quote;
} 

function dakQuote() {
    window.location.href = "dark.html";
}


function navigationButton() {
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')
    }
}

function getStartedButton() {
    window.location.href = "index.html";
}

function aboutButton() {
    window.location.href = "about.html";
}
function contacts() {
    window.location.href = "contacts.html";
}
function twitter() {
    window.location.href = "https://x.com/The_Guyyy_?t=O4Z0fx_3JvPRRIIKtR8X1A&s=09";   
}
function github() {
    window.location.href = "https://github.com/Scope1-guy";
}
function error() {
    window.location.href = "error.html";
}
function  howItWorks() {
    window.location.href = "how-it-works.html";
}