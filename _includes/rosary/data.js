// Mystery day mapping (0 = Sunday, 1 = Monday, etc.)
const MYSTERY_DAYS = {
    0: 'glorious',    // Sunday
    1: 'joyful',      // Monday
    2: 'sorrowful',   // Tuesday
    3: 'glorious',    // Wednesday
    4: 'luminous',    // Thursday
    5: 'sorrowful',   // Friday
    6: 'joyful'       // Saturday
};


const MYSTERIES = {
    joyful: {
        name: 'Joyful Mysteries',
        jpiiSummary: 'The first "chapter" is constituted by the joyful mysteries. These are marked by the joy radiating from the event of the Incarnation. This is clear from the very first mystery, the Annunciation, where Gabriel\'s greeting to the Virgin of Nazareth is linked to an invitation to messianic joy: "Rejoice, Mary". The whole of salvation history, in some sense the entire history of the world, has led up to this greeting. If it is the Father\'s plan to unite all things in Christ (cf. Eph 1:10), then the whole of the universe is in some way touched by the divine favour with which the Father looks upon Mary and makes her the Mother of his Son. The whole of humanity, in turn, is embraced by the fiat with which she readily agrees to the will of God.\n\nMary\'s visit to Elizabeth thus became a visit from God to his people. The joy of the Visitation is the joy of the messianic beginning, the joy of salvation beginning to take effect.\n\nTo become a child in relation to God is the condition for entering the kingdom. For this reason Mary, the Mother of God, is also the Mother of all who believe in her Son and follow him.\n\nTo meditate upon the "joyful" mysteries, then, is to enter into the ultimate causes and the deepest meaning of Christian joy. It is to focus on the realism of the mystery of the Incarnation and on the obscure foreshadowing of the mystery of the saving Passion.',
        mysteries: [
            {
                name: 'The Annunciation',
                johnPaulIIReflection: 'The "joyful mysteries", are marked by the joy radiating from the event of the Incarnation. This is clear from the very first mystery, the Annunciation, where Gabriel\'s greeting to the Virgin of Nazareth is linked to an invitation to messianic joy: "Rejoice, Mary". The whole of salvation history, in some sense the entire history of the world, has led up to this greeting.',
                catechismQuote: {
                    text: 'The Word became flesh to make us "partakers of the divine nature".',
                    reference: 'CCC 460',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1G.HTM'
                },
                scriptures: [
                    { quote: 'In the sixth month the angel Gabriel was sent by God to a town in Galilee called Nazareth, to a virgin engaged to a man whose name was Joseph, of the house of David. The virgin\'s name was Mary.', reference: 'Luke 1:26-27 (NRSV)' },
                    { quote: 'And he came to her and said, "Greetings, favored one! The Lord is with you." But she was much perplexed by his words and pondered what sort of greeting this might be.', reference: 'Luke 1:28-29 (NRSV)' },
                    { quote: 'The angel said to her, "Do not be afraid, Mary, for you have found favor with God. And now, you will conceive in your womb and bear a son, and you will name him Jesus. He will be great, and will be called the Son of the Most High, and the Lord God will give to him the throne of his ancestor David. He will reign over the house of Jacob forever, and of his kingdom there will be no end."', reference: 'Luke 1:30-33 (NRSV)' },
                    { quote: 'Then Bathsheba went to King Solomon, to speak to him on behalf of Adonijah. And the king rose to meet her, and bowed down to her; then he sat on his throne, and had a throne brought for the king\'s mother, and she sat on his right.', reference: '1 Kings 2:19 (NRSV)' },
                    { quote: 'She said, "I have one small request to make of you; do not refuse me." And the king said to her, "Make your request, my mother; for I will not refuse you."', reference: '1 Kings 2:20 (NRSV)' },
                    { quote: 'She adds luster to life; whoever associates with her will be honored, and the Lord loves those she serves.', reference: 'Wisdom 8:10 (NRSV)' },
                    { quote: 'For wisdom is a treasure that will not fail, and those who use it obtain friendship with God, commended for the gifts that come from her discipline.', reference: 'Wisdom 7:14 (NRSV)' },
                    { quote: 'She opens her hand to the poor, and reaches out her hands to the needy.', reference: 'Proverbs 31:20 (NRSV)' },
                    { quote: 'She opens her mouth with wisdom, and the teaching of kindness is on her tongue.', reference: 'Proverbs 31:26 (NRSV)' },
                    { quote: 'A great portent appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.', reference: 'Revelation 12:1 (NRSV)' }
                ]
            },
            {
                name: 'The Visitation',
                johnPaulIIReflection: 'Mary\'s visit to Elizabeth thus became a visit from God to his people. The joy of the Visitation is the joy of the messianic beginning, the joy of salvation beginning to take effect.',
                catechismQuote: {
                    text: 'Mary\'s visitation to Elizabeth thus became a visit from God to his people.',
                    reference: 'CCC 717',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'In those days Mary set out and went with haste to a Judean town in the hill country, where she entered the house of Zechariah and greeted Elizabeth.', reference: 'Luke 1:39-40 (NRSV)' },
                    { quote: 'When Elizabeth heard Mary\'s greeting, the child leaped in her womb. And Elizabeth was filled with the Holy Spirit and exclaimed with a loud cry, "Blessed are you among women, and blessed is the fruit of your womb."', reference: 'Luke 1:41-42 (NRSV)' },
                    { quote: 'And why has this happened to me, that the mother of my Lord comes to me? For as soon as I heard the sound of your greeting, the child in my womb leaped for joy.', reference: 'Luke 1:43-44 (NRSV)' },
                    { quote: 'And blessed is she who believed that there would be a fulfillment of what was spoken to her by the Lord.', reference: 'Luke 1:45 (NRSV)' },
                    { quote: 'And Mary said, "My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has looked with favor on the lowliness of his servant. Surely, from now on all generations will call me blessed."', reference: 'Luke 1:46-48 (NRSV)' },
                    { quote: '"For the Mighty One has done great things for me, and holy is his name. His mercy is for those who fear him from generation to generation."', reference: 'Luke 1:49-50 (NRSV)' },
                    { quote: '"He has shown strength with his arm; he has scattered the proud in the thoughts of their hearts. He has brought down the powerful from their thrones, and lifted up the lowly."', reference: 'Luke 1:51-52 (NRSV)' },
                    { quote: '"He has filled the hungry with good things, and sent the rich away empty. He has helped his servant Israel, in remembrance of his mercy."', reference: 'Luke 1:53-54 (NRSV)' },
                    { quote: '"According to the promise he made to our ancestors, to Abraham and to his descendants forever."', reference: 'Luke 1:55 (NRSV)' },
                    { quote: 'And Mary remained with her about three months and then returned to her home.', reference: 'Luke 1:56 (NRSV)' }
                ]
            },
            {
                name: 'The Nativity',
                johnPaulIIReflection: 'To become a child in relation to God is the condition for entering the kingdom. For this reason Mary, the Mother of God, is also the Mother of all who believe in her Son and follow him.',
                catechismQuote: {
                    text: 'To become a child in relation to God is the condition for entering the kingdom.',
                    reference: 'CCC 526',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'In those days a decree went out from Emperor Augustus that all the world should be registered. This was the first registration and was taken while Quirinius was governor of Syria.', reference: 'Luke 2:1-2 (NRSV)' },
                    { quote: 'All went to their own towns to be registered. Joseph also went from the town of Nazareth in Galilee to Judea, to the city of David called Bethlehem, because he was descended from the house and family of David.', reference: 'Luke 2:3-4 (NRSV)' },
                    { quote: 'He went to be registered with Mary, to whom he was engaged and who was expecting a child.', reference: 'Luke 2:5 (NRSV)' },
                    { quote: 'While they were there, the time came for her to deliver her child. And she gave birth to her firstborn son and wrapped him in bands of cloth, and laid him in a manger, because there was no place for them in the inn.', reference: 'Luke 2:6-7 (NRSV)' },
                    { quote: 'In that region there were shepherds living in the fields, keeping watch over their flock by night. Then an angel of the Lord stood before them, and the glory of the Lord shone around them, and they were terrified.', reference: 'Luke 2:8-9 (NRSV)' },
                    { quote: 'But the angel said to them, "Do not be afraid; for see—I am bringing you good news of great joy for all the people: to you is born this day in the city of David a Savior, who is the Messiah, the Lord."', reference: 'Luke 2:10-11 (NRSV)' },
                    { quote: '"This will be a sign for you: you will find a child wrapped in bands of cloth and lying in a manger."', reference: 'Luke 2:12 (NRSV)' },
                    { quote: 'And suddenly there was with the angel a multitude of the heavenly host, praising God and saying, "Glory to God in the highest heaven, and on earth peace among those whom he favors!"', reference: 'Luke 2:13-14 (NRSV)' },
                    { quote: 'When the angels had left them and gone into heaven, the shepherds said to one another, "Let us go now to Bethlehem and see this thing that has taken place, which the Lord has made known to us."', reference: 'Luke 2:15 (NRSV)' },
                    { quote: 'So they went with haste and found Mary and Joseph, and the child lying in the manger. When they saw this, they made known what had been told them about this child.', reference: 'Luke 2:16-17 (NRSV)' }
                ]
            },
            {
                name: 'The Presentation',
                johnPaulIIReflection: 'Jesus is the light of the nations, the "glory of Israel", but also "a sign that is spoken against". The sword of sorrow predicted for Mary announces Christ\'s perfect and unique oblation on the Cross.',
                catechismQuote: {
                    text: 'Jesus is the light of the nations, the "glory of Israel", but also "a sign that is spoken against".',
                    reference: 'CCC 529',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'When the time came for their purification according to the law of Moses, they brought him up to Jerusalem to present him to the Lord (as it is written in the law of the Lord, "Every firstborn male shall be designated as holy to the Lord").', reference: 'Luke 2:22-23 (NRSV)' },
                    { quote: 'And they offered a sacrifice according to what is stated in the law of the Lord, "a pair of turtledoves or two young pigeons."', reference: 'Luke 2:24 (NRSV)' },
                    { quote: 'Now there was a man in Jerusalem whose name was Simeon; this man was righteous and devout, looking forward to the consolation of Israel, and the Holy Spirit rested on him.', reference: 'Luke 2:25 (NRSV)' },
                    { quote: 'It had been revealed to him by the Holy Spirit that he would not see death before he had seen the Lord\'s Messiah. Guided by the Spirit, Simeon came into the temple.', reference: 'Luke 2:26-27 (NRSV)' },
                    { quote: 'And when the parents brought in the child Jesus, to do for him what was customary under the law, Simeon took him in his arms and praised God, saying, "Master, now you are dismissing your servant in peace, according to your word."', reference: 'Luke 2:27-29 (NRSV)' },
                    { quote: '"For my eyes have seen your salvation, which you have prepared in the presence of all peoples, a light for revelation to the Gentiles and for glory to your people Israel."', reference: 'Luke 2:30-32 (NRSV)' },
                    { quote: 'And the child\'s father and mother were amazed at what was being said about him. Then Simeon blessed them and said to his mother Mary, "This child is destined for the falling and the rising of many in Israel, and to be a sign that will be opposed."', reference: 'Luke 2:33-34 (NRSV)' },
                    { quote: '"So that the inner thoughts of many will be revealed—and a sword will pierce your own soul too."', reference: 'Luke 2:35 (NRSV)' },
                    { quote: 'There was also a prophet, Anna the daughter of Phanuel, of the tribe of Asher. She was of a great age, having lived with her husband seven years after her marriage, then as a widow to the age of eighty-four. She never left the temple but worshiped there with fasting and prayer night and day.', reference: 'Luke 2:36-37 (NRSV)' },
                    { quote: 'At that moment she came, and began to praise God and to speak about the child to all who were looking for the redemption of Jerusalem.', reference: 'Luke 2:38 (NRSV)' }
                ]
            },
            {
                name: 'The Finding in the Temple',
                johnPaulIIReflection: 'Jesus\' obedience to his mother and legal father fulfills the fourth commandment perfectly. It is the image of his filial obedience to the Father. The daily obedience of Jesus to Mary and Joseph both announces and anticipates the obedience of Holy Thursday.',
                catechismQuote: {
                    text: 'Jesus\' obedience to his mother and legal father fulfills the fourth commandment perfectly.',
                    reference: 'CCC 532',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'Now every year his parents went to Jerusalem for the festival of the Passover. And when he was twelve years old, they went up as usual for the festival.', reference: 'Luke 2:41-42 (NRSV)' },
                    { quote: 'When the festival was ended and they started to return, the boy Jesus stayed behind in Jerusalem, but his parents did not know it.', reference: 'Luke 2:43 (NRSV)' },
                    { quote: 'Assuming that he was in the group of travelers, they went a day\'s journey. Then they started to look for him among their relatives and friends.', reference: 'Luke 2:44 (NRSV)' },
                    { quote: 'When they did not find him, they returned to Jerusalem to search for him.', reference: 'Luke 2:45 (NRSV)' },
                    { quote: 'After three days they found him in the temple, sitting among the teachers, listening to them and asking them questions.', reference: 'Luke 2:46 (NRSV)' },
                    { quote: 'And all who heard him were amazed at his understanding and his answers.', reference: 'Luke 2:47 (NRSV)' },
                    { quote: 'When his parents saw him they were astonished; and his mother said to him, "Child, why have you treated us like this? Look, your father and I have been searching for you in great anxiety."', reference: 'Luke 2:48 (NRSV)' },
                    { quote: 'He said to them, "Why were you searching for me? Did you not know that I must be in my Father\'s house?"', reference: 'Luke 2:49 (NRSV)' },
                    { quote: 'But they did not understand what he said to them. Then he went down with them and came to Nazareth, and was obedient to them. His mother treasured all these things in her heart.', reference: 'Luke 2:50-51 (NRSV)' },
                    { quote: 'And Jesus increased in wisdom and in years, and in divine and human favor.', reference: 'Luke 2:52 (NRSV)' }
                ]
            }
        ],
        artUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Fra_Angelico_-_Annunciation.jpg/960px-Fra_Angelico_-_Annunciation.jpg',
        artUrls: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Fra_Angelico_-_Annunciation.jpg/960px-Fra_Angelico_-_Annunciation.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Visitation_%28Pontormo%29.jpg/960px-Visitation_%28Pontormo%29.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Giotto_-_Scenes_from_the_Life_of_Christ_-_7._Nativity.jpg/960px-Giotto_-_Scenes_from_the_Life_of_Christ_-_7._Nativity.jpg'
        ]
    },
    sorrowful: {
        name: 'Sorrowful Mysteries',
        jpiiSummary: 'The Gospels give great prominence to the sorrowful mysteries of Christ. From the beginning, Christian piety, especially during the Lenten devotion of the Way of the Cross, has focused on the individual moments of the Passion, realizing that here is found the culmination of the revelation of love and the source of our salvation. The Rosary selects some moments from the Passion, inviting the faithful to contemplate them in their hearts and to relive them. The meditation on these mysteries, centred on Christ\'s supreme act of love, will lead the faithful to grasp the abyss of evil which sin opens in man, and the immensity of the Lord\'s gift in redeeming him at the price of His Passion and Death.\n\nThe "sorrowful mysteries" help the believer to relive the death of Jesus, to stand at the foot of the Cross beside Mary, to enter with her into the depths of God\'s love for man and to experience all its life-giving power.',
        mysteries: [
            {
                name: 'The Agony in the Garden',
                johnPaulIIReflection: 'The sorrowful mysteries help the believer to relive the death of Jesus, to stand at the foot of the Cross beside Mary, to enter with her into the depths of God\'s love for man and to experience all its life-giving power.',
                catechismQuote: {
                    text: 'Jesus prays: "My Father, if it be possible, let this cup pass from me..."',
                    reference: 'CCC 612',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'Then Jesus went with them to a place called Gethsemane; and he said to his disciples, "Sit here while I go over there and pray."', reference: 'Matthew 26:36 (NRSV)' },
                    { quote: 'He took with him Peter and the two sons of Zebedee, and began to be grieved and agitated. Then he said to them, "I am deeply grieved, even to death; remain here, and stay awake with me."', reference: 'Matthew 26:37-38 (NRSV)' },
                    { quote: 'And going a little farther, he threw himself on the ground and prayed, "My Father, if it is possible, let this cup pass from me; yet not what I want but what you want."', reference: 'Matthew 26:39 (NRSV)' },
                    { quote: 'Then he came to the disciples and found them sleeping; and he said to Peter, "So, could you not stay awake with me one hour? Stay awake and pray that you may not come into the time of trial; the spirit indeed is willing, but the flesh is weak."', reference: 'Matthew 26:40-41 (NRSV)' },
                    { quote: 'Again he went away for the second time and prayed, "My Father, if this cannot pass unless I drink it, your will be done."', reference: 'Matthew 26:42 (NRSV)' },
                    { quote: 'Again he came and found them sleeping, for their eyes were heavy. So leaving them again, he went away and prayed for the third time, saying the same words.', reference: 'Matthew 26:43-44 (NRSV)' },
                    { quote: 'Then he came to the disciples and said to them, "Are you still sleeping and taking your rest? See, the hour is at hand, and the Son of Man is betrayed into the hands of sinners."', reference: 'Matthew 26:45 (NRSV)' },
                    { quote: 'Get up, let us be going. See, my betrayer is at hand.', reference: 'Matthew 26:46 (NRSV)' },
                    { quote: 'While he was still speaking, Judas, one of the twelve, arrived; with him was a large crowd with swords and clubs, from the chief priests and the elders of the people.', reference: 'Matthew 26:47 (NRSV)' },
                    { quote: 'Now the betrayer had given them a sign, saying, "The one I will kiss is the man; arrest him." At once he came up to Jesus and said, "Greetings, Rabbi!" and kissed him.', reference: 'Matthew 26:48-49 (NRSV)' }
                ]
            },
            {
                name: 'The Scourging at the Pillar',
                johnPaulIIReflection: 'The scourging at the pillar reminds us of the seriousness of sin and the need for conversion. Through this mystery, we contemplate Christ\'s suffering and the price of our redemption.',
                catechismQuote: {
                    text: 'Jesus\' sufferings took their historical, concrete form from the fact that he was "rejected by the elders and the chief priests and the scribes".',
                    reference: 'CCC 572',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'Now at the festival the governor was accustomed to release a prisoner for the crowd, anyone whom they wanted.', reference: 'Matthew 27:15 (NRSV)' },
                    { quote: 'At that time they had a notorious prisoner, called Jesus Barabbas. So after they had gathered, Pilate said to them, "Whom do you want me to release for you, Jesus Barabbas or Jesus who is called the Messiah?"', reference: 'Matthew 27:16-17 (NRSV)' },
                    { quote: 'For he realized that it was out of jealousy that they had handed him over.', reference: 'Matthew 27:18 (NRSV)' },
                    { quote: 'While he was sitting on the judgment seat, his wife sent word to him, "Have nothing to do with that innocent man, for today I have suffered a great deal because of a dream about him."', reference: 'Matthew 27:19 (NRSV)' },
                    { quote: 'Now the chief priests and the elders persuaded the crowds to ask for Barabbas and to have Jesus killed.', reference: 'Matthew 27:20 (NRSV)' },
                    { quote: 'The governor again said to them, "Which of the two do you want me to release for you?" And they said, "Barabbas."', reference: 'Matthew 27:21 (NRSV)' },
                    { quote: 'Pilate said to them, "Then what should I do with Jesus who is called the Messiah?" All of them said, "Let him be crucified!"', reference: 'Matthew 27:22 (NRSV)' },
                    { quote: 'Then he asked, "Why, what evil has he done?" But they shouted all the more, "Let him be crucified!"', reference: 'Matthew 27:23 (NRSV)' },
                    { quote: 'So when Pilate saw that he could do nothing, but rather that a riot was beginning, he took some water and washed his hands before the crowd, saying, "I am innocent of this man\'s blood; see to it yourselves."', reference: 'Matthew 27:24 (NRSV)' },
                    { quote: 'Then he released Barabbas for them; and after flogging Jesus, he handed him over to be crucified.', reference: 'Matthew 27:26 (NRSV)' }
                ]
            },
            {
                name: 'The Crowning with Thorns',
                johnPaulIIReflection: 'The crowning with thorns reveals the depth of Christ\'s humiliation. In this mystery, we see the mockery of human dignity and the profound love of Christ who accepts this suffering for our sake.',
                catechismQuote: {
                    text: 'Jesus accepted the title of Messiah, though with reserve because it was understood by some of his contemporaries in too human a sense.',
                    reference: 'CCC 439',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1H.HTM'
                },
                scriptures: [
                    { quote: 'Then the soldiers of the governor took Jesus into the governor\'s headquarters, and they gathered the whole cohort around him.', reference: 'Matthew 27:27 (NRSV)' },
                    { quote: 'They stripped him and put a scarlet robe on him, and after twisting some thorns into a crown, they put it on his head. They put a reed in his right hand and knelt before him and mocked him, saying, "Hail, King of the Jews!"', reference: 'Matthew 27:28-29 (NRSV)' },
                    { quote: 'They spat on him, and took the reed and struck him on the head.', reference: 'Matthew 27:30 (NRSV)' },
                    { quote: 'After mocking him, they stripped him of the robe and put his own clothes on him. Then they led him away to crucify him.', reference: 'Matthew 27:31 (NRSV)' },
                    { quote: 'As they went out, they came upon a man from Cyrene named Simon; they compelled this man to carry his cross.', reference: 'Matthew 27:32 (NRSV)' },
                    { quote: 'And when they came to a place called Golgotha (which means Place of a Skull), they offered him wine to drink, mixed with gall; but when he tasted it, he would not drink it.', reference: 'Matthew 27:33-34 (NRSV)' },
                    { quote: 'And when they had crucified him, they divided his clothes among themselves by casting lots; then they sat down there and kept watch over him.', reference: 'Matthew 27:35-36 (NRSV)' },
                    { quote: 'Over his head they put the charge against him, which read, "This is Jesus, the King of the Jews."', reference: 'Matthew 27:37 (NRSV)' },
                    { quote: 'Then two bandits were crucified with him, one on his right and one on his left.', reference: 'Matthew 27:38 (NRSV)' },
                    { quote: 'Those who passed by derided him, shaking their heads and saying, "You who would destroy the temple and build it in three days, save yourself! If you are the Son of God, come down from the cross."', reference: 'Matthew 27:39-40 (NRSV)' }
                ]
            },
            {
                name: 'The Carrying of the Cross',
                johnPaulIIReflection: 'The carrying of the cross expresses the meaning of discipleship. To carry the cross means to accept the will of God, to follow Christ even when the path is difficult, and to find in suffering a path to redemption.',
                catechismQuote: {
                    text: 'By accepting in his human will that the Father\'s will be done, he accepts his death as redemptive.',
                    reference: 'CCC 612',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'So they took Jesus; and carrying the cross by himself, he went out to what is called The Place of the Skull, which in Hebrew is called Golgotha.', reference: 'John 19:17 (NRSV)' },
                    { quote: 'As they led him away, they seized a man, Simon of Cyrene, who was coming from the country, and they laid the cross on him, and made him carry it behind Jesus.', reference: 'Luke 23:26 (NRSV)' },
                    { quote: 'A great number of the people followed him, and among them were women who were beating their breasts and wailing for him.', reference: 'Luke 23:27 (NRSV)' },
                    { quote: 'But Jesus turned to them and said, "Daughters of Jerusalem, do not weep for me, but weep for yourselves and for your children."', reference: 'Luke 23:28 (NRSV)' },
                    { quote: '"For the days are surely coming when they will say, \'Blessed are the barren, and the wombs that never bore, and the breasts that never nursed.\'"', reference: 'Luke 23:29 (NRSV)' },
                    { quote: '"Then they will begin to say to the mountains, \'Fall on us\'; and to the hills, \'Cover us.\'"', reference: 'Luke 23:30 (NRSV)' },
                    { quote: '"For if they do this when the wood is green, what will happen when it is dry?"', reference: 'Luke 23:31 (NRSV)' },
                    { quote: 'Two others also, who were criminals, were led away to be put to death with him.', reference: 'Luke 23:32 (NRSV)' },
                    { quote: 'When they came to the place that is called The Skull, they crucified Jesus there with the criminals, one on his right and one on his left.', reference: 'Luke 23:33 (NRSV)' },
                    { quote: 'Then Jesus said, "Father, forgive them; for they do not know what they are doing." And they cast lots to divide his clothing.', reference: 'Luke 23:34 (NRSV)' }
                ]
            },
            {
                name: 'The Crucifixion',
                johnPaulIIReflection: 'The crucifixion is the culmination of Christ\'s mission. At the foot of the Cross, Mary shares in the deepest way in the mystery of the Redemption. She becomes the Mother of all believers, accepting us as her children.',
                catechismQuote: {
                    text: 'Jesus consummates his sacrifice on the cross.',
                    reference: 'CCC 616',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'When they came to the place that is called The Skull, they crucified Jesus there with the criminals, one on his right and one on his left.', reference: 'Luke 23:33 (NRSV)' },
                    { quote: 'Then Jesus said, "Father, forgive them; for they do not know what they are doing." And they cast lots to divide his clothing.', reference: 'Luke 23:34 (NRSV)' },
                    { quote: 'The people stood by, watching; but the leaders scoffed at him, saying, "He saved others; let him save himself if he is the Messiah of God, his chosen one!"', reference: 'Luke 23:35 (NRSV)' },
                    { quote: 'The soldiers also mocked him, coming up and offering him sour wine, and saying, "If you are the King of the Jews, save yourself!"', reference: 'Luke 23:36-37 (NRSV)' },
                    { quote: 'One of the criminals who were hanged there kept deriding him and saying, "Are you not the Messiah? Save yourself and us!"', reference: 'Luke 23:39 (NRSV)' },
                    { quote: 'But the other rebuked him, saying, "Do you not fear God, since you are under the same sentence of condemnation? And we indeed have been condemned justly, for we are getting what we deserve for our deeds, but this man has done nothing wrong."', reference: 'Luke 23:40-41 (NRSV)' },
                    { quote: 'Then he said, "Jesus, remember me when you come into your kingdom." He replied, "Truly I tell you, today you will be with me in Paradise."', reference: 'Luke 23:42-43 (NRSV)' },
                    { quote: 'It was now about noon, and darkness came over the whole land until three in the afternoon, while the sun\'s light failed; and the curtain of the temple was torn in two.', reference: 'Luke 23:44-45 (NRSV)' },
                    { quote: 'Then Jesus, crying with a loud voice, said, "Father, into your hands I commend my spirit." Having said this, he breathed his last.', reference: 'Luke 23:46 (NRSV)' },
                    { quote: 'When the centurion saw what had taken place, he praised God and said, "Certainly this man was innocent."', reference: 'Luke 23:47 (NRSV)' }
                ]
            }
        ],
        artUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/El_Greco_-_Christ_in_the_Garden_of_Gethsemane.jpg/960px-El_Greco_-_Christ_in_the_Garden_of_Gethsemane.jpg',
        artUrls: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/El_Greco_-_Christ_in_the_Garden_of_Gethsemane.jpg/960px-El_Greco_-_Christ_in_the_Garden_of_Gethsemane.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Flagellation_of_Christ_%28Caravaggio%29.jpg/960px-Flagellation_of_Christ_%28Caravaggio%29.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Caravaggio_-_Crowning_with_Thorns.jpg/960px-Caravaggio_-_Crowning_with_Thorns.jpg'
        ]
    },
    glorious: {
        name: 'Glorious Mysteries',
        jpiiSummary: 'The contemplation of Christ\'s face cannot stop at the image of the Crucified One. He is the Risen One! The Rosary has always expressed this knowledge of the faith, inviting the believer to pass beyond the darkness of the Passion in order to gaze upon Christ\'s glory in the Resurrection and in his Ascension. Sitting at the right hand of the Father, he pours forth the Holy Spirit, who builds up and gives life to the Church, for which the Blessed Virgin, in a way that is altogether unique, models the perfect following of Christ.\n\nThe "glorious mysteries" thus lead the faithful to greater hope, as they are called to relive the joy of Easter, the joy of the Resurrection, the joy of the Ascension, the joy of Pentecost, and the joy of Mary, who is assumed into heaven and crowned Queen of Heaven and Earth.',
        mysteries: [
            {
                name: 'The Resurrection',
                johnPaulIIReflection: 'The Resurrection of Jesus is the crowning truth of our faith in Christ. The glorious mysteries lead the faithful to greater hope for the eschatological goal towards which they journey as members of the pilgrim People of God in history.',
                catechismQuote: {
                    text: 'The Resurrection of Jesus is the crowning truth of our faith in Christ.',
                    reference: 'CCC 638',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'After the sabbath, as the first day of the week was dawning, Mary Magdalene and the other Mary went to see the tomb.', reference: 'Matthew 28:1 (NRSV)' },
                    { quote: 'And suddenly there was a great earthquake; for an angel of the Lord, descending from heaven, came and rolled back the stone and sat on it.', reference: 'Matthew 28:2 (NRSV)' },
                    { quote: 'His appearance was like lightning, and his clothing white as snow. For fear of him the guards shook and became like dead men.', reference: 'Matthew 28:3-4 (NRSV)' },
                    { quote: 'But the angel said to the women, "Do not be afraid; I know that you are looking for Jesus who was crucified. He is not here; for he has been raised, as he said. Come, see the place where he lay."', reference: 'Matthew 28:5-6 (NRSV)' },
                    { quote: '"Then go quickly and tell his disciples, \'He has been raised from the dead, and indeed he is going ahead of you to Galilee; there you will see him.\' Lo, I have told you."', reference: 'Matthew 28:7 (NRSV)' },
                    { quote: 'So they left the tomb quickly with fear and great joy, and ran to tell his disciples.', reference: 'Matthew 28:8 (NRSV)' },
                    { quote: 'Suddenly Jesus met them and said, "Greetings!" And they came to him, took hold of his feet, and worshiped him.', reference: 'Matthew 28:9 (NRSV)' },
                    { quote: 'Then Jesus said to them, "Do not be afraid; go and tell my brothers to go to Galilee; there they will see me."', reference: 'Matthew 28:10 (NRSV)' },
                    { quote: 'Now the eleven disciples went to Galilee, to the mountain to which Jesus had directed them. When they saw him, they worshiped him; but some doubted.', reference: 'Matthew 28:16-17 (NRSV)' },
                    { quote: 'And Jesus came and said to them, "All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."', reference: 'Matthew 28:18-19 (NRSV)' }
                ]
            },
            {
                name: 'The Ascension',
                johnPaulIIReflection: 'The Ascension marks the definitive entrance of Jesus\' humanity into God\'s heavenly domain, whence he will come again. Christ now sits at the right hand of the Father and intercedes for us.',
                catechismQuote: {
                    text: 'Jesus Christ, the head of the Church, precedes us into the Father\'s glorious kingdom.',
                    reference: 'CCC 666',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'So then the Lord Jesus, after he had spoken to them, was taken up into heaven and sat down at the right hand of God.', reference: 'Mark 16:19 (NRSV)' },
                    { quote: 'Then they returned to Jerusalem from the mount called Olivet, which is near Jerusalem, a sabbath day\'s journey away.', reference: 'Acts 1:12 (NRSV)' },
                    { quote: 'When they had entered the city, they went to the room upstairs where they were staying, Peter, and John, and James, and Andrew, Philip and Thomas, Bartholomew and Matthew, James son of Alphaeus, and Simon the Zealot, and Judas son of James.', reference: 'Acts 1:13 (NRSV)' },
                    { quote: 'All these were constantly devoting themselves to prayer, together with certain women, including Mary the mother of Jesus, as well as his brothers.', reference: 'Acts 1:14 (NRSV)' },
                    { quote: 'In the first book, Theophilus, I wrote about all that Jesus did and taught from the beginning until the day when he was taken up to heaven, after giving instructions through the Holy Spirit to the apostles whom he had chosen.', reference: 'Acts 1:1-2 (NRSV)' },
                    { quote: 'After his suffering he presented himself alive to them by many convincing proofs, appearing to them during forty days and speaking about the kingdom of God.', reference: 'Acts 1:3 (NRSV)' },
                    { quote: 'While staying with them, he ordered them not to leave Jerusalem, but to wait there for the promise of the Father. "This," he said, "is what you have heard from me."', reference: 'Acts 1:4 (NRSV)' },
                    { quote: '"For John baptized with water, but you will be baptized with the Holy Spirit not many days from now."', reference: 'Acts 1:5 (NRSV)' },
                    { quote: 'So when they had come together, they asked him, "Lord, is this the time when you will restore the kingdom to Israel?" He replied, "It is not for you to know the times or periods that the Father has set by his own authority."', reference: 'Acts 1:6-7 (NRSV)' },
                    { quote: '"But you will receive power when the Holy Spirit has come upon you; and you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the ends of the earth." When he had said this, as they were watching, he was lifted up, and a cloud took him out of their sight.', reference: 'Acts 1:8-9 (NRSV)' }
                ]
            },
            {
                name: 'The Descent of the Holy Spirit',
                johnPaulIIReflection: 'On the day of Pentecost when the seven weeks of Easter had come to an end, Christ\'s Passover is fulfilled in the outpouring of the Holy Spirit. The Church is born and begins her mission to the world.',
                catechismQuote: {
                    text: 'On the day of Pentecost when the seven weeks of Easter had come to an end, Christ\'s Passover is fulfilled in the outpouring of the Holy Spirit.',
                    reference: 'CCC 731',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'When the day of Pentecost had come, they were all together in one place.', reference: 'Acts 2:1 (NRSV)' },
                    { quote: 'And suddenly from heaven there came a sound like the rush of a violent wind, and it filled the entire house where they were sitting.', reference: 'Acts 2:2 (NRSV)' },
                    { quote: 'Divided tongues, as of fire, appeared among them, and a tongue rested on each of them.', reference: 'Acts 2:3 (NRSV)' },
                    { quote: 'All of them were filled with the Holy Spirit and began to speak in other languages, as the Spirit gave them ability.', reference: 'Acts 2:4 (NRSV)' },
                    { quote: 'Now there were devout Jews from every nation under heaven living in Jerusalem. And at this sound the crowd gathered and was bewildered, because each one heard them speaking in the native language of each.', reference: 'Acts 2:5-6 (NRSV)' },
                    { quote: 'Amazed and astonished, they asked, "Are not all these who are speaking Galileans? And how is it that we hear, each of us, in our own native language?"', reference: 'Acts 2:7-8 (NRSV)' },
                    { quote: '"Parthians, Medes, Elamites, and residents of Mesopotamia, Judea and Cappadocia, Pontus and Asia, Phrygia and Pamphylia, Egypt and the parts of Libya belonging to Cyrene, and visitors from Rome, both Jews and proselytes."', reference: 'Acts 2:9-10 (NRSV)' },
                    { quote: '"Cretans and Arabs—in our own languages we hear them speaking about God\'s deeds of power."', reference: 'Acts 2:11 (NRSV)' },
                    { quote: 'All were amazed and perplexed, saying to one another, "What does this mean?" But others sneered and said, "They are filled with new wine."', reference: 'Acts 2:12-13 (NRSV)' },
                    { quote: 'But Peter, standing with the eleven, raised his voice and addressed them, "Men of Judea and all who live in Jerusalem, let this be known to you, and listen to what I say."', reference: 'Acts 2:14 (NRSV)' }
                ]
            },
            {
                name: 'The Assumption',
                johnPaulIIReflection: 'The Assumption of Mary into heaven is the sign of what we hope for. Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory, showing us the destiny of all the faithful.',
                catechismQuote: {
                    text: 'The Most Blessed Virgin Mary, when the course of her earthly life was completed, was taken up body and soul into the glory of heaven.',
                    reference: 'CCC 974',
                    url: 'https://www.vatican.va/archive/ENG0015/__P2A.HTM'
                },
                scriptures: [
                    { quote: 'For the Lord himself, with a cry of command, with the archangel\'s call and with the sound of God\'s trumpet, will descend from heaven, and the dead in Christ will rise first.', reference: '1 Thessalonians 4:16 (NRSV)' },
                    { quote: 'Then we who are alive, who are left, will be caught up in the clouds together with them to meet the Lord in the air; and so we will be with the Lord forever.', reference: '1 Thessalonians 4:17 (NRSV)' },
                    { quote: 'Therefore encourage one another with these words.', reference: '1 Thessalonians 4:18 (NRSV)' },
                    { quote: 'But we do not want you to be uninformed, brothers and sisters, about those who have died, so that you may not grieve as others do who have no hope.', reference: '1 Thessalonians 4:13 (NRSV)' },
                    { quote: 'For since we believe that Jesus died and rose again, even so, through Jesus, God will bring with him those who have died.', reference: '1 Thessalonians 4:14 (NRSV)' },
                    { quote: 'For this we declare to you by the word of the Lord, that we who are alive, who are left until the coming of the Lord, will by no means precede those who have died.', reference: '1 Thessalonians 4:15 (NRSV)' },
                    { quote: 'Listen! I will tell you a mystery! We will not all die, but we will all be changed, in a moment, in the twinkling of an eye, at the last trumpet.', reference: '1 Corinthians 15:51-52 (NRSV)' },
                    { quote: 'For the trumpet will sound, and the dead will be raised imperishable, and we will be changed.', reference: '1 Corinthians 15:52 (NRSV)' },
                    { quote: 'For this perishable body must put on imperishability, and this mortal body must put on immortality.', reference: '1 Corinthians 15:53 (NRSV)' },
                    { quote: 'When this perishable body puts on imperishability, and this mortal body puts on immortality, then the saying that is written will be fulfilled: "Death has been swallowed up in victory."', reference: '1 Corinthians 15:54 (NRSV)' }
                ]
            },
            {
                name: 'The Coronation',
                johnPaulIIReflection: 'The Coronation of Mary as Queen of Heaven and Earth is the culmination of her journey of faith. In her, we see the goal of our own journey: to share in the glory of Christ and to reign with him in the kingdom of heaven.',
                catechismQuote: {
                    text: 'Finally the Immaculate Virgin... was taken up body and soul into heavenly glory, and exalted by the Lord as Queen over all things.',
                    reference: 'CCC 966',
                    url: 'https://www.vatican.va/archive/ENG0015/__P2A.HTM'
                },
                scriptures: [
                    { quote: 'A great portent appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.', reference: 'Revelation 12:1 (NRSV)' },
                    { quote: 'She was pregnant and was crying out in birth pangs, in the agony of giving birth.', reference: 'Revelation 12:2 (NRSV)' },
                    { quote: 'Then another portent appeared in heaven: a great red dragon, with seven heads and ten horns, and seven diadems on his heads.', reference: 'Revelation 12:3 (NRSV)' },
                    { quote: 'His tail swept down a third of the stars of heaven and threw them to the earth. Then the dragon stood before the woman who was about to bear a child, so that he might devour her child as soon as it was born.', reference: 'Revelation 12:4 (NRSV)' },
                    { quote: 'And she gave birth to a son, a male child, who is to rule all the nations with a rod of iron. But her child was snatched away and taken to God and to his throne.', reference: 'Revelation 12:5 (NRSV)' },
                    { quote: 'And the woman fled into the wilderness, where she has a place prepared by God, so that there they can nourish her for one thousand two hundred sixty days.', reference: 'Revelation 12:6 (NRSV)' },
                    { quote: 'And war broke out in heaven; Michael and his angels fought against the dragon. The dragon and his angels fought back, but they were defeated, and there was no longer any place for them in heaven.', reference: 'Revelation 12:7-8 (NRSV)' },
                    { quote: 'The great dragon was thrown down, that ancient serpent, who is called the Devil and Satan, the deceiver of the whole world—he was thrown down to the earth, and his angels were thrown down with him.', reference: 'Revelation 12:9 (NRSV)' },
                    { quote: 'Then I heard a loud voice in heaven, saying, "Now have come the salvation and the power and the kingdom of our God and the authority of his Messiah, for the accuser of our comrades has been thrown down, who accuses them day and night before our God."', reference: 'Revelation 12:10 (NRSV)' },
                    { quote: '"But they have conquered him by the blood of the Lamb and by the word of their testimony, for they did not cling to life even in the face of death."', reference: 'Revelation 12:11 (NRSV)' }
                ]
            }
        ],
        artUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Piero_della_Francesca_046.jpg/960px-Piero_della_Francesca_046.jpg',
        artUrls: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Piero_della_Francesca_046.jpg/960px-Piero_della_Francesca_046.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ascension_of_Christ_by_Dosso_Dossi.jpg/960px-Ascension_of_Christ_by_Dosso_Dossi.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/El_Greco_-_Pentecost.jpg/960px-El_Greco_-_Pentecost.jpg'
        ]
    },
    luminous: {
        name: 'Luminous Mysteries',
        jpiiSummary: 'Moving on from the infancy and the hidden life in Nazareth to the public life of Jesus, our contemplation brings us to those mysteries which may be called in a special way "mysteries of light". Certainly the whole mystery of Christ is a mystery of light. He is the "light of the world" (Jn 8:12). Yet this truth emerges in a special way during the years of his public life, when he proclaims the Gospel of the Kingdom. In proposing to the Christian community five significant moments – "luminous" mysteries – during Christ\'s public ministry, I think that the following can be fittingly singled out: (1) his Baptism in the Jordan, (2) his self-manifestation at the wedding of Cana, (3) his proclamation of the Kingdom of God, with his call to conversion, (4) his Transfiguration, and finally (5) his institution of the Eucharist, as the sacramental expression of the Paschal Mystery.\n\nEach of these mysteries is a revelation of the Kingdom now present in the very person of Jesus. The Baptism in the Jordan is first of all a mystery of light. Here, as Christ descends into the waters, the innocent one who became "sin" for our sake (cf. 2 Cor 5:21), the heavens open wide and the voice of the Father proclaims him the beloved Son (cf. Mt 3:17 and parallels), while the Spirit descends on him to invest him with the mission which he is to carry out. Another mystery of light is the first of the signs, given at Cana (cf. Jn 2:1-12), when Christ changes water into wine and opens the hearts of the disciples to faith, thanks to the intervention of Mary, the first among believers. Another mystery of light is the preaching by which Jesus proclaims the coming of the Kingdom of God, calls to conversion (cf. Mk 1:15) and forgives the sins of all who draw near to him in humble trust (cf. Mk 2:3-13; Lk 7:47-48): the inauguration of that ministry of mercy which he continues to exercise until the end of the world, particularly through the Sacrament of Reconciliation which he has entrusted to his Church (cf. Jn 20:22-23). The mystery of light par excellence is the Transfiguration, traditionally believed to have taken place on Mount Tabor. The glory of the Godhead shines forth from the face of Christ as the Father commands the astonished Apostles to "listen to him" (cf. Lk 9:35 and parallels) and to prepare to experience with him the agony of the Passion, so as to come with him to the joy of the Resurrection and a life transfigured by the Holy Spirit. A final mystery of light is the institution of the Eucharist, in which Christ offers his body and blood as food under the signs of bread and wine, and testifies "to the end" his love for humanity (Jn 13:1), for whose salvation he will offer himself in sacrifice.',
        mysteries: [
            {
                name: 'The Baptism of Jesus',
                johnPaulIIReflection: 'The Baptism of Jesus marks the beginning of his public ministry. In this mystery, we contemplate the revelation of the Trinity and the inauguration of Christ\'s mission to bring salvation to all humanity.',
                catechismQuote: {
                    text: 'Jesus\' public life begins with his baptism by John in the Jordan.',
                    reference: 'CCC 535',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'Then Jesus came from Galilee to John at the Jordan, to be baptized by him.', reference: 'Matthew 3:13 (NRSV)' },
                    { quote: 'John would have prevented him, saying, "I need to be baptized by you, and do you come to me?"', reference: 'Matthew 3:14 (NRSV)' },
                    { quote: 'But Jesus answered him, "Let it be so now; for it is proper for us in this way to fulfill all righteousness." Then he consented.', reference: 'Matthew 3:15 (NRSV)' },
                    { quote: 'And when Jesus had been baptized, just as he came up from the water, suddenly the heavens were opened to him and he saw the Spirit of God descending like a dove and alighting on him.', reference: 'Matthew 3:16 (NRSV)' },
                    { quote: 'And a voice from heaven said, "This is my Son, the Beloved, with whom I am well pleased."', reference: 'Matthew 3:17 (NRSV)' },
                    { quote: 'Now when all the people were baptized, and when Jesus also had been baptized and was praying, the heaven was opened, and the Holy Spirit descended upon him in bodily form like a dove.', reference: 'Luke 3:21-22 (NRSV)' },
                    { quote: 'And a voice came from heaven, "You are my Son, the Beloved; with you I am well pleased."', reference: 'Luke 3:22 (NRSV)' },
                    { quote: 'Jesus, when he began his work, was about thirty years old. He was the son (as was thought) of Joseph son of Heli.', reference: 'Luke 3:23 (NRSV)' },
                    { quote: 'The next day he saw Jesus coming toward him and declared, "Here is the Lamb of God who takes away the sin of the world!"', reference: 'John 1:29 (NRSV)' },
                    { quote: '"This is he of whom I said, \'After me comes a man who ranks ahead of me because he was before me.\' I myself did not know him; but I came baptizing with water for this reason, that he might be revealed to Israel."', reference: 'John 1:30-31 (NRSV)' }
                ]
            },
            {
                name: 'The Wedding at Cana',
                johnPaulIIReflection: 'The Wedding at Cana reveals Christ\'s power and Mary\'s intercessory role. At Mary\'s request, Jesus performs his first miracle, manifesting his glory and the beginning of the new creation.',
                catechismQuote: {
                    text: 'The Church attaches great importance to Jesus\' presence at the wedding at Cana.',
                    reference: 'CCC 1613',
                    url: 'https://www.vatican.va/archive/ENG0015/__P4V.HTM'
                },
                scriptures: [
                    { quote: 'On the third day there was a wedding in Cana of Galilee, and the mother of Jesus was there.', reference: 'John 2:1 (NRSV)' },
                    { quote: 'Jesus and his disciples had also been invited to the wedding.', reference: 'John 2:2 (NRSV)' },
                    { quote: 'When the wine gave out, the mother of Jesus said to him, "They have no wine."', reference: 'John 2:3 (NRSV)' },
                    { quote: 'And Jesus said to her, "Woman, what concern is that to you and to me? My hour has not yet come."', reference: 'John 2:4 (NRSV)' },
                    { quote: 'His mother said to the servants, "Do whatever he tells you."', reference: 'John 2:5 (NRSV)' },
                    { quote: 'Now standing there were six stone water jars for the Jewish rites of purification, each holding twenty or thirty gallons.', reference: 'John 2:6 (NRSV)' },
                    { quote: 'Jesus said to them, "Fill the jars with water." And they filled them up to the brim.', reference: 'John 2:7 (NRSV)' },
                    { quote: 'He said to them, "Now draw some out, and take it to the chief steward." So they took it.', reference: 'John 2:8 (NRSV)' },
                    { quote: 'When the steward tasted the water that had become wine, and did not know where it came from (though the servants who had drawn the water knew), the steward called the bridegroom.', reference: 'John 2:9 (NRSV)' },
                    { quote: 'And said to him, "Everyone serves the good wine first, and then the inferior wine after the guests have become drunk. But you have kept the good wine until now." Jesus did this, the first of his signs, in Cana of Galilee, and revealed his glory; and his disciples believed in him.', reference: 'John 2:10-11 (NRSV)' }
                ]
            },
            {
                name: 'The Proclamation of the Kingdom',
                johnPaulIIReflection: 'The Proclamation of the Kingdom calls us to conversion and faith. Jesus announces the coming of God\'s kingdom and invites all to repent and believe in the Gospel, opening our hearts to the transforming power of God\'s love.',
                catechismQuote: {
                    text: 'The kingdom of God has come near; repent, and believe in the good news.',
                    reference: 'CCC 541',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'Now after John was arrested, Jesus came to Galilee, proclaiming the good news of God, and saying, "The time is fulfilled, and the kingdom of God has come near; repent, and believe in the good news."', reference: 'Mark 1:14-15 (NRSV)' },
                    { quote: 'As he walked by the Sea of Galilee, he saw two brothers, Simon, who is called Peter, and Andrew his brother, casting a net into the sea—for they were fishermen.', reference: 'Matthew 4:18 (NRSV)' },
                    { quote: 'And he said to them, "Follow me, and I will make you fish for people."', reference: 'Matthew 4:19 (NRSV)' },
                    { quote: 'Immediately they left their nets and followed him.', reference: 'Matthew 4:20 (NRSV)' },
                    { quote: 'As he went from there, he saw two other brothers, James son of Zebedee and his brother John, in the boat with their father Zebedee, mending their nets, and he called them.', reference: 'Matthew 4:21 (NRSV)' },
                    { quote: 'Immediately they left the boat and their father, and followed him.', reference: 'Matthew 4:22 (NRSV)' },
                    { quote: 'Jesus went throughout Galilee, teaching in their synagogues and proclaiming the good news of the kingdom and curing every disease and every sickness among the people.', reference: 'Matthew 4:23 (NRSV)' },
                    { quote: 'So his fame spread throughout all Syria, and they brought to him all the sick, those who were afflicted with various diseases and pains, demoniacs, epileptics, and paralytics, and he cured them.', reference: 'Matthew 4:24 (NRSV)' },
                    { quote: 'And great crowds followed him from Galilee, the Decapolis, Jerusalem, Judea, and from beyond the Jordan.', reference: 'Matthew 4:25 (NRSV)' },
                    { quote: 'When Jesus saw the crowds, he went up the mountain; and after he sat down, his disciples came to him. Then he began to speak, and taught them, saying: "Blessed are the poor in spirit, for theirs is the kingdom of heaven."', reference: 'Matthew 5:1-3 (NRSV)' }
                ]
            },
            {
                name: 'The Transfiguration',
                johnPaulIIReflection: 'The Transfiguration gives us a foretaste of Christ\'s glorious coming. In this mystery, we see the divine glory of Jesus and are called to listen to him, preparing us for the mystery of the Cross and Resurrection.',
                catechismQuote: {
                    text: 'Christ\'s Transfiguration aims at strengthening the apostles\' faith.',
                    reference: 'CCC 568',
                    url: 'https://www.vatican.va/archive/ENG0015/__P1K.HTM'
                },
                scriptures: [
                    { quote: 'Six days later, Jesus took with him Peter and James and his brother John and led them up a high mountain, by themselves.', reference: 'Matthew 17:1 (NRSV)' },
                    { quote: 'And he was transfigured before them, and his face shone like the sun, and his clothes became dazzling white.', reference: 'Matthew 17:2 (NRSV)' },
                    { quote: 'Suddenly there appeared to them Moses and Elijah, talking with him.', reference: 'Matthew 17:3 (NRSV)' },
                    { quote: 'Then Peter said to Jesus, "Lord, it is good for us to be here; if you wish, I will make three dwellings here, one for you, one for Moses, and one for Elijah."', reference: 'Matthew 17:4 (NRSV)' },
                    { quote: 'While he was still speaking, suddenly a bright cloud overshadowed them, and from the cloud a voice said, "This is my Son, the Beloved; with him I am well pleased; listen to him!"', reference: 'Matthew 17:5 (NRSV)' },
                    { quote: 'When the disciples heard this, they fell to the ground and were overcome by fear.', reference: 'Matthew 17:6 (NRSV)' },
                    { quote: 'But Jesus came and touched them, saying, "Get up and do not be afraid."', reference: 'Matthew 17:7 (NRSV)' },
                    { quote: 'And when they looked up, they saw no one except Jesus himself alone.', reference: 'Matthew 17:8 (NRSV)' },
                    { quote: 'As they were coming down the mountain, Jesus ordered them, "Tell no one about the vision until after the Son of Man has been raised from the dead."', reference: 'Matthew 17:9 (NRSV)' },
                    { quote: 'And the disciples asked him, "Why, then, do the scribes say that Elijah must come first?" He replied, "Elijah is indeed coming and will restore all things; but I tell you that Elijah has already come, and they did not recognize him, but they did to him whatever they pleased."', reference: 'Matthew 17:10-12 (NRSV)' }
                ]
            },
            {
                name: 'The Institution of the Eucharist',
                johnPaulIIReflection: 'The Institution of the Eucharist is the source and summit of the Christian life. In this mystery, Christ gives himself as food for our journey, establishing the new and eternal covenant through his Body and Blood.',
                catechismQuote: {
                    text: 'The Eucharist is "the source and summit of the Christian life".',
                    reference: 'CCC 1324',
                    url: 'https://www.vatican.va/archive/ENG0015/__P3Z.HTM'
                },
                scriptures: [
                    { quote: 'On the first day of Unleavened Bread the disciples came to Jesus, saying, "Where do you want us to make the preparations for you to eat the Passover?"', reference: 'Matthew 26:17 (NRSV)' },
                    { quote: 'He said, "Go into the city to a certain man, and say to him, \'The Teacher says, My time is near; I will keep the Passover at your house with my disciples.\'"', reference: 'Matthew 26:18 (NRSV)' },
                    { quote: 'So the disciples did as Jesus had directed them, and they prepared the Passover meal.', reference: 'Matthew 26:19 (NRSV)' },
                    { quote: 'When it was evening, he took his place with the twelve; and while they were eating, he said, "Truly I tell you, one of you will betray me."', reference: 'Matthew 26:20-21 (NRSV)' },
                    { quote: 'And they became greatly distressed and began to say to him one after another, "Surely not I, Lord?"', reference: 'Matthew 26:22 (NRSV)' },
                    { quote: 'He answered, "The one who has dipped his hand into the bowl with me will betray me."', reference: 'Matthew 26:23 (NRSV)' },
                    { quote: 'While they were eating, Jesus took a loaf of bread, and after blessing it he broke it, gave it to the disciples, and said, "Take, eat; this is my body."', reference: 'Matthew 26:26 (NRSV)' },
                    { quote: 'Then he took a cup, and after giving thanks he gave it to them, saying, "Drink from it, all of you; for this is my blood of the covenant, which is poured out for many for the forgiveness of sins."', reference: 'Matthew 26:27-28 (NRSV)' },
                    { quote: '"I tell you, I will never again drink of this fruit of the vine until that day when I drink it new with you in my Father\'s kingdom."', reference: 'Matthew 26:29 (NRSV)' },
                    { quote: 'When they had sung the hymn, they went out to the Mount of Olives.', reference: 'Matthew 26:30 (NRSV)' }
                ]
            }
        ],
        artUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Veronese_-_The_Marriage_at_Cana.jpg/960px-Veronese_-_The_Marriage_at_Cana.jpg',
        artUrls: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Veronese_-_The_Marriage_at_Cana.jpg/960px-Veronese_-_The_Marriage_at_Cana.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Baptism_of_Christ_Verrocchio.jpg/960px-Baptism_of_Christ_Verrocchio.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Raphael_-_The_Transfiguration.jpg/960px-Raphael_-_The_Transfiguration.jpg'
        ]
    }
};

const PRAYERS = {
    creed: {
        title: 'The Apostles\' Creed',
        text: `I believe in God, the Father almighty,
creator of heaven and earth.

I believe in Jesus Christ, his only Son, our Lord.
He was conceived by the power of the Holy Spirit
and born of the Virgin Mary.
He suffered under Pontius Pilate,
was crucified, died, and was buried.
He descended to the dead.
On the third day he rose again.
He ascended into heaven,
and is seated at the right hand of the Father.
He will come again to judge the living and the dead.

I believe in the Holy Spirit,
the holy catholic Church,
the communion of saints,
the forgiveness of sins,
the resurrection of the body,
and the life everlasting. Amen.`
    },
    ourFather: {
        title: 'Our Father',
        text: `Our Father, who art in heaven,
hallowed be thy name;
thy kingdom come;
thy will be done
on earth as it is in heaven.
Give us this day our daily bread;
and forgive us our trespasses
as we forgive those who trespass against us;
and lead us not into temptation,
but deliver us from evil. Amen.`
    },
    hailMary: {
        title: 'Hail Mary',
        text: `Hail Mary, full of grace,
the Lord is with thee.
Blessed art thou among women,
and blessed is the fruit of thy womb, Jesus.
Holy Mary, Mother of God,
pray for us sinners,
now and at the hour of our death. Amen.`
    },
    gloryBe: {
        title: 'Glory Be',
        text: `Glory be to the Father,
and to the Son,
and to the Holy Spirit.
As it was in the beginning,
is now, and ever shall be,
world without end. Amen.`
    },
    fatimaPrayer: {
        title: 'Fatima Prayer',
        text: `O my Jesus, forgive us our sins,
save us from the fires of hell,
and lead all souls to heaven,
especially those in most need of Thy mercy.`
    },
    hailHolyQueen: {
        title: 'Hail Holy Queen',
        text: `Hail, holy Queen, Mother of mercy,
our life, our sweetness, and our hope.
To you we cry, poor banished children of Eve.
To you we send up our sighs,
mourning and weeping in this valley of tears.
Turn, then, most gracious advocate,
your eyes of mercy toward us,
and after this, our exile,
show unto us the blessed fruit of your womb, Jesus.
O clement, O loving, O sweet Virgin Mary.

Pray for us, O holy Mother of God,
that we may be made worthy of the promises of Christ. Amen.`
    }
};

