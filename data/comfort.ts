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
    subject: 'A little note for you',
    preview: 'For the days you need it most.',
    date: 'For the days you need it most',
    greeting: 'My dearest Aru,',
    paragraphs: [
      'Write your letter here. This space is yours — make it as long, soft, silly, or honest as you want it to be.',
      'You can add another paragraph here whenever you want to leave her a new little piece of your heart.',
    ],
    signOff: 'Always yours,',
    signature: 'Vishwa',
  },
];
