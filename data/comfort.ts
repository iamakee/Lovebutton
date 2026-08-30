export const missMeMoments = [
  {
    title: 'A little reminder',
    text: 'Add a small memory here — something that always makes you smile.',
    // Put the image file in public/assets, then use its path here, e.g. '/assets/us-at-the-beach.jpg'.
    image: '',
  },
  {
    title: 'One of our days',
    text: 'This can be a photo and a few words about the day it was taken.',
    image: '',
  },
  {
    title: 'Until I can hug you',
    text: 'Leave a note here for the days when the distance feels a little louder.',
    image: '',
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
      ' Hellloooooo!!! there is no important agenda to this letter its just a letter because i felt like it. i feel like i have gotten used to the place you know like i have stopped complaining and tbh there is not much to complain about i am getting accoustumed to this place and its okayish now. only thing that still bothers me is like you see others and their hostel life and then compare it to yours then it kinda stings but ehh its wahtver. HEHEHE its crazyyy how its been around 2 months and like 12 days since we have been dating and been together and it has been the awesomest time. I really really miss you but i feel like i have kinda gotten used to is and now its just me running on cruise mode and just surviving and waiting till i come back to mumbai and meet you. and it also feels good that i have gotten into a good routine, a healthyish diet just need to fit in some studying and reduce timepass. I genuinely am waiting for you to get a PG cause then we potentially could stay on calls for longerrr durationsss and it willl be funnnn and AHHHHHHHH cant wait i hope you get a PG sooner. '
    ],
    signOff: 'Always yours,',
    signature: 'Vishwa',
  },
];
