console.log('app.js')
console.log('this is $', $)

if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

let sheetID = '1W2rS6S1Qy3rwI0i-FWU3PIaEsxifn49PMLESV9TE7A4'
let sheetUrl = 'https://docs.google.com/spreadsheets/d/1W2rS6S1Qy3rwI0i-FWU3PIaEsxifn49PMLESV9TE7A4/edit?usp=sharing'
let sheetAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`

const render = (projectsArr) => {
    console.log('this is projectArr', projectsArr)
}



const createPortfolio = (projectsArr) => {
    let $repo = $('<a>')
    $repo.addClass('btn')
    $repo.attr("href", projectsArr.repo)
    $repo.attr("target", "_blank")
    $repo.text('Github')

    let $live = $('<a>')
    $live.addClass('btn')
    $live.attr("href", projectsArr.live)
    $live.attr("target", "_blank")
    $live.text('Live')

    let $card = $('<div>')
    $card.addClass('card')

    let $title = $('<p>')
    $title.addClass('card-title')
    $title.text(projectsArr.title)

    let $img = $('<img>')
    $img.addClass('card-image')
    $img.attr('src', projectsArr.image)

    $card.append($img)
    $card.append($title)
    $card.append($repo)
    $card.append($live)
    $('.portfolio').append($card)
    console.log('This is create', $card)

    $img.on('click', () => {
        window.open(projectsArr.live)
    })
}


$.ajax({url:sheetAsJSON})
    .then( data => {
        //return new array of data
        const projects = data.feed.entry.map(project =>{
            return{
                title: project.gsx$title.$t, 
                image: project.gsx$image.$t,
                description: project.gsx$description.$t,
                repo: project.gsx$repo.$t,
                live: project.gsx$live.$t
            }
        })
        console.log('this is project', projects)
        render(projects)
        projects.forEach(createPortfolio)
        
    })

    // $.ajax({
    //     url: `http://www.omdbapi.com/?apikey=53aa2cd6&t=${userInput}`
    // }).then( data => {
    //     $('#title').html(data.Title)
    //     $('#year').html(data.Year)
    //     $('#rated').html(data.Rated)
    // }, () => {
    //     console.log('bad request')
    // })