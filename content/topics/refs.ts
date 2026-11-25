// Link helpers shared by every topic file.

// Official Catechism text on vatican.va. Each section page holds a range of paragraphs,
// so every reference names the page that actually contains the paragraphs it cites.
export const ccc = (page: string) => `https://www.vatican.va/archive/ENG0015/${page}.HTM`;

// The New American Bible (Revised Edition) on the USCCB site, by book and chapter.
export const bible = (bookAndChapter: string) => `https://bible.usccb.org/bible/${bookAndChapter}`;
