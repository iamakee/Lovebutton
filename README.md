# Our Memory Book

## Preview on your Mac

Run `npm run dev` and open `http://localhost:3000`.

## Preview on your iPhone

1. Connect the Mac and iPhone to the same Wi-Fi network.
2. Run `npm run dev:network`.
3. Find the Mac's Wi-Fi address with `ipconfig getifaddr en0`.
4. On the iPhone, open `http://YOUR_MAC_IP:3000` in Safari (for example, `http://192.168.1.25:3000`).

If macOS asks about incoming connections, allow Node. Safari will automatically use the responsive layout.

## Photos for deployment

The site serves its files from `public/assets`. Put any new photos or videos there, then update `data/memories.ts` or `data/comfort.ts` with a URL beginning `/assets/`. In `data/comfort.ts`, use `media: { type: 'image', src: '/assets/photo.jpg' }` for a photo, or `media: { type: 'video', src: '/assets/video.mp4' }` for a looping video.
