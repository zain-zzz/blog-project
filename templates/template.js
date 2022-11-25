
//   https://en.wikipedia.org/wiki/List_of_conspiracy_theories

const { beforeFindAfterExpandIncludeAll } = require("../models/author.model")

author1 = "bob"
author2 = "steve"
author3 = "joe"

infoToSeed = [
    {
    author: author1,
    content: `Also known as SLAP (Secret Large-scale Atmospheric Program), this theory alleges that water condensation trails ("contrails") from aircraft consist of chemical or biological agents, or contain a supposedly toxic mix of aluminum, strontium and barium,[13] under secret government policies. An estimated 17% of people globally believe the theory to be true or partly true. In 2016, the Carnegie Institution for Science published the first-ever peer-reviewed study of the chemtrail theory; 76 out of 77 participating atmospheric chemists and geochemists stated that they had seen no evidence to support the chemtrail theory, or stated that chemtrail theorists rely on poor sampling.[14][15]`,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Contrail.fourengined.arp.jpg",
    title: "Chemtrails",
    upvotes: 20
},
{
    author: author2,
    content: `In modern times, multiple conspiracy theories concerning the assassination of John F. Kennedy in 1963 have emerged.[26] Vincent Bugliosi estimated that over 1,000 books had been written about the Kennedy assassination,[27] at least ninety percent of which are works supporting the view that there was a conspiracy.[27] As a result of this, the Kennedy assassination has been described as "the mother of all conspiracies".[28][29] The countless individuals and organizations that have been accused of involvement in the Kennedy assassination include the CIA, the Mafia, sitting Vice President Lyndon B. Johnson, Cuban Prime Minister Fidel Castro, the KGB, or even some combination thereof.[30][27] It is also frequently asserted that the United States federal government intentionally covered up crucial information in the aftermath of the assassination to prevent the conspiracy from being discovered.[30]`,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/JFK_limousine.png/1280px-JFK_limousine.png",
    title: "JFK",
    upvotes: 12
},
{
    author: author1,
    content: `A theory claims that The Coca-Cola Company intentionally changed to an inferior formula with New Coke, with the intent either of driving up demand for the original product or permitting the reintroduction of the original with a new formula using cheaper ingredients.[23] Coca-Cola president Donald Keough rebutted this charge: "The truth is, we're not that dumb, and we're not that smart."[24]`,
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/New_Coke_can.jpg",
    title: "Coca-Cola",
    upvotes: 25
},
{
    author: author2,
    content: `Water fluoridation is the controlled addition of fluoride to a public water supply to reduce tooth decay.[272] Although many dental-health organizations support such fluoridation, the practice is opposed by conspiracy theorists.[273] Allegations may include claims that it has been a way to dispose of industrial waste,[274][275] or that it exists to obscure a failure to provide dental care to the poor.[273] A further theory promoted by the John Birch Society in the 1960s described fluoridation as a communist plot to weaken the American population.[276]`,
    img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg",
    title: "Water",
    upvotes: 87
},
{
    author: author3,
    content: `A global warming conspiracy theory typically alleges that the science behind global warming has been invented or distorted for ideological or financial reasons.[15] Many have promoted such theories, including former US President Donald Trump,[306][307] US Senator James Inhofe,[308] British journalist Christopher Booker,[308] and Viscount Christopher Monckton.[309]`,
    img: "https://www.wwf.org.au/Images/UserUploadedImages/416/img-dried-up-farmer-watering-hole-victoria-1000x600.jpg",
    title: "Global Warming",
    upvotes: 4
},
]

module.exports = infoToSeed