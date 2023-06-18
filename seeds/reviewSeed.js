const reviewData = [
  {
    message:
      "This book was great and I loved to read what I missed in the movies. I highly recommend it. It is the hardest one if the series cause it takes some time for the story to get going and Tom Bombidal does take up quite some time. But if you get through this book you will thoroughly enjoy the next two! Highly recommend to everyone!",
    review_id: 1,
    user_id: 1,
  },
  {
    message:
      "This book is great! And the cliffhanger at the end makes you have immediately start the next book! Aragorn is so cool in this book and I love everything that people missed in the movies (which I also love). Definitely recommend people to read!!",
    review_id: 2,
    user_id: 2,
  },
  {
    message:
      "Oh my gosh, this is an amazing end to a perfect trilogy!! J.R.R. Tolkien was very very thorough in writing these!! I've started reading the Simirillian and can't wait to finish it!! I love that Sam entity eventually goes to the undying lands and that Legolas and Gimli both go to the undying lands together. I love the friendship and unity in these books. Amazing!!",
    review_id: 3,
    user_id: 3,
  },
  {
    message:
      "I'm doing this book for my English assignment and I didn't even bother to read it, I don't ever bother reading the books for assignments, and yet I still pass (C+ - A- usually) the fact that my teachers expected me to read a book during my holidays is f****** crazy. I also would've felt like a Pedo reading a book about 7 and 12 year old's.",
    review_id: 4,
    user_id: 4,
  },
  {
    message:
      "I actually bought this from my school's bookstore a little more than a month ago since it was a requirement. We were given three papers to write our reader response journal in, one for chapters 1-10, one for chapters 11-20, and the last one for chapters 21-31. For the first month, I actually found the book uninteresting and boring, since I couldn't get past the first chapter at all. But when our teacher introduced a comprehension check this week, I began to get serious and started reading it.",
    review_id: 5,
    user_id: 5,
  },
  {
    message:
      "Amazing novel on so many levels. The story threads are driven by thoughtful graphic, art and frame structures. A first for me, deeply impressed how it pulls the reader into this political cold-war set murder mystery with complex personalities and socio psychological disorder.",
    review_id: 6,
    user_id: 6,
  },
  {
    message:
      "I started reading the books instead of watching the show. I always prefered that as it dwelves your imagination with each word into a sensation in it's own. And it turned out to be a hell of a ride with every page through this engaging, raw, intelligent, intense, epic saga! Heavily waiting for the next book.It's highly detailed and very long..some may hate the detailings but it's worth it. Must read for book lovers.",
    review_id: 7,
    user_id: 1,
  },
  {
    message:
      "It is hard to fully explain the brilliance of a sequel like this in a review, without giving away its content. There is far too much going on that to even hint at some of it is to take away surprises that are part of the thrill of reading Martin’s work",
    review_id: 8,
    user_id: 2,
  },
  {
    message:
      "A storm of swords is the 3rd book in a song of ice and fire and I need to say this book is easily the best book so far everything is well written and sets up for things to come near its end 5 stars",
    review_id: 9,
    user_id: 3,
  },
  {
    message: "It was nice had a few brutal movements",
    review_id: 10,
    user_id: 4,
  },
  {
    message:
      "Its a really great book with classic GRRM writing ,with its twists and its turns it is a fascinating novel.cant wait for winds of winter to come out",
    review_id: 11,
    user_id: 5,
  },
  {
    message:
      "We like to say that some books you can tell they’ve been written by a man, well this is one of them. (DNFed at p.165).I’m tired of ignoring misogyny in popular books or excusing them because they're 'old' (1993). This book isn’t even good. So far everything I’ve read was in the TV show (except for this one chapter where he’s talking at a woman. At her because she made a vow of silence…) so you’re not missing out by not reading it.",
    review_id: 12,
    user_id: 6,
  },
  {
    message:
      "the second book of witcher saga. this book is contained with short stories. like the first book it tells the important events of Geralts life. A little sacrifice  is definitely my favourite short story.",
    review_id: 13,
    user_id: 1,
  },
  {
    message:
      "“And Then There Were None” by Agatha Christie gets a perfect 5/5 and is a murder mystery masterpiece. It's a staple of the mystery genre and if you enjoy reading a solid murder mystery, this one is for you. It's a quick read with memorable characters and an ending that is truly a bombshell moment",
    review_id: 14,
    user_id: 2,
  },
  {
    message:
      "Never before have I read a book that has driven me to such deep feelings. The plot, characters, and descriptions were extremely well done. So well done that it drives the reader to attempt to read the book in one sitting (which is impossible due to the length of the story). I would definitely consider this as one of my best reads, and would strongly consider reading it again. Thank you, Stephen King, for being the first author to write a book that gives me nightmares for nights to come",
    review_id: 15,
    user_id: 3,
  },
  {
    message:
      "If you want to be constantly scared and kept in suspense then this book is for you. If you want anything more, then read the IT remake instead. This book was nothing more than suspense and chills, there was nothing keeping me intrigued, and nothing that stuck with me as I stopped reading the book.",
    review_id: 16,
    user_id: 4,
  },
  {
    message:
      "A very good read, found it much more interesting than I thought I would. The character of Carrie White was portrayed really well as you truly understood her situation and how badly she was treated. My biggest flaw with this novel is how short it is compared with other works of Stephen King as I feel like there could of been more opportunities for further character development. Overall, this was a well executed story which will keep you engaged and making you not want to put it down",
    review_id: 17,
    user_id: 5,
  },
  {
    message:
      "Stop trying to recruit normies and other outsiders that don’t believe in the same things that we do, and just have big families when you’re able to, and teach your children to hold the same beliefs as you",
    review_id: 18,
    user_id: 6,
  },
  {
    message:
      "Greatest story ever written, and still being written.  No one will ever surpass Oda's superior writing skills in the years to come.  all humantiy could be dead and one piece will still be remebered over humans",
    review_id: 19,
    user_id: 1,
  },
  {
    message: "Cool battle of the brains",
    review_id: 20,
    user_id: 2,
  },
  {
    message:
      "Book was a flop. The plot had large black holes, there was no character development, the dialogue came across as emotionless statements. I will not read from this author again",
    review_id: 21,
    user_id: 3,
  },
  {
    message: "will actually riot if there is cheating again",
    review_id: 22,
    user_id: 4,
  },
  {
    message:
      "THIS IS MY MOST ANTICIPATED RELEASE EVER AND EVERY DAY WITHOUT IT HURTS pls i'm currently begging for an advanced copy at work",
    review_id: 23,
    user_id: 5,
  },
  {
    message:
      "This book is an epic novel by a master of language who understands the hardships of India's caste system and delivers us an open eyed view of the culture. Using his medical knowledge, the author weaves a compelling multigenerational story of love, compassion, loss, devastation, and survival. The Covenant of Water is among the best novels I have ever read. Be prepared for a long read, over 700 pages",
    review_id: 24,
    user_id: 6,
  },
  {
    message:
      "Grab the bathing suit, the towel, the sunscreen, and the wide-brimmed hat! The Five-Star Weekend is without a doubt going to be an essential accessory in your beach bag this season.",
    review_id: 25,
    user_id: 1,
  },
  {
    message:
      "I just don't see this book deserves all the hype. I am half way through and it has not gripped  me as yet. I am an avid reader but, don't find this to be a great book",
    review_id: 26,
    user_id: 2,
  },
  {
    message:
      "I always enjoy Barclay's books for their suspenseful thrills and engaging plots, and this one delivers both.",
    review_id: 27,
    user_id: 3,
  },
  {
    message: "At this point I'd read Rebecca's grocery lists",
    review_id: 28,
    user_id: 4,
  },
  {
    message:
      "Love the cover but I swear if this is the Love Hypothesis 3.0 I'm gonna lose it. I need Ali Hazelwood to prove to me (and the rest of the world) that she's not a one hit wonder",
    review_id: 29,
    user_id: 5,
  },
  {
    message:
      "What a fabulous read. One of very few non-fiction books I couldn’t put down. Why has every Australian and every person interested in colonial history for that matter not read this book? A fast-paced preci on Australian colonisation, and a wonderful personal story on how the research slowly unearthed so much history after centuries of the great Australian “Silence”.",
    review_id: 30,
    user_id: 6,
  },
  {
    message:
      "Well here I am  up at 5:00 am reading the darn thing. It is a page turner so we’ll crafted it is destined to be an American classic.  It’s so engaging.  I am not usually a reader of this type of historical account but the author’s research from logs etc brings the reader along this incredible true story as if he himself had smashed against those rocks with the crew.  The audio version narrated by Dion Graham is spectacular tour de force.",
    review_id: 31,
    user_id: 1,
  },
  {
    message:
      "this book ATE UP the marriage of convenience trope!! this sequel was definitely a heavy step up from the previous one. tessa bailey’s writing is always funny and so damn creative. i love these characters so much!! it was giving she’s the black cat to his golden retriever personality. announce to lovers if you will.",
    review_id: 32,
    user_id: 2,
  },
  {
    message:
      "In 1991, on a small isolated island off the coast of Newfoundland, 12-year-old Pierce Jacobs is still missing his father, a fisherman who disappeared in the Atlantic three years previously. Life on the island is quiet and hard and the local fishing industry is on the brink of collapse. Then a young teen named Anna Tessier goes missing and Pierce and his friends set out to find her.",
    review_id: 33,
    user_id: 3,
  },
  {
    message:
      "I think Barbara must have done considerable research to piece this multifaceted rich story together. I listened to it on Audible. The narrator did a fantastic job portraying the character with his voice. I laughed out loud at Demons little sayings and wanted to cry as he described hi life and how so many adults had let him down. Kids raising themselves and each other. Excellent read that I’ll be thinking about for a long time.",
    review_id: 34,
    user_id: 4,
  },
  {
    message:
      "I am not disappointed! Well worth the wait! I love all of Kate’s books and this is certainly up there as a favourite. I’m almost at the end! Thank you, Kate for delivering an absolute page turner! My first book of yours was The Secret Garden, which I re-read immediately! My absolute favourite is The Clockmaker’s Daughter! Thank you for being one of my favourite authors!",
    review_id: 35,
    user_id: 5,
  },
  {
    message:
      "I very much enjoyed the book, I thought the book was well written and helpful in explaining some of the decisions made throughout his presidency. I appreciated the style, the 'bringing you into the room' during impasses or debates.",
    review_id: 36,
    user_id: 6,
  },
  {
    message: "the game of thrones of anime",
    review_id: 37,
    user_id: 1,
  },
  {
    message: "slow start amazing finish",
    review_id: 38,
    user_id: 2,
  },
  {
    message:
      "has one of the greatest arcs in all og shounen however the filler ruins it",
    review_id: 39,
    user_id: 3,
  },
  {
    message: "The grandfather of shounen however it does have many plot holes",
    review_id: 40,
    user_id: 4,
  },
  {
    message:
      "good fights and really hits your emotions when you least expect it",
    review_id: 41,
    user_id: 5,
  },
  {
    message:
      "fantastic music really plays towards the how classical music is presented all while entangling you with a romance tale at the same time",
    review_id: 42,
    user_id: 6,
  },
  {
    message:
      "One of the first manga that represents characters in college and they do not miss with this series, probably my favourite romance series to exist",
    review_id: 43,
    user_id: 1,
  },
  {
    message:
      "Fantastic fight scenes really well depicted but the most important part is the main character mob and how well he developes throught the story",
    review_id: 44,
    user_id: 2,
  },
  {
    message: "fantastic satire on the shounen genra of anime",
    review_id: 45,
    user_id: 3,
  },
  {
    message: "really annoying at first but the pacing is amazing",
    review_id: 46,
    user_id: 4,
  },
  {
    message:
      "starts off really corny and all fun and games and then really becomes dark and greuling when you least expect it",
    review_id: 47,
    user_id: 5,
  },
  {
    message: "Fight scenes are too good to be true",
    review_id: 48,
    user_id: 6,
  },
  {
    message: "fantastic story and the powers concept is really cool",
    review_id: 49,
    user_id: 1,
  },
  {
    message:
      "A lovely book, wherein a lady's smartness and kindness are  respected . Inspite of her poor back ground, she slowly gains recognition and appreciation from a gentleman who adores her.",
    review_id: 52,
    user_id: 2,
  },
  {
    message:
      "The Great Gatsby by F. Scott Fitzgerald is a classic novel that has stood the test of time, captivating readers with its timeless themes, compelling characters, and beautifully descriptive prose. Set against the backdrop of the roaring 1920s, Fitzgerald takes us on a journey into the glittering world of the American Dream, exploring the dark underbelly of wealth, love, and ambition.",
    review_id: 53,
    user_id: 3,
  },
  {
    message:
      "A marvelous journey through a world of magic. With such human characters, you never know what could happen, and I remained glued to following their fates. The writing was fresh for me as everything happened at once, no one really dies, and the complexities of the human condition are summarised so neatly in moments of lucidity that they cut through the haze to pierce the heart. I wish I could discuss the book more with others to further explore the wonders of that world",
    review_id: 54,
    user_id: 4,
  },
  {
    message:
      "A tremendously harrowing read. A bleak, unsparing and relentless look into a part of the American psyche that is lost to most people. Decent God Fearing country folk living their lives out bump up against small time criminals whose aimless lives and disregard of any human civilty cannot be fathomed. The bloody acts are not born of rage or anger but of spontaneous violence brewing in a competitive cycle between the killers.",
    review_id: 55,
    user_id: 5,
  },
  {
    message:
      "Amazing book with a lot of character except towards the end a bit it gets kinda cheesy but overall it has great characters and is great for young teens like me in 8th grade and up. This should be presented to more teens  like me and my classmates. May not be the best book NOW as it has underage smoking, but nobody knew it was REALLY bad back then and it's a kid who has been influenced by a bad neighborhood. Anyway, back on topic, anybody thinking about reading this book definitely should. ",
    review_id: 56,
    user_id: 6,
  },
  {
    message:
      "A Brave New World, A Novel, written in 1930 is one of the great dystopia/utopia books. I would even go as far as to say it is up there with George Orwell. This book explores so many theories and philosophies. I counted atleast 10 theories about humanity and nature vs. nurture. Extremely thought provoking. This book made me appreciate solitude. Definitely an acquired taste.",
    review_id: 57,
    user_id: 1,
  },
  {
    message:
      "Dodie Smith's novel I Capture the Castle is a journey through the mind of a young writer as she attempts to chronicle her daily life. Seventeen-year-old Cassandra Mortmain has recently learned to speed-write, and she decides to work on her writing skills by describing the actions and conversations of those around her.",
    review_id: 58,
    user_id: 2,
  },
  {
    message:
      "Through detailed description and vocabulary, the characters and plot were so well crafted! Jane's childhood hardships only strengthened her resolve to find the balance between independence and belonging.",
    review_id: 59,
    user_id: 3,
  },
  {
    message:
      "Reviews are part where one inspired to go or atleast have a look. The all scene revolved around a murder. In one's tell it can be short description or story or a fascinating drama or many. But here, Fyodore, make you struck to think beyond.",
    review_id: 60,
    user_id: 4,
  },
  {
    message:
      "My favourite book.  The Goldfinch won the Pulitzer but I feel this book is far superior.  Greek tragedy as a modern whydunit.  The characters and scenes are written in masterful language that leave the reader feeling an intimate connection with both.  A piece of art I read at least once a year.",
    review_id: 61,
    user_id: 5,
  },
  {
    message:
      "Wonderful book, definitely worth your time. I loved reading this book and will definitely read it again. Much more realistic than dog books written in recent years. The book is much better than the movie (2020) in my opinion. I don’t really like the movie because it was very different than the book since they tried to make it more happy and child friendly. I would like a movie that is actually like the book.",
    review_id: 62,
    user_id: 6,
  },
  {
    message:
      "I was forced to read this for a school project... At first I hated it but then it started to grow on me and I started to fall in love with the book. The story starts to become more and more interesting in the later chapters. The last few chapters even made me cry... ",
    review_id: 63,
    user_id: 1,
  },
  {
    message:
      "For reference, I’m 17. At first I found this book really difficult to get into, mostly because there is a lot of detail about the anatomy of various species of whales. As someone who is not particularly interested in this, I found it slightly boring at times. ",
    review_id: 64,
    user_id: 2,
  },
  {
    message:
      "5 star novel! Absolutely loved it. Thrilling yet gory, while also having some amazing tension and story line. Never read a book like that before and I thought I would never read it ( I’m not very good at sitting down and just reading a book ) but I absolutely loved it and would definitely recommend to anyone, even if your not really into Jurassic park. It’s just an amazing thriller book I think everyone would love",
    review_id: 65,
    user_id: 3,
  },
  {
    message:
      "One of the greatest sci fi adventure novels ever written! A fantastic read that gets your imagination and taste for adventure flowing. Superb.",
    review_id: 66,
  },
];

module.exports = reviewData;
