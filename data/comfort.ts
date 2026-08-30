export type MissMeMoment = {
  title: string;
  text: string;
  // Put the file in public/assets, then use its path here. Video files loop automatically.
  image?: string;
};

export const missMeMoments: MissMeMoment[] = [
  {
    title: 'for when you get sleepy',
    text: 'hehehe i will always take a screenshot of your yawn there aint no stopppign that (no covering with hand allowed)',
    image: '/assets/sddd.jpeg',
  },
  {
    title: 'our little hang',
    text: 'when we went to affans house and then had coffee from olde baileyss Loveeddd it and was so much funnn',
    image: '/assets/cofvid.MOV',
  },
  {
    title: 'we are always close by',
    text: 'Always know no matter how far i am always right there in your heart ya fir ulta i think you are always in my heart vice versa lmfao',
    image: '/assets/IMG_5782.jpeg',
  },
];

export type Letter = {
  slug: string;
  subject: string;
  preview: string;
  date: string;
  greeting: string;
  paragraphs: string[];
  signOff: string;
  signature: string;
};

// Add future letters by copying this whole object and giving it a unique slug.
export const letters: Letter[] = [
  {
    slug: 'a-little-note-for-you',
    subject: 'Just a random letter for you',
    preview: 'Hehehehe',
    date: '30th August, 2026',
    greeting: 'My dear Arundhati,',
    paragraphs: [
      ' Hellloooooo!!! there is no important agenda to this letter its just a letter because i felt like it. i feel like i have gotten used to the place you know like i have stopped complaining and tbh there is not much to complain about i am getting accoustumed to this place and its okayish now. only thing that still bothers me is like you see others and their hostel life and then compare it to yours then it kinda stings but ehh its wahtver. HEHEHE its crazyyy how its been around 2 months and like 12 days since we have been dating and been together and it has been the awesomest time. I really really miss you but i feel like i have kinda gotten used to is and now its just me running on cruise mode and just surviving and waiting till i come back to mumbai and meet you. and it also feels good that i have gotten into a good routine, a healthyish diet just need to fit in some studying and reduce timepass. I genuinely am waiting for you to get a PG cause then we potentially could stay on calls for longerrr durationsss and it willl be funnnn and AHHHHHHHH cant wait i hope you get a PG sooner. Also its not fair what you said yesterday lmao because now i cant stop thinking about it like how you comparing my eyes to ganpatis eyes like damnn girl chill outttt. on second thought forget that i said i am getting used to it hell nah i aint i am stilll missing you more and more by the ady and it SUCKSS but yea no other option ngl and we will get through it ik '
    ],
    signOff: 'Yours Lovingly,',
    signature: 'Vishwa',
  },
];
