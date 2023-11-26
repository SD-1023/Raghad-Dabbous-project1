const items =[
    {
        img : "html.png",
        title : "Web Development Languages",
        lang : "HTML",
        author : "Sarach Smith",
        rate : 4
    },
    {
        img : "css.webp",
        title : "Web Development Languages",
        lang : "CSS",
        author : "David Lee",
        rate : 3.5
    },
    {
        img : "javascript.jpg",
        title : "Web Development Languages",
        lang : "JavaScript",
        author : "Emily Chen",
        rate : 4
    },
    {
        img : "jquery.png",
        title : "Web Development Languages",
        lang : "jQuery",
        author : "Jon Johnson",
        rate :4
    },
    {
        img : "angular.png",
        title : "Web Development Languages",
        lang : "Angular",
        author : "Jessica Davis",
        rate : 3.5
    },
    {
        img : "react.webp",
        title : "Frontend Frameworks and Libraries",
        lang : "React",
        author : "Daniel Brown",
        rate :4
    },
    {
        img : "vuejs.jpeg",
        title : "Frontend Frameworks and Libraries",
        lang : "Vue.js",
        author : "Ava Jones",
        rate : 3.5
    },
    {
        img : "nodejs.webp",
        title : "Backend Frameworks and Libraries",
        lang : "Node.js",
        author : "Michael Kim",
        rate :4
    },
    {
        img : "expressjs.webp",
        title : "Backend Frameworks and Libraries",
        lang : "Express.js",
        author : "Sophia Rodriguez",
        rate :4
    },
    {
        img : "ruby.jpeg",
        title : "Backend Frameworks and Libraries",
        lang : "Ruby on Rails",
        author : "William Lee",
        rate :3
    },
    {
        img : "django.jpeg",
        title : "Backend Frameworks and Libraries",
        lang : "Django",
        author : "Olivia Martinez",
        rate :4
    },
    {
        img : "flask.webp",
        title : "Backend Frameworks and Libraries",
        lang : "Flask",
        author : "Ethan Thompson",
        rate :3
    },
    {
        img : "sql.png",
        title : "Databases and APIs",
        lang : "SQL",
        author : "Madison Davis",
        rate :4.5
    },
    {
        img : "nosql.png",
        title : "Databases and APIs",
        lang : "NoSQL",
        author : "Isabella Wilson",
        rate : 4.5
    },
    {
        img : "restapi.jpeg",
        title : "Databases and APIs",
        lang : "REST APIs",
        author : "Jacop Garcia",
        rate : 3
    },
    {
        img : "graphql.png",
        title : "Databases and APIs",
        lang : "GraphQL",
        author : "Mia Brown",
        rate :4
    },
    {
        img : "oauth.png",
        title : "Web Development Concepts and Techniques",
        lang : "OAuth",
        author : "Evelyn Nguyen",
        rate : 3.5
    },
    {
        img : "json.png",
        title : "Web Development Concepts and Techniques",
        lang : "JSON",
        author : "Liam Hernandez",
        rate :3.5
    },
    {
        img : "ajax.gif",
        title : "Web Development Concepts and Techniques",
        lang : "AJAX",
        author : "Avey Perez",
        rate : 3
    },
    {
        img : "websockets.png",
        title : "Web Development Concepts and Techniques",
        lang : "Websockets",
        author : "Victoria Kim",
        rate : 4
    },
    {
        img : "responsive.gif",
        title : "Web Development Concepts and Techniques",
        lang : "Responsive Design",
        author : "Ryan Jones",
        rate :4
    },
    {
        img : "accessibility.png",
        title : "Web Development Concepts and Techniques",
        lang : "Accessibility",
        author : "Samantha Martin",
        rate :4
    },
    {
        img : "ux.jpeg",
        title : "Web Development Concepts and Techniques",
        lang : "User Experience (UX)",
        author : "Luke Davis",
        rate :4
    },
    {
        img : "ui.png",
        title : "Web Development Concepts and Techniques",
        lang : "User Interface (UI)",
        author : "Grace Wilson",
        rate :3
    },
    {
        img : "design-systems.jpeg",
        title : "Web Development Concepts and Techniques",
        lang : "Design Systems",
        author : "Noah Martinez",
        rate :4
    },
    {
        img : "performance.png",
        title : "Web Development Concepts and Techniques",
        lang : "Performance Optimization",
        author : "Chloe Taylor",
        rate : 3
    },
    {
        img : "cross-browser.jpeg",
        title : "Web Development Concepts and Techniques",
        lang : "Cross Browser Compatibility",
        author : "David Lee",
        rate :4.5
    },
    {
        img : "seo.jpeg",
        title : "Web Development Concepts and Techniques",
        lang : "Search Engine Optimization (SEO)",
        author : "Emily Kim",
        rate :4
    },
    {
        img : "web-security.jpeg",
        title : "Web Development Concepts and Techniques",
        lang : "Web Security",
        author : "Gabriel Hernandez",
        rate :4
    },
    {
        img : "testing.jpeg",
        title : "Web Development Concepts and Techniques",
        lang : "Testing and Debaugging",
        author : "Avery Perez",
        rate :4.5
    },
    {
        img : "ci-cd.jpeg",
        title : "Web Development Concepts and Techniques",
        lang : "Continuous Integration/Continuous Deployment",
        author : "Madison Davis",
        rate :4
    },
    {
        img : "devops.png",
        title : "Web Development Concepts and Techniques",
        lang : "DevOps",
        author : "Isbella Wilson",
        rate :4
    },
    {
        img : "cloud.jpeg",
        title : "Web Development Concepts and Techniques",
        lang : "Cloud Computing",
        author : "Jacob Garcia",
        rate :4.5
    },
    {
        img : "docker.png",
        title : "Web Development Concepts and Techniques",
        lang : "Docker",
        author : "Mia Brown",
        rate :4
    },
    {
        img : "microservices.png",
        title : "Web Development Concepts and Techniques",
        lang : "Microservices",
        author : "Evelyn Nquyen",
        rate :4
    },
    {
        img : "pwa.png",
        title : "Web Development Concepts and Techniques",
        lang : "Progressive Web Apps (PWA)",
        author : "Liam Hernandez",
        rate :3
    },
    {
        img : "wai.jpeg",
        title : "Web Development Concepts and Techniques",
        lang : "Web Accessibility Initiative (WAI)",
        author : "Avery Perez",
        rate :3.5
    },
    {
        img : "cms.png",
        title : "Web Development Concepts and Techniques",
        lang : "Content Management Systems (CMS)",
        author : "Victoria Kim",
        rate :4
    },
    {
        img : "analytics.png",
        title : "Web Development Concepts and Techniques",
        lang : "Web Analytics",
        author : "Ryan Jones",
        rate :4
    },
]

// const imgName =["html.png" , "css.webp" , "javascript.jpg" , "jquery.png" , "angular.png",
//                 "react.webp" , "vuejs.jpeg" , "nodejs.webp" , "expressjs.webp" , "ruby.jpeg",
//                 "django.jpeg" , "flask.webp" , "sql.png" , "nosql.png" , "restapi.jpeg",
//                 "graphql.png" , "oauth.png" , "json.png", "ajax.gif" ,"websockets.png",
//                 "responsive.gif" , "accessibility.png" ,"ux.jpeg" ,"ui.png" ,"design-systems.jpeg",
//                 "performance.png" , "cross-browser.jpeg" , "seo.jpeg" ,"web-security.jpeg" , "testing.jpeg",
//                 "ci-cd.jpeg" , "devops.png", "cloud.jpeg"  , "docker.png" , "microservices.png",
//                 "pwa.png" , "wai.jpeg" , "cms.png" , "analytics.png"
// ];

// const title = [ "Web Development Languages" , "Web Development Languages" , "Web Development Languages" , "Frontend Frameworks and Libraries" , "Frontend Frameworks and Libraries",
//                 "Frontend Frameworks and Libraries" , "Frontend Frameworks and Libraries" , "Backend Frameworks and Libraries" , "Backend Frameworks and Libraries" ,"Backend Frameworks and Libraries",
//                 "Backend Frameworks and Libraries" , "Backend Frameworks and Libraries" , "Databases and APIs" , "Databases and APIs" ,  "Databases and APIs",
//                 "Databases and APIs" , "Web Development Concepts and Techniques", "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" ,
//                 "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques",
//                 "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques",
//                 "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques",
//                 "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , "Web Development Concepts and Techniques" , 
// ]

// const lang = [ "HTML" , "CSS" , "JavaScript" , "jQuery" , "Angular",
//                 "React" , "Vue.js" , "Node.js" , "Express.js" , "Ruby on Rails",
//                 "Django" , "Flask" , "SQL" , "NoSQL" , "REST APIs",
//                 "GraphQL" , "OAuth" , "JSON", "AJAX" ,"Websockets",
//                 "Responsive Design" , "Accessibility" ,"User Experience (UX)" ,"User Interface (UI)" ,"Design Systems",
//                 "Performance Optimization" , "Cross Browser Compatibility" , "Search Engine Optimization (SEO)" ,"Web Security" , "Testing and Debaugging",
//                 "Continuous Integration/Continuous delivery" , "DevOps" , "Cloud Computing"  , "Docker" , "Microservices",
//                 "Progressive Web Apps (PWA)" , "Web Accessibility Initiative (WAI)" , "Content Management Systems (CMS)" , "Web Analytics"
//             ];

let itemsContainer = document.getElementsByClassName("cards-container");

for(let i=0; i< items.length ; i++){
    itemsContainer[0].innerHTML += `<a href='details.html' class="card">
                                        <img src="images/${items[i].img}" class="card-image">
                                        <div class="card-description">

                                            <p class='item-title' > ${items[i].title} </p>
                                            <p class='item-language'> ${items[i].lang} </p>

                                            <div id ="item${i}-rate" class="rate">
                                            
                                            </div>
                                            <span class='item-author'>Author: ${items[i].author}</span>
                                        </div>
                                    </a>
    `
    
    let rate = document.getElementById(`item${i}-rate`);
    let f = true
    for(let j=0 ; j < 5 ;j++){
        if(j < Math.floor(items[i].rate)){
            rate.innerHTML += "<ion-icon  name='star' style='color: goldenrod;'></ion-icon>"
        }else if (items[i].rate % 1 != 0 && f){
            rate.innerHTML += "<ion-icon name='star-half' style='color: goldenrod;'></ion-icon>"
            f = false;
        }else{
            rate.innerHTML += "<ion-icon name='star-outline' style='color: goldenrod;'></ion-icon>"
        }
    }
}

