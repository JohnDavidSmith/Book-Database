const { Books } = require("../models");

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
    // genre_id: [1, 2, 5],
  },
  {
    name: "The Return of the King",
    description:
      "The Return of the King is the third part of J.R.R. Tolkien's epic adventure, The Lord of the Rings. The Companions of the Ring have become involved in separate adventures as the quest continues.",
    author_id: 1,
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
    name: "One Piece Vol. 1",
    description:
      'As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer "Red-Haired" Shanks. But his life changed when Luffy accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, still vowing to become the king of the pirates, Luffy sets out on his adventure...one guy alone in a rowboat, in search of the legendary One Piece.',
    author_id: 10,
    // genre_id: [2, 5, 8],
  },
  {
    name: "One Piece Vol. 2",
    description:
      "As a kid, Monkey D. Luffy vowed to become King of the Pirates and find the legendary treasure called the One Piece. The enchanted Gum-Gum Fruit has given Luffy the power to stretch like rubber--and his new crewmate, the infamous pirate hunter Roronoa Zolo, strikes fear into the hearts of other buccaneers! But what chance does one rubber guy stand against Nami, a thief so tough she specializes in robbing pirates...or Captain Buggy, a fiendish pirate lord whose weird, clownish appearance conceals even weirder powers?",
    author_id: 10,
    // genre_id: [2, 5, 8],
  },
  {
    name: "Death Note",
    description:
      "Light tests the boundaries of the Death Note's powers as L and the police begin to close in. Luckily Light's father is the head of the Japanese National Police Agency and leaves vital information about the case lying around the house. With access to his father's files, Light can keep one step ahead of the authorities. But who is the strange man following him, and how can Light guard against enemies whose names he doesn't know?",
    author_id: 11,
    // genre_id: [3, 5, 8, 15],
  },
];

// const seedBooks = () => Books.bulkCreate(bookData);

// module.exports = seedBooks;

module.exports = bookData;
