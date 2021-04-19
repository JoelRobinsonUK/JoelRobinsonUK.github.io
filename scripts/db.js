// db.collection('games').onSnapshot((snapshot) => {
//     //console.log(snapshot.docChanges());
//     snapshot.docChanges().forEach(change => {
//         //console.log(change, change.doc.data(), change.doc.id);
//         if (change.type === 'added') {
//             //add data to page
//             addModal(change.doc.data(), change.doc.id);
//         }
//         if (change.type === 'removed') {
//             //remove data from page
//         }
//     });
// });

const carousel = document.querySelector('#portfolio-list');
const modals = document.querySelector('#modals');

db.collection('games').get().then((snapshot) => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        console.log(doc.data().title);
        addProject(doc);
    });

    $('.carousel').carousel({
        indicators: true,
        fullWidth: true
    });
    $('.modal').modal();
});

function addProject(doc) {

    //console.log("New image");

    let a = document.createElement('a');
    a.setAttribute('data-target', doc.id);
    a.setAttribute('class', "carousel-item modal-trigger");

    let img = document.createElement('img');
    img.setAttribute('class', "project");
    img.setAttribute('style', "height: 100%; width: auto;");
    img.setAttribute('alt', "trouble");
    img.setAttribute('src', doc.data().image);

    a.appendChild(img);
    carousel.appendChild(a);


    let card = document.createElement('div');
    card.setAttribute('id', doc.id);
    card. setAttribute('class', "card modal");

    let video = document.createElement('div');
    video.setAttribute('class', "video-container");

    let frame = document.createElement('iframe');
    frame.setAttribute('frameborder', "0");
    frame.setAttribute('src', doc.data().video);
    frame.allowFullscreen = true;

    let content = document.createElement('div');
    content.setAttribute('class', "card-content row")

    let abstract = document.createElement('div');
    abstract.setAttribute('class', "col s8 l8 offset-s2 offset-l2")

    let title = document.createElement('h4');
    title.setAttribute('class', "center");
    title.textContent = doc.data().title;

    abstract.appendChild(title);
    
    doc.data().abstract.forEach(line => {
        let p = document.createElement('p');
        p.setAttribute('class', "abstract-text");
        p.setAttribute('style', "margin-top: 10px;")
        p.textContent = line;
        abstract.appendChild(p);
    });

    if(doc.data().link){
        let link = document.createElement('a');
        link.setAttribute('class', "play-link center")
        link.setAttribute('href', doc.data().link);

        let itch = document.createElement('i');
        itch.setAttribute('class', "fab fa-itch-io medium");

        let span = document.createElement('span');
        span.setAttribute('class', "play");
        span.textContent = " Play on itch.io";

        link.appendChild(itch);
        link.appendChild(span);

        abstract.appendChild(link);
    }
    
    // <a class="" style="color: #fa5c5c;"
    //                         href="https://joel-robinson.itch.io/todd-howard-is-going-to-be-late" target="_blank">
    //                         <i class="fab fa-itch-io medium"></i><span class="" style="font-size: xx-large;"> Play on
    //                             itch.io</span>
    //                     </a>
    
    content.appendChild(abstract);
    video.appendChild(frame);
    card.appendChild(video);
    card.appendChild(content);

    modals.appendChild(card);


    //carousel.appendChild += html;

    // html = `
    //     <div id="${id}" class="card modal"">
    //         <div class="video-container">
    //             <iframe src="${data.video}" frameborder="0" allowfullscreen></iframe>
    //         </div>
    //         <div class="card-content">
    //             <div class="row">
    //                 <div class="col s18 l8 offset-s2 offset-l2" style="border-radius: 8px;">
    //                     <p style=" font-size: large;">
    //                     ${data.abstract}
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // `;

    // modals.innerHTML += html;

}