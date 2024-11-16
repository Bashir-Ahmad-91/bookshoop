import image_1 from '../assets/images/book-img/1.jpg';
import image_2 from '../assets/images/book-img/2.jpg';
import image_3 from '../assets/images/book-img/3.jpg';
import image_4 from '../assets/images/book-img/4.jpg';
import image_5 from '../assets/images/book-img/5.jpg';
import image_6 from '../assets/images/book-img/6.jpg';
import image_7 from '../assets/images/book-img/7.jpg';
import image_8 from '../assets/images/book-img/8.jpg';
import image_9 from '../assets/images/book-img/9.jpg';
import image_10 from '../assets/images/book-img/10.jpg';
import image_11 from '../assets/images/book-img/11.jpg';
import image_12 from '../assets/images/book-img/12.jpg';

function initialData () {
    return(
    [
        {
            "id": "01",
            "name": "The Blacked Hunter",
            "image": `${image_1}`,
            "rating": 3,
            "price": 150,
            "author": "John Doe",
            "description": "The Blacked Hunter tells a thrilling story of courage, loss, and survival. As the protagonist faces an ancient enemy, he must overcome his fears to protect his homeland. Filled with suspense, this book captivates readers from start to finish.",
            "status": "new_releases"
        },
        {
            "id": "02",
            "name": "Trecrcok Hengack",
            "image": `${image_2}`,
            "rating": 4,
            "price": 190,
            "author": "Jane Smith",
            "description": "Trecrcok Hengack is a mystery novel that unravels the hidden secrets of an ancient kingdom. The protagonist, a determined explorer, stumbles upon clues that lead him into a web of danger, where trust and loyalty are put to the ultimate test.",
            "status": "coming_soon"
        },
        {
            "id": "03",
            "name": "Resntin Laur Goook",
            "image": `${image_3}`,
            "rating": 5,
            "price": 130,
            "author": "Alice Johnson",
            "description": "Resntin Laur Goook takes readers on a journey through a mystical world where nothing is as it seems. The story is rich with intriguing characters and captivating plot twists, making it an unforgettable adventure of magic and mystery.",
            "status": "new_releases"
        },
        {
            "id": "04",
            "name": "Lever Lenatti Face",
            "image": `${image_4}`,
            "rating": 2,
            "price": 160,
            "author": "Robert Brown",
            "description": "In Lever Lenatti Face, a young hero embarks on a journey to find answers about his past. Along the way, he encounters friends and foes alike, each with their own motives, making it an intense tale of discovery and courage.",
            "status": "coming_soon"
        },
        {
            "id": "05",
            "name": "Prenlter Prestion Pssquik",
            "image": `${image_5}`,
            "rating": 3,
            "price": 175,
            "author": "Emily Davis",
            "description": "Prenlter Prestion Pssquik explores the clash between tradition and modernity. Through a young character's quest for identity, the novel delves into themes of family, honor, and change, resonating deeply with readers from diverse backgrounds.",
            "status": "new_releases"
        },
        {
            "id": "06",
            "name": "Slopjnnr Sunze",
            "image": `${image_6}`,
            "rating": 4,
            "price": 125,
            "author": "Michael Wilson",
            "description": "Slopjnnr Sunze is a tale of ambition and resilience. Set in a futuristic world, it follows the rise of a young inventor who must navigate challenges to achieve greatness. This story is a compelling reminder of the power of determination.",
            "status": "coming_soon"
        },
        {
            "id": "07",
            "name": "Woodlands Nursing Home",
            "image": `${image_7}`,
            "rating": 5,
            "price": 185,
            "author": "Sarah Martinez",
            "description": "Woodlands Nursing Home tells the heartwarming stories of residents and their caregivers. Through laughter, tears, and moments of wisdom, this book sheds light on the lives of those who live in and work within these caring, nurturing spaces.",
            "status": "new_releases"
        },
        {
            "id": "08",
            "name": "The Big Deal",
            "image": `${image_8}`,
            "rating": 2,
            "price": 155,
            "author": "David Taylor",
            "description": "The Big Deal is a gripping novel about ambition, betrayal, and redemption. Set against the backdrop of the business world, it portrays the struggle of a protagonist who risks everything to pursue his dreams and learns what truly matters.",
            "status": "coming_soon"
        },
        {
            "id": "09",
            "name": "The Crow Fold",
            "image": `${image_9}`,
            "rating": 3,
            "price": 145,
            "author": "Sophia Anderson",
            "description": "The Crow Fold is a suspenseful story of intrigue and mystery. A young detective faces her toughest case yet, unveiling secrets that connect the past and the present in unexpected ways. This story keeps readers guessing until the final page.",
            "status": "new_releases"
        },
        {
            "id": "10",
            "name": "The Lion The Witch",
            "image": `${image_10}`,
            "rating": 4,
            "price": 140,
            "author": "Chris Thomas",
            "description": "The Lion The Witch and The Wardrobe is a timeless fantasy that transports readers to a magical realm. Filled with adventure and profound lessons, it’s a story of friendship, bravery, and the endless battle between good and evil.",
            "status": "coming_soon"
        },
        {
            "id": "11",
            "name": "Alone a True Story",
            "image": `${image_11}`,
            "rating": 5,
            "price": 180,
            "author": "Karen White",
            "description": "Alone: A True Story shares the moving journey of a woman overcoming hardship. With raw honesty and resilience, she navigates life's challenges, emerging stronger than before. Her story inspires readers to find strength in difficult times.",
            "status": "new_releases"
        },
        {
            "id": "12",
            "name": "When I Feel Alone",
            "image": `${image_12}`,
            "rating": 2,
            "price": 135,
            "author": "Jason Harris",
            "description": "When I Feel Alone is a deeply introspective story that explores themes of isolation, connection, and healing. Through the protagonist's journey, readers are reminded of the importance of reaching out and finding support in others.",
            "status": "coming_soon"
        }
    ]);
}

export { initialData };
