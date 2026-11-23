export type Article = {
  slug: string; title: string; excerpt: string; category: string; author: string;
  date: string; read: string; image: string; featured?: boolean; content: string[];
};
export const articles: Article[] = [
  {
    slug:"the-age-of-the-endless-scroll", title:"The age of the endless scroll—and what it does to our attention",
    excerpt:"When every moment is filled, the rarest thing we own may be the ability to stay with one thought.",
    category:"Ideas", author:"Editorial Desk", date:"23 Nov 2026", read:"6 min read", featured:true,
    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85",
    content:["The day is increasingly measured in fragments. A notification, a short video, a headline, another notification. Each one asks for a little attention; together, they quietly reshape how attention is spent.","The problem is not simply the screen. It is the rhythm it creates—a rhythm that makes silence feel like a gap to be filled and thought feel like a task that should finish quickly.","To read slowly, to listen without reaching for a phone, to let an idea remain unresolved: these are small acts of resistance. They are also ways of returning to ourselves."]
  },
  {
    slug:"city-life-and-changing-neighbourhoods", title:"The changing neighbourhood: who gets to call a city home?",
    excerpt:"Cities grow, but the stories of the people who built their streets are often pushed to the margins.",
    category:"Society", author:"Mira Nair", date:"21 Nov 2026", read:"8 min read",
    image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
    content:["A neighbourhood is more than a place on a map. It is a shared memory: a shopkeeper who knows your name, a shortcut used for decades, a courtyard where evenings gather.","Urban change brings new opportunities. It can also make familiar lives feel temporary. The question is not whether cities should change, but who is allowed to remain part of that change.","Planning that listens to residents is not nostalgia. It is a way of making growth accountable to the people who experience it."]
  },
  {
    slug:"independent-media-and-trust", title:"Independent media and the fragile architecture of trust",
    excerpt:"Trust is not built by louder claims. It is earned through transparency, corrections and a willingness to question power.",
    category:"Media", author:"Kalikam Desk", date:"20 Nov 2026", read:"5 min read",
    image:"https://images.unsplash.com/photo-1504711434969-e33886168f5?auto=format&fit=crop&w=1200&q=85",
    content:["News is abundant. Reliable context is harder to find. In a crowded information environment, the work of independent media is not merely publishing faster, but showing readers how a story is known.","Editorial independence has to be visible in practice: clear sourcing, honest corrections, separation of reporting and opinion, and room for difficult questions.","A reader's trust should never be treated as a permanent asset. It is a relationship renewed with every story."]
  },
  {
    slug:"language-and-the-politics-of-belonging", title:"Language is more than a medium. It is a politics of belonging.",
    excerpt:"The language we speak shapes how we remember, participate and imagine a place in public life.",
    category:"Politics", author:"Javad Muhsin", date:"18 Nov 2026", read:"7 min read",
    image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    content:["Language can carry a home inside it. It holds jokes, local knowledge, histories and ways of seeing the world that rarely translate neatly.","When language enters public policy, the question is not only administrative efficiency. It is also access, dignity, representation and the distribution of power.","A plural society does not need to choose between communication and belonging. It can build institutions that make room for both."]
  },
  {
    slug:"cinema-and-the-art-of-looking", title:"Cinema and the art of looking at ordinary lives",
    excerpt:"The films that stay with us often make the familiar visible in a new way.",
    category:"Culture", author:"Ananya K.", date:"16 Nov 2026", read:"4 min read",
    image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85",
    content:["Cinema can turn an ordinary gesture into an event. A pause, a glance, a room in late afternoon—details become a language of their own.","The most enduring stories are not always the ones that offer escape. Some return us to the lives we already know, asking us to look again.","To watch attentively is to give a story time to unfold. Sometimes that is enough to change what we see outside the theatre."]
  },
  {
    slug:"why-slow-reading-matters", title:"In defence of slow reading",
    excerpt:"Reading without rushing is not a luxury. It may be one of the ways we learn to think clearly.",
    category:"Opinion", author:"Kalikam Desk", date:"14 Nov 2026", read:"3 min read",
    image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
    content:["Slow reading is an invitation to notice. It asks us to follow a sentence, pause at an unfamiliar idea and return to a paragraph without measuring progress.","Not every text needs to be consumed. Some deserve conversation, disagreement and time. Reading becomes less like collecting information and more like making space for thought.","In an age of speed, a few uninterrupted pages can be a meaningful beginning."]
  }
];
export const categories = ["Politics","Society","Culture","Media","Ideas","Opinion"];
