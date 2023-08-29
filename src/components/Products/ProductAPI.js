import prod1 from "./ProductImages/earbuds1.webp";
import prod2 from "./ProductImages/earbuds2.webp";
import prod3 from "./ProductImages/earbuds3.webp";
import prod4 from "./ProductImages/earbuds4.webp";
import prod5 from "./ProductImages/earbuds5.webp";
import prod6 from "./ProductImages/watch1.webp";
import prod7 from "./ProductImages/watch2.webp";
import prod8 from "./ProductImages/watch3.webp";
import prod9 from "./ProductImages/speaker1.webp";
import prod10 from "./ProductImages/speaker2.webp";
import prod11 from "./ProductImages/speaker3.webp";
import prod12 from "./ProductImages/speaker4.webp";
import prod13 from "./ProductImages/head1.webp";
import prod14 from "./ProductImages/head2.webp";
import prod15 from "./ProductImages/head3.webp";
import prod16 from "./ProductImages/head4.webp";


export function getProductsData() {
    const products = [
        {
            id: 1,
            title: "boAt TRebel Airdopes 402 | In-Ear Earbuds With 10mm Driver, IPX4 Sweat",
            description: "The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality. These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with total 30 hours of playtime and Bluetooth V5.2 that never lets you down. Let yourself loose and free, choosing for your own self, with this immersive audio built just to make you experience the unreal boAt signature sound. Weighing as light as opinions should, TRebel Airdopes 402 with its 450mAh battery charging case will assist you in blocking the outside world for a long time.",
            price: "1,999",
            image: prod1,
            type: "earbud",
        },
        {
            id: 2,
            title: "boAt Airdopes 141 Pro | 12mm Drivers, Upto 45 Hours Playback, Quad Mics with ENx™️ Technology",
            description: "Take a step up on your listening experience with boAt Airdopes 141 Pro. Start playing your tracks on our best wireless earbuds and don't stop with a total playback of 45 hours. Never miss a beat with boAt Signature Sound on our all-new boAt Airdopes so that every song that you listen to shines through. Plug-in and live the sound.",
            price: "1,499",
            image: prod2,
            type: "earbud",
        },
        {
            id: 3,
            title: "boAt Airdopes 441 | Wireless Earbuds with 6mm Driver For Immersive Sound",
            description: "Plug Into Nirvana with boAt Airdopes 441 TWS earbuds to enjoy your music in a truly wireless way. It has the IWP (Insta Wake N’ Pair) Technology, meaning as soon as one opens the charging case lid, the best earbuds power on and enter connection mode. The TWS Airdopes 441 come equipped with 6mm drivers for immersive sound. It offers a seamless user experience via its capacitive touch controls",
            price: "2,499",
            image: prod3,
            type: "earbud",
        },
        {
            id: 4,
            title: "Airdopes 131 DC Edition with 13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music",
            description: "Sleek. Comfortable. Stylish. And a splash of amazing acoustic powers. Airdopes 131 true wireless earbuds are equipped with 13mm drivers that offer you beyond the ordinary sound. Keep going on for long like the DC heroes with its 12 hours of capacity. Plug-in be prepared to be awe struck",
            price: "1,399",
            image: prod4,
            type: "earbud",
        },
      {
            id: 5,
            title: "TRebel Airdopes 141 | 8mm drivers, Upto 42 Hours Total Playback, ENxTM Technology, ASAPTM Charge",
            description: "Hello sassy and fierce ladies! We see you soaring high for your dreams, and we want to support them. Let TRebel Airdopes 141 be your biggest cheerleader while you win the world with your go-getter attitude! Shun their opinions by indulging in your rhythm with the 8mm Dynamic Drivers. Ace those business calls with its ENx™ Technology that makes you heard every time. ASAP™ Charge empowers you with 75 minutes of playback with just 5 minutes of charging. IPX4 makes it easier to roll in the good times as you rock that sweat, changing your lifestyle. Connect instantly with its IWP™ Technology & keep everything under control with its Quick Response Touch.c",
            price: "1,499",
            image: prod5,
            type: "earbud",
        },
      {
            id: 6,
            title: "boAt Vertex | Smartwatch with Fitness Trackers, 1.69 HD Display, Sleep Tracking, 100+ Watch Faces",
            description: "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.",
            price: "2,299",
            image: prod6,
            type: "watch",
        },
      {
            id: 7,
            title: "boAt Iris | Round Dial Smart Watch with 1.39 AMOLED Display, Multiple Watch Faces",
            description: "Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. Thrive through your success with all the important notifications on your smartwatch. The timeless look comes with multiple watch faces and strap options to go with all versions of your style. Nail every sport you play with 8 active sports modes tracking your performance. Don’t worry about sweat and water, it is IP68. Being healthy is an imperative when your watch has a heart rate monitor, oxygen level monitor, sedentary reminder tracking your health 24x7. Pump up your style!",
            price: "4,499",
            image: prod7,
            type: "watch",
        },
      {
            id: 8,
            title: "boAt Wave Neo | 1.69 HD Display, Upto 7 Days Battery Life, IP68 Sweat",
            description: "Introducing a #NeoWay to live smart and stylish – the all-new Watch Wave Neo. Check everything that you need in a smartwatch and then get some more. Packed with a 1.69 inches screen, 550 nits brightness & 2.5D Curved Display – Watch Wave Neo will make your world better & brighter.",
            price: "1,799",
            image: prod8,
            type: "watch",
        },
      {
            id: 9,
            title: "Party Pal 60",
            description: "Wherever the party is tonight, make sure you carry the powerful 20W R.M.S Sound of the PartyPal 60 along. It’s time to create memories with wireless Bluetooth V5.0 guiding you to the shores of Nirvana. So, get loud and vibing with the integral space boom party inspired design of the boAt PartyPal 60. Customize those EQ’s until the bass is almost rude, with up to 4 hours of playtime from the 2200mAh lithium battery. Connect two PartyPal’s and get turned with true wireless feature making each moment magical. The system to your sound is here to turn the world around with its karaoke feature that allows you to work on your singing embarrassment free. Tune into any mode you want with FM Radio/ TF/ USB/ AUX that becomes easy to access with the integrated controls and in-built mic. The conditions are favourable to sail when you’re traveling on the boAt PartyPAl 60 bluetooth party speakers.",
            price: "4,999",
            image: prod9,
            type: "speaker",
        },
      {
            id: 10,
            title: "Stone 1500F | 14W boAt Signature Sound with Passive Bass Radiator",
            description: "Add life to all your parties with the ultimate jukebox - Stone 1200F bluetooth speaker. It’s powered by 14W boAt Signature Sound with Passive Bass Radiator that’s built to add spark to all your plans. The RGB LED lights are perfect to set the perfect vibe for a casual chilling session with your best buds. You can take it along everywhere you go with its 360-degree ergonomic design, shoulder strap and IPX7 Water & Splash Resistance that protects it even when outdoors.",
            price: "3,999",
            image: prod10,
            type: "speaker",
        },
      {
            id: 11,
            title: "Stone 352 - Wireless Portable Bluetooth Speaker",
            description: "Be the life of every party as you carry the ultra-portable Stone 352 with you, wherever you go. Its 10W Stereo boAt Signature Sound will make you vibe with full force as every beat becomes clear. Too bored partying within four walls? No problem! Shield your good times as the dynamic Stone 352 is equipped with IPX7 Splash & Water Shield— rain or poolside we got you covered! Party from dusk till dawn with its 12H nonstop playtime & double the impact as you connect 2 Stone 352s via the TWS feature. So get your gang & set to groove!",
            price: "1,699",
            image: prod11,
            type: "speaker",
        },
      {
            id: 12,
            title: "Product 4",
            description: "prod 4 desc",
            price: "999",
            image: prod12,
            type: "speaker",
        },
        {
            id: 13,
            title: "Product 4",
            description: "prod 4 desc",
            price: "999",
            image: prod13,
            type: "headphone",
        },
        {
            id: 14,
            title: "Product 4",
            description: "prod 4 desc",
            price: "999",
            image: prod14,
            type: "headphone",
        },
        {
            id: 15,
            title: "Product 4",
            description: "prod 4 desc",
            price: "999",
            image: prod15,
            type: "headphone",
        },
        {
            id: 16,
            title: "Product 4",
            description: "prod 4 desc",
            price: "999",
            image: prod16,
            type: "headphone",
        },

    ];

    return products;
}