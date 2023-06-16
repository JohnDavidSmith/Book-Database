const { Books } = require("../models");
const authorData = require("./authorSeed");

const bookData = [
  {
    name: "The Fellowship of the Ring",
    description:
      "An epic detailing the Great War of the Ring, a struggle between good and evil in Middle-Earth, in which the tiny Hobbits play a key role.",
    author_id: 1,
    // genre_id: [1, 2, 5],
  },
  {
    name: "The Two Towers",
    description:
      "The Two Towers is the second part of J.R.R. Tolkien's epic adventure, The Lord of the Rings. Frodo and the Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom.",
    author_id: 1,
    images: "",
    // genre_id: [1, 2, 5],
  },
  {
    name: "The Return of the King",
    description:
      "The Return of the King is the third part of J.R.R. Tolkien's epic adventure, The Lord of the Rings. The Companions of the Ring have become involved in separate adventures as the quest continues.",
    author_id: 1,
    images: "",
    // genre_id: [1, 2, 5],
  },
  {
    name: "Lord of the Flies",
    description:
      "A plane crashes on a desert island and the only survivors, a group of schoolboys, assemble on the beach and wait to be rescued. By day they inhabit a land of bright fantastic birds and dark blue seas, but at night their dreams are haunted by the image of a terrifying beast. As the boys' delicate sense of order fades, so their childish dreams are transformed into something more primitive, and their behaviour starts to take on a murderous, savage significance.",
    author_id: 2,
    // genre_id: [5, 10],
  },
  {
    name: "To Kill a Mockingbird",
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
    author_id: 3,
    // genre_id: [5, 11],
  },
  {
    name: "Watchmen",
    description:
      "As former members of a disbanded group of superheroes called the Crimebusters start turning up dead, the remaining members of the group try to discover the identity of the murderer before they, too, are killed.",
    author_id: 4,
    // genre_id: [5, 12],
  },
  {
    name: "A Game of Thrones",
    description:
      "Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. It will stretch from the south, where heat breeds plot, lusts and intrigues; to the vast and savage eastern lands; all the way to the frozen north, where an 800-foot wall of ice protects the kingdom from the dark forces that lie beyond. Kings and queens, knights and renegades, liars, lords and honest men... all will play the Game of Thrones. Winter is coming...",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "A Clash of Kings",
    description:
      "In this thrilling sequel to A Game of Thrones, George R. R. Martin has created a work of unsurpassed vision, power, and imagination. A Clash of Kings transports us to a world of revelry and revenge, wizardry and warfare unlike any we have ever experienced. A comet the color of blood and flame cuts across the sky. And from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns. Six factions struggle for control of a divided land and the Iron Throne of the Seven Kingdoms",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "A Storm of Swords",
    description:
      "A STORM OF SWORDS Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken. Joffrey, of House Lannister, sits on the Iron Throne, the uneasy ruler of the land of the Seven Kingdoms. As the future of the land hangs in the balance, no one will rest until the Seven Kingdoms have exploded in a veritable storm of swords. . . .",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "A Feast for Crows",
    description:
      "After centuries of bitter strife, the seven powers dividing the land have beaten one another into an uneasy truce. Few legitimate claims to the Iron Throne still exist, and the war that has turned the world into little more than a wasteland has finally burned itself out. Or so it appears. For it’s not long before the survivors, outlaws, renegades, and carrion eaters of the Seven Kingdoms gather.",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "A Dance with Dragons",
    description:
      "In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance—beset by newly emerging threats from every direction. In the east, Daenerys Targaryen, the last scion of House Targaryen, rules with her three dragons as queen of a city built on dust and death. But Daenerys has thousands of enemies, and many have set out to find her. As they gather, one young man embarks upon his own quest for the queen, with an entirely different goal in mind.",
    author_id: 5,
    // genre_id: [1, 5, 14],
  },
  {
    name: "The Witcher",
    description:
      "Geralt de Riv, a witcher, uses his vast sorcerous powers to hunt down the monsters that threaten the world, but he soon discovers that not every monstrous-looking creature is evil, and not everything beautiful is good.",
    author_id: 6,
    // genre_id: [1, 2, 5],
  },
  {
    name: "Sword of Destiny",
    description:
      "In this collection of short stories, following the adventures of the hit collection THE LAST WISH, join Geralt as he battles monsters, demons and prejudices alike...",
    author_id: 6,
    // genre_id: [1, 2, 5],
  },
  {
    name: "And Then There Were None",
    description:
      "Ten strangers, apparently with little in common, are lured to an island mansion by the mysterious U.N.Owen. Over dinner, a record begins to play, accusing each of hiding a guilty secret. Then former reckless driver Tony Marston is found murdered by a deadly dose of cyanide.The tension escalates as the survivors realize that the killer is not only among them but is preparing to strike again... and again...",
    author_id: 7,
    // genre_id: [3, 5],
  },
  {
    name: "It",
    description:
      "In 1985, six men and one woman are called back together to search for a creature of unspeakable evil that had stalked them as children.",
    author_id: 8,
    // genre_id: [4, 5, 11],
  },
  {
    name: "Pet Sematary",
    description:
      "A horror story of a children's pet cemetery and another graveyard behind it from which the dead return.",
    author_id: 8,
    // genre_id: [4, 5],
  },
  {
    name: "Carrie",
    description:
      "Unpopular at school and subjected to her mother's religious fanaticism at home, Carrie White does not have it easy. But while she may be picked on by her classmates, she has a gift she's kept secret since she was a little girl: she can move things with her mind. Doors lock. Candles fall. Her ability has been both a power and a problem.",
    author_id: 8,
    // genre_id: [4, 5],
  },
  {
    name: "Nineteen Eighty-Four",
    description:
      "Hidden away in the Record Department of the sprawling Ministry of Truth, Winston Smith skilfully rewrites the past to suit the needs of the Party. Yet he inwardly rebels against the totalitarian world he lives in, which demands absolute obedience and controls him through the all-seeing telescreens and the watchful eye of Big Brother, symbolic head of the Party. In his longing for truth and liberty, Smith begins a secret love affair with a fellow-worker Julia, but soon discovers the true price of freedom is betrayal.",
    author_id: 9,
    // genre_id: [5, 13, 14],
  },
  {
    name: "One Piece", //has one
    description:
      'As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer "Red-Haired" Shanks. But his life changed when Luffy accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, still vowing to become the king of the pirates, Luffy sets out on his adventure...one guy alone in a rowboat, in search of the legendary One Piece.',
    author_id: 10,
    // genre_id: [2, 5, 8],
  },
  {
    name: "Death Note", //has one
    description:
      "Light tests the boundaries of the Death Note's powers as L and the police begin to close in. Luckily Light's father is the head of the Japanese National Police Agency and leaves vital information about the case lying around the house. With access to his father's files, Light can keep one step ahead of the authorities. But who is the strange man following him, and how can Light guard against enemies whose names he doesn't know?",
    author_id: 11,
    // genre_id: [3, 5, 8, 15],
  },
  //popular
  {
    name: "The Whisper",
    description:
      "On Harlow Street, the well-to-do neighborhood couples and their children gather for a barbecue as the summer winds down. Everything is fabulous until Whitney, the picture-perfect hostess, explodes in fury because her son disobeys her. Everyone at the party hears her exquisite veneer crack—loud and clear. Before long, that same young boy falls from his bedside window in the middle of the night. And then his mother can only sit by her son’s hospital bed, where his life hangs in the balance.",
    author_id: 12,
  },
  {
    name: "Meet ME at the Lake",
    description:
      "Fern Brookbanks has wasted far too much of her adult life thinking about Will Baxter. She spent just twenty-four hours in her early twenties with the aggravatingly attractive, idealistic artist, a chance encounter that spiraled into a daylong adventure in Toronto. The timing was wrong, but their connection was undeniable: they shared every secret, every dream, and made a pact to meet one year later. Fern showed up. Will did not",
    author_id: 13,
  },
  {
    name: "Pageboy",
    description:
      "“Can I kiss you?” It was two months before the world premiere of Juno, and Elliot Page was in his first ever queer bar. The hot summer air hung heavy around him as he looked at her. And then it happened. In front of everyone. A previously unfathomable experience. Here he was on the precipice of discovering himself as a queer person, as a trans person. Getting closer to his desires, his dreams, himself, without the repression he carried for so long. But for Elliot, two steps forward had always come with one step back.",
    author_id: 14,
  },
  {
    name: "The Covenant of Water",
    description:
      "Spanning the years 1900 to 1977, The Covenant of Water is set in Kerala, on South India’s Malabar Coast, and follows three generations of a family that suffers a peculiar affliction: in every generation, at least one person dies by drowning—and in Kerala, water is everywhere. At the turn of the century, a twelve-year-old girl from Kerala’s long-existing Christian community, grieving the death of her father, is sent by boat to her wedding, where she will meet her forty-year-old husband for the first time. From this unforgettable new beginning, the young girl—and future matriarch, known as Big Ammachi—will witness unthinkable changes over the span of her extraordinary life, full of joy and triumph as well as hardship and loss, her faith and love the only constants",
    author_id: 15,
  },
  {
    name: "The Five-Star Weekend",
    description:
      "Hollis Shaw, creator of the popular food blog, Hungry with Hollis, is shocked when her heart surgeon husband, Matthew, is killed in a one-car accident on a snowy February morning.  In Hollis's search for comfort, she hears about something called the Five Star weekend – a woman invites her best friend from each stage of her life – her teenage years, her twenties, her thirties and mid-life. Hollis decides she will host such a weekend on Nantucket—but her weekend won't be the Hallmark movie that one might expect...",
    author_id: 16,
  },
  {
    name: "Happy Place",
    description:
      "Harriet and Wyn have been the perfect couple since they met in college—they go together like salt and pepper, honey and tea, lobster and rolls. Except, now—for reasons they’re still not discussing—they don’t. They broke up five months ago. And still haven’t told their best friends. Which is how they find themselves sharing a bedroom at the Maine cottage that has been their friend group’s yearly getaway for the last decade. Their annual respite from the world, where for one vibrant, blissful week they leave behind their daily lives; have copious amounts of cheese, wine, and seafood; and soak up the salty coastal air with the people who understand them most",
    author_id: 17,
  },
  {
    name: "The Lie Maker",
    description:
      "Your dad’s not a good person. Your dad killed people, son. These are some of the last words Jack Givins’ father spoke to him before he was whisked away by witness protection, leaving Jack and his mother to pick up the shattered pieces of their lives as best they could. Years later, Jack is a grown man with problems of his own. He’s a talented but struggling author, barely scraping by on the royalties from his moderately successful first book. So when the U.S. Marshals approach him with a lucrative opportunity, he’s in no position to turn them down. They’re recruiting writers like Jack to create false histories for people in witness protection—people like Jack’s father.",
    author_id: 18,
  },
  {
    name: "Yellowface",
    description:
      "Authors June Hayward and Athena Liu were supposed to be twin rising stars. But Athena’s a literary darling. June Hayward is literally nobody. Who wants stories about basic white girls, June thinks. So when June witnesses Athena’s death in a freak accident, she acts on impulse: she steals Athena’s just-finished masterpiece, an experimental novel about the unsung contributions of Chinese labourers during World War I. So what if June edits Athena’s novel and sends it to her agent as her own work? So what if she lets her new publisher rebrand her as Juniper Song—complete with an ambiguously ethnic author photo? Doesn’t this piece of history deserve to be told, whoever the teller? That’s what June claims, and the New York Times bestseller list seems to agree. But June can’t get away from Athena’s shadow, and emerging evidence threatens to bring June’s (stolen) success down around her. As June races to protect her secret, she discovers exactly how far she will go to keep what she thinks she deserves.",
    author_id: 19,
  },
  {
    name: "Love Theoretically",
    description:
      "The many lives of theoretical physicist Elsie Hannaway have finally caught up with her. By day, she’s an adjunct professor, toiling away at grading labs and teaching thermodynamics in the hopes of landing tenure. By other day, Elsie makes up for her non-existent paycheck by offering her services as a fake girlfriend, tapping into her expertly honed people-pleasing skills to embody whichever version of herself the client needs.",
    author_id: 20,
  },
  {
    name: "Truth Telling",
    description:
      "With authority and insight, Truth Telling examines a wide range of Indigenous issues framed by Michelle Good’s personal experience and knowledge. From racism, broken treaties, and cultural pillaging, to the value of Indigenous lives and the importance of Indigenous literature, this collection reveals facts about Indigenous life in Canada that are both devastating and enlightening. Truth Telling also demonstrates the myths underlying Canadian history and the human cost of colonialism, showing how it continues to underpin modern social institutions in Canada. Passionate and uncompromising, Michelle Good affirms that meaningful and substantive reconciliation hinges on recognition of Indigenous self-determination, the return of lands, and a just redistribution of the wealth that has been taken from those lands without regard for Indigenous peoples. Truth Telling is essential reading for those looking to acknowledge the past and understand the way forward.",
    author_id: 21,
  },
  {
    name: "The Wager",
    description:
      "On January 28, 1742, a ramshackle vessel of patched-together wood and cloth washed up on the coast of Brazil. Inside were thirty emaciated men, barely alive, and they had an extraordinary tale to tell. They were survivors of His Majesty’s Ship the Wager, a British vessel that had left England in 1740 on a secret mission during an imperial war with Spain. While the Wager had been chasing a Spanish treasure-filled galleon known as “the prize of all the oceans,” it had wrecked on a desolate island off the coast of Patagonia. The men, after being marooned for months and facing starvation, built the flimsy craft and sailed for more than a hundred days, traversing nearly 3,000 miles of storm-wracked seas. They were greeted as heroes.",
    author_id: 22,
  },
  {
    name: "Unfortunatly Yours",
    description:
      "After losing her job and her fiancé in one fell swoop, Natalie Vos returned home to lick her wounds. A few months later, she’s sufficiently drowned her sorrows in cabernet and she’s ready to get back on her feet. She just needs her trust fund to finance her new business venture. Unfortunately, the terms require she marry before she can have the money. And well, dumped, remember?",
    author_id: 23,
  },
  {
    name: "Closer by Sea",
    description:
      "In 1991, on a small, isolated island off the coast of Newfoundland, twelve-year-old Pierce Jacobs struggles to come to terms with the death of his father. It’s been three years since his dad, a fisherman, disappeared in the cold, unforgiving Atlantic, his body never recovered. Pierce is determined to save enough money to fix his father’s old boat and take it out to sea. But life on the island is quiet and hard. The local fishing industry is on the brink of collapse, threatening to take an ages-old way of life with it. The community is hit even harder when a young teen named Anna Tessier goes missing.",
    author_id: 24,
  },
  {
    name: "Demon Copperhead",
    description:
      "Set in the mountains of southern Appalachia, Demon Copperhead is the story of a boy born to a teenaged single mother in a single-wide trailer, with no assets beyond his dead father’s good looks and copper-colored hair, a caustic wit, and a fierce talent for survival. Relayed in his own unsparing voice, Demon braves the modern perils of foster care, child labor, derelict schools, athletic success, addiction, disastrous loves, and crushing losses. Through all of it, he reckons with his own invisibility in a popular culture where even the superheroes have abandoned rural people in favor of cities.Many generations ago, Charles Dickens wrote David Copperfield from his experience as a survivor of institutional poverty and its damages to children in his society. Those problems have yet to be solved in ours. Dickens is not a prerequisite for readers of this novel, but he provided its inspiration. In transposing a Victorian epic novel to the contemporary American South, Barbara Kingsolver enlists Dickens’ anger and compassion, and above all, his faith in the transformative powers of a good story. Demon Copperhead speaks for a new generation of lost boys, and all those born into beautiful, cursed places they can’t imagine leaving behind.",
    author_id: 25,
  },
  {
    name: "Homecoming",
    description:
      "At the end of a scorching hot day, beside a creek in the grounds of a grand country house, a local man makes a terrible discovery. Police are called, and the small town of Tambilla becomes embroiled in one of the most baffling murder investigations in the history of South Australia.",
    author_id: 26,
    //popular
  },
  {
    name: "A Promised Land",
    description:
      "In the stirring, highly anticipated first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey from young man searching for his identity to leader of the free world, describing in strikingly personal detail both his political education and the landmark moments of the first term of his historic presidency—a time of dramatic transformation and turmoil.",
    author_id: 52,
    // genre_id: [6, 7],
  },
  //manga
  {
    name: "Vinland Saga",
    description:
      "Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father a homage. A young man named Thorfinn finds himself in a quest for revenge against his father's killer.",
    author_id: 27,
  },
  {
    name: "Attack On Titan", //does this work
    description:
      "It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown.",
    author_id: 28,
  },
  {
    name: "Bleach",
    description:
      "The story follows the adventures of Ichigo Kurosaki after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki.",
    author_id: 29,
  },
  {
    name: "Dragonball Z",
    description:
      "Dragon Ball Z follows the adventures of the adult Goku who, along with his companions, defends the earth against an assortment of villains ranging from intergalactic space fighters and conquerors, unnaturally powerful androids and near indestructible magical creatures.",
    author_id: 30,
  },
  {
    name: "Naruto",
    description:
      "It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
    author_id: 31,
  },
  {
    name: "Your Lie in April",
    description:
      "an anime series about a young musician who finds romance. Former piano prodigy Kousei is living a somewhat uninspired life, until he meets Kaori, a free-spirited multi-instrumentalist. Softball-loving Tsubaki and soccer star Watari are Kousei's best friends who support him through thick and thin.",
    author_id: 32,
  },
  {
    name: "Golden Time",
    description:
      "Following an accident that left him with severe memory loss, Banri Tada is determined to start a new life by leaving his hometown to study at a Tokyo law school. He immediately struggles to adjust to city life and is late for his university orientation.",
    author_id: 33,
  },
  {
    name: "Mob Psycho 100",
    description:
      "the story about a young middle schooler, Shigeo Kageyama, nicknamed Mob living in Seasoning City. Ever since he was young, he has had astounding psychic powers. However, this esper power is unable to grant him the one thing he wishes for the most: to be friends with the girl he likes in his class.",
    author_id: 34,
  },
  {
    name: "One Punch Man",
    description:
      "Saitama is a self-proclaimed superhero who can defeat every opponent that he encounters with a single punch. He searches for a worthy opponent after growing bored by a lack of challenge in a world filled with superheroes and villains. While fighting evil, he meets his student, Genos",
    author_id: 34,
  },
  {
    name: "Black Clover",
    description:
      "The series focuses on Asta, a young orphan who is left to be raised in an orphanage alongside his fellow orphan, Yuno. While everyone is born with the ability to utilize mana in the form of magical power, Asta, with no magic instead focuses on physical strength.",
    author_id: 35,
  },
  {
    name: "My Hero academia",
    description:
      "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero. A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.",
    author_id: 36,
  },
  {
    name: "Demon Slayer",
    description:
      "It is a Japanese manga series written and illustrated by Koyoharu Gotōge, and it is about Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.",
    author_id: 37,
  },
  {
    name: "Jujutsu Kaisen",
    description:
      "Jujutsu Kaisen is the story of Yuji Itadori, an easygoing high school student who joins the occult club at school. When they accidentally summon grotesque creatures by messing with a cursed object, Itadori fights to save his friends' lives.",
    author_id: 38,
  },
  {
    name: "Tomie: Complete Deluxe Edition",
    description:
      "Tomie Kawakami is a femme fatale with long black hair and a beauty mark just under her left eye. She can seduce nearly any man, and drive them to murder as well, even though the victim is often Tomie herself. While one lover seeks to keep her for himself, another grows terrified of the immortal succubus. But soon they realize that no matter how many times they kill her, the world will never be free of Tomie. -- VIZ Media",
    author_id: 54,
    //genre_id: [4, 5, 8, 15],
  },
  {
    name: "Uzumaki",
    description:
      "Kurouzu-cho, a small fogbound town on the coast of Japan, is cursed. According to Shuichi Saito, the withdrawn boyfriend of teenager Kirie Goshima, their town is haunted not by a person or being but a pattern: UZUMAKI, the spiral—the hypnotic secret shape of the world. The bizarre masterpiece horror manga is now available all in a single volume. Fall into a whirlpool of terror! -- VIZ Media",
    author_id: 54,
    //genre_id: [4, 5, 8, 15],
  },
  //manga end
  //Classics Start
  {
    name: "Pride and Prejudice",
    description:
      "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.",
    author_id: 39,
  },
  {
    name: "The Great Gatsby",
    description:
      "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    author_id: 40,
  },
  {
    name: "One Hundred Years of Solitutde",
    description:
      "One Hundred Years of Solitude is the history of the isolated town of Macondo and of the family who founds it, the Buendías. For years, the town has no contact with the outside world, except for gypsies who occasionally visit, peddling technologies like ice and telescopes.",
    author_id: 41,
  },
  {
    name: "In Cold Blood",
    description:
      "Book Summary. In Cold Blood tells the true story of the murder of the Clutter family in Holcomb, Kansas, in 1959. The book is written as if it were a novel, complete with dialog, and is what Truman Capote referred to as New Journalism — the nonfiction novel.",
    author_id: 42,
  },
  {
    name: "The Outsiders",
    description:
      "The Outsiders (1967) is a well-known young adult novel by American writer S.E. Hinton. It tells the story of 14-year-old Ponyboy Curtis and his two older brothers, Soda and Darry. The boys are orphans and struggle to stick together in their lower-class neighborhood, known as the East Side.",
    author_id: 43,
  },
  {
    name: "Brave New World",
    description:
      "The novel examines a futuristic society, called the World State, that revolves around science and efficiency. In this society, emotions and individuality are conditioned out of children at a young age, and there are no lasting relationships because “every one belongs to every one else” (a common World State dictum)",
    author_id: 44,
  },
  {
    name: "I Capture The Castle",
    description:
      "Adapted to a feature film in 2003, I Capture the Castle tells the story of seventeen-year-old Cassandra and her family, who live in not-so-genteel poverty in a ramshackle old English castle. Here she strives, over six turbulent months, to hone her writing skills.",
    author_id: 45,
  },
  {
    name: "Jane eyre",
    description:
      "The novel follows the story of Jane, a seemingly plain and simple girl as she battles through life's struggles. Jane has many obstacles in her life - her cruel and abusive Aunt Reed, the grim conditions at Lowood school, her love for Rochester and Rochester's marriage to Bertha",
    author_id: 46,
  },
  {
    name: "Crime and Punishment",
    description:
      "Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat.",
    author_id: 47,
  },
  {
    name: "The Secret History",
    description:
      "The Secret History is an inverted detective story narrated by one of the six students, Richard Papen, who reflects years later upon the situation that led to the murder of their friend Edmund Bunny Corcoran – wherein the events leading up to the murder are revealed sequentially.",
    author_id: 48,
  },
  {
    name: "The call of the Wild",
    description:
      "Buck, a powerful dog, half St. Bernard and half sheepdog, lives on Judge Miller's estate in California's Santa Clara Valley. He leads a comfortable life there, but it comes to an end when men discover gold in the Klondike region of Canada and a great demand arises for strong dogs to pull sleds.",
    author_id: 49,
  },
  {
    name: "The Chrysalids",
    description:
      "The Chrysalids is set in the future after a devastating global nuclear war. David, the young hero of the novel, lives in a tight-knit community of religious and genetic fundamentalists, always on the alert for any deviation from the norm of God's creation",
    author_id: 50,
  },
  {
    name: "Persuasion",
    description:
      "Persuasion tells the story of a second chance, the reawakening of love between Anne Elliot and Captain Frederick Wentworth, whom eight years earlier she had been persuaded not to marry. Wentworth returns from the Napoleonic Wars with prize money and the social acceptability of naval rank.",
    author_id: 39,
  },
  {
    name: "Moby Dick",
    description:
      "Ishmael describes Moby Dick as having two prominent white areas around 'a peculiar snow-white wrinkled forehead, and a high, pyramidical white hump', the rest of his body being of stripes and patches between white and gray.",
    author_id: 51,
  },
  {
    name: "Jurassic Park",
    description:
      "A wealthy man's experiment has turned Isla Nubar into a home for dinosaurs.",
    author_id: 53,
    //genre_id: [5, 16],
  },
  {
    name: "The Lost World",
    description:
      "Hidden somewhere in South America, a world full of adventure awaits, but only the extravagant Professor Challenger believes in its existence. When he joins a reporter in search of adventure, a brave nobleman and a colleague ready to prove him wrong, Challenger will, at last, have the opportunity to discover the lost world.",
    author_id: 53,
    //genre_id: [5, 16],
  },
];

// const seedBooks = () => Books.bulkCreate(bookData);

// module.exports = seedBooks;

module.exports = bookData;
