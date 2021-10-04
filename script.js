const generateMessage = () => {
    let words = {
        emojis: ["(˵ ͡° ͜ʖ ͡°˵)", "(╥﹏╥)", "(︶︹︶)", "(•`_´•\")", "(｡◕‿‿◕｡)", "(╯°□°)╯︵ ┻━┻", "ᕦ( ͡° ͜ʖ ͡°)ᕤ", "ಠ_ಠ", "✌(-‿-)✌", "¯\_(ツ)_/¯", "(づ ￣ ³￣)づ", "(ง •̀_•́)ง"],
        activities: ["going for a walk", "taking photographs", "taking a bath", "siting in the sun", "doing some yoga", "swimming", "buying fresh flowers", "cooking", "jogging", "meditating", "enjoying a cup of tea"],
        music: ["Radiohead", "A Perfect Circle", "Alt-j", "Lana del Rey", "Ludovico Eunaudi", "Glass Animals", "The Neighbourhood", "Doja Cat", "Deftones"]
    };
    const randEmoji = Math.floor(Math.random() * words.emojis.length);
    const randActivity = Math.floor(Math.random() * words.activities.length);
    const randMusic = Math.floor(Math.random() * words.music.length);

    const emoji = words.emojis[randEmoji];
    const activity = words.activities[randActivity];
    const band = words.music[randMusic];
    
    let phrase = `Mood of the day: ${emoji}. What about ${activity} while listening to ${band} to make your day better?`
    return phrase;
}

console.log(generateMessage())