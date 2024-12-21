function toggleNav() {
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

document.addEventListener("DOMContentLoaded", function (event) {

    const jsonData = {
        "costumers": [
            {
                "id": 1,
                "title": "Braintrust",
                "img": "Braintrustdemo_logo.svg",
                "content": "An AI-based recruitment platform that connects leading tech companies with strategic projects at lower costs.",
                "website":"https://braintrusttutors.com/"
            },
            {
                "id": 2,
                "title": "Cronelsen",
                "img": "cornelsen logo.svg",
                "content": "German textbook publisher that offers educational media in Germany, Austria and Switzerland",
                "website":"https://www.cornelsen.de/"
            },
            {
                "id": 3,
                "title": "IDF",
                "img": "IDF logo.svg",
                "content": "IDF's Training Department is responsible for developing, managing, and delivering comprehensive training programs",
                "website":"https://www.idf.il/"
            },
            {
                "id": 4,
                "title": "Widzi",
                "img": "wizdi logo.svg",
                "content": " Digital content provider that publishes textbooks and develops electronic learning environments",
                "website":"https://wizdi.school/home"
            },
            {
                "id": 5,
                "title": "Harel",
                "img": "harel logo.jpg",
                "content": " Insurance and financial services companie, offering a wide range of solutions",
                "website":"https://www.harel-group.co.il/Pages/default.aspx/"
            },
            {
                "id": 6,
                "title": "MDA",
                "img": "MDA.png",
                "content": "Israel's national emergency medical, disaster, and blood services",
                "website":"https://www.mdais.org/itnadvut?gad_source=1&gclid=CjwKCAiA65m7BhAwEiwAAgu4JODVAwBC_aqRV5mJBvuYyd3EFh6tFS1QRQ90g7VrKUysizHTxoJCDxoCP30QAvD_BwE"
            },

            {
                "id": 7,
                "title": "Sadlier",
                "img": "wsadlier logo.svg",
                "content": "American educational publishing company, that provides educational content",
                "website":"https://www.sadlier.com/"
            },
            {
                "id": 8,
                "title": "Veritas",
                "img": "vrt logo.svg",
                "content": "American multinational data management company , specializing in storage management software",
                "website":"https://www.veritas.com/"
            },
            {
                "id": 9,
                "title": "Kachifo",
                "img": "kachifo logo.webp",
                "content": "Nigerian publishing house known for promoting African literature through its imprints",
                "website":"https://www.kachifo.com/"
            },
            {
                "id": 10,
                "title": "Learn Africa",
                "img": "LA_math logo.svg",
                "content": "a leading Nigerian publishing company specializing in high-quality educational materials",
                "website":"https://learnafricaplc.com/"
            },
        ]
    }


    const itemsContainer = document.getElementById('listitem');
    itemsContainer.classList.add("row");

    jsonData.costumers.forEach(c => {
        const myCard = document.createElement("li");
        myCard.classList.add("card"); // מחלקת CSS לכל כרטיסייה

        const myImg = document.createElement("img");
        myImg.setAttribute("src", "images/" + c.img);
        myImg.setAttribute("alt", c.title);
        myImg.classList.add("customer-img");

        const myTitle = document.createElement("h3");
        myTitle.textContent = c.title;
        myTitle.classList.add("hidden"); // הכותרת מוסתרת כברירת מחדל

        const myContent = document.createElement("p");
        myContent.textContent = c.content;
        myContent.classList.add("hidden"); // התוכן מוסתר כברירת מחדל

        // הוספת אירוע לחיצה
        myCard.addEventListener("click", function () {
            const isActive = myCard.classList.toggle('active'); // משנה את המצב של הכרטיסייה
            if (isActive) {
                myImg.classList.add("hidden"); // מסתיר את התמונה
                myTitle.classList.remove("hidden"); // מציג את הכותרת
                myContent.classList.remove("hidden"); // מציג את התוכן
                websiteButton.style.display = "inline-block";
            } else {
                myImg.classList.remove("hidden"); // מציג את התמונה
                myTitle.classList.add("hidden"); // מסתיר את הכותרת
                myContent.classList.add("hidden"); // מסתיר את התוכן
                websiteButton.style.display = "none";
            }
            
        });


        // יצירת כפתור Favorite (לב)
        const favoriteButton = document.createElement("button");
        favoriteButton.classList.add("favorite-btn");

        // יצירת כפתור קישור לאתר החברה
        const websiteButton = document.createElement("a");
        websiteButton.classList.add("website-btn");
        websiteButton.setAttribute("href", c.website); // הוספת הקישור הספציפי לכל כרטיס
        websiteButton.setAttribute("target", "_blank"); // פתיחה בלשונית חדשה
        websiteButton.textContent = "Visit Website"; // הטקסט על כפתור הקישור

        // הוספת אירוע לטוגל כפתור favorite
        favoriteButton.addEventListener("click", function() {
            favoriteButton.classList.toggle("active");
          
        });

        // הוספת האלמנטים ל-myCard
        myCard.appendChild(favoriteButton); // הוספת כפתור favorite לפני כל תוכן אחר
        myCard.appendChild(myImg);
        myCard.appendChild(myTitle);
        myCard.appendChild(myContent);
        myCard.appendChild(websiteButton); // הוספת כפתור האתר

      
        itemsContainer.appendChild(myCard);
    });
});
    function searchCustomer(){
        const searchTerm = document.getElementById("search-input").value.toLowerCase();  // מקבל את הערך מהשדה וממיר לאותיות קטנות
        const allCards = document.querySelectorAll(".card");  // מקבל את כל כרטיסי החברה

        allCards.forEach(function(card) {
            const companyName = card.querySelector("h3").textContent.toLowerCase();  // מקבל את שם החברה מתוך כותרת ה-H3
            if (companyName.includes(searchTerm)) {
                card.style.display = "block";  // מציג את הכרטיס אם השם כולל את החיפוש
            } else {
                card.style.display = "none";  // מחביא את הכרטיס אם השם לא כולל את החיפוש
            }
        });
        
        
    }
 



