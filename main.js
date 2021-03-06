const inspiring_message = [
    'The elevator to success is out of order. You’ll have to use the stairs, one step at a time.', 
    'People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.',
    'I always wanted to be somebody, but now I realise I should have been more specific.',
    'I am so clever that sometimes I don’t understand a single word of what I am saying.',
    'People say nothing is impossible, but I do nothing every day.',
    'Life is like a sewer… what you get out of it depends on what you put into it.',
    'You can’t have everything. Where would you put it?',
    'Work until your bank account looks like a phone number.',
    'Change is not a four letter word… but often your reaction to it is!',
    'If you think you are too small to make a difference, try sleeping with a mosquito.',
    'Bad decisions make good stories.',
    'I’ll probably never fully become what I wanted to be when I grew up, but that’s probably because I wanted to be a ninja princess.',
    'When life gives you lemons, squirt someone in the eye.”',
    'A clear conscience is a sure sign of a bad memory.',
    'Well-behaved women seldom make history.',
    'I didn’t fail the test. I just found 100 ways to do it wrong.',
    'I used to think I was indecisive, but now I’m not so sure.',
    'Don’t worry about the world coming to an end today. It’s already tomorrow in Australia.',
    'Think like a proton. Always positive.',
    'Be happy – it drives people crazy.',
    'Optimist: someone who figures that taking a step backward after taking a step forward is not a disaster, it’s more like a cha-cha.',
    'The question isn’t who is going to let me, it’s who is going to stop me.',
    'You’re only given a little spark of madness. You mustn’t lose it.',
    'I am an early bird and a night owl… so I am wise and I have worms',
    'Every tattoo is temporary, because we’re all slowly dying.',
    'Age is of no importance unless you’re a cheese.',
    'The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.',
    'By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.',
    'Women who seek to be equal with men, lack ambition.',
    'Nothing is impossible, the word itself says “I’m possible!',
    'A diamond is merely a lump of coal that did well under pressure.',
    'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
];

/*===========================[Calculates random Index in Array]=====================================*/

let random_message_position = Math.floor(Math.random()*inspiring_message.length);

const random_inspiring_message = inspiring_message[random_message_position];

/*===============[Start of: Three random sentences from Array]======================================*/

for(i = 0; i < 3; i++){
    let random_message_position = Math.floor(Math.random()*inspiring_message.length);
    const random_inspiring_message = inspiring_message[random_message_position];
    console.log("\n" + ('='.repeat(random_inspiring_message.length)));
    console.log(random_inspiring_message);
    console.log(('='.repeat(random_inspiring_message.length)));
};
