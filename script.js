const generateMessage = () => {
    let words = {
        emojis: ["(˵ ͡° ͜ʖ ͡°˵)", "(╥﹏╥)", "(︶︹︶)", "(•`_´•\")", "(｡◕‿‿◕｡)", "(╯°□°)╯︵ ┻━┻", "ᕦ( ͡° ͜ʖ ͡°)ᕤ", "ಠ_ಠ", "✌(-‿-)✌", "¯\_(ツ)_/¯", "(づ ￣ ³￣)づ", "(ง •̀_•́)ง"],
        activities: ["going for a walk", "taking photographs", "taking a bath", "siting in the sun", "doing some yoga", "swimming", "buying fresh flowers", "cooking", "jogging", "meditating", "enjoying a cup of tea"],
        music: ["Radiohead", "A Perfect Circle", "Alt-j", "Lana del Rey", "Ludovico Eunaudi", "Glass Animals", "The Neighbourhood", "Doja Cat", "Deftones"]
    };
    const numRandEmoji = Math.floor(Math.random() * words.emojis.length);
    const numRandActivity = Math.floor(Math.random() * words.activities.length);
    const numRandMusic = Math.floor(Math.random() * words.music.length);

    const emoji = words.emojis[numRandEmoji];
    const activity = words.activities[numRandActivity];
    const band = words.music[numRandMusic];
    
    let phrase = `Mood of the day: ${emoji}. What about ${activity} while listening to ${band} to make your day better?`;
    return phrase;
}

console.log(generateMessage())