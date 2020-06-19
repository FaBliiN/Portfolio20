
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

const ABOUT_ANIMATION_BUTTON = document.getElementById("aboutMeAnimation");
const ABOUT_ANIMATION_CONTAINER = document.getElementById("aboutContainer");
const HEADER_NAME = document.getElementById("header_name");
const HEADER_MENU = document.getElementById("header_menu");
const $MENU_BUTTON_HEADER = document.getElementById("menu_button_header");
const $CLOSE_BUTTON_HEADER = document.getElementById("close_button_header");
const $HEADER_MENU_BUTTONS_HTMLCOL = document.getElementsByClassName("header_menu_buttons");
let $HEADER_MENU_BUTTONS_ARRAY = Array.from($HEADER_MENU_BUTTONS_HTMLCOL);
$HEADER_MENU_BUTTONS_ARRAY.map((element)=> element.addEventListener('click', headerToggleHide));



const BODY_HERO = document.getElementById("hero_container");
const SECTION_ABOUTME = document.getElementById("section_aboutMe");
const $SECTION_PROJECTS = document.getElementById("section_projects");

const SECTION_PROJECTS_WINDOW = document.getElementById("section_pojects_window");
const SECTION_SKILLS_WINDOW = document.getElementById("section_skills_window");

const $ARROW_LEFT = document.getElementById("arrow_left_button");
const $ARROW_RIGHT = document.getElementById("arrow_right_button");

const $GRID_CONTROLS = document.getElementById("section_projects_grid_controls");
const $GRID_VISION = document.getElementById("section_projects_grid_vision");
const $GRID_COBOTS = document.getElementById("section_projects_grid_cobots");
const $CIRCLE_BUTTON_DIV = document.getElementById("circle_button_div")
const PROJECT_GRID_ITEM_HTMLCOLL = document.getElementsByClassName("projects_grid_item");
let PROJECT_GRID_ITEM_ARRAY = Array.from(PROJECT_GRID_ITEM_HTMLCOLL);



const $CLOSE_BUTTON_PROJECTS = document.getElementById("close_button_projects");
const CLOSE_BUTTON_SKILLS_HTMLCOL = document.getElementsByClassName("close_button_skills");
let $CLOSE_BUTTON_SKILLS_ARRAY = Array.from(CLOSE_BUTTON_SKILLS_HTMLCOL);



$CLOSE_BUTTON_HEADER.addEventListener('click', headerToggleHide);
$MENU_BUTTON_HEADER.addEventListener('click', headerToggleHide);

function headerToggleHide(){
    if(window.innerWidth<730){
    document.getElementById("header2").classList.toggle("hide"); 
    document.getElementById("menu_button_header").classList.toggle("hide");
    }
}


document.getElementById("skills_controls_button").addEventListener('click', hideControlsWindow);
document.getElementById("close_skills_controls").addEventListener('click', hideControlsWindow);
function hideControlsWindow (){ document.getElementById("skills_controls_window").classList.toggle("hide");}

document.getElementById("skills_vision_button").addEventListener('click', hideVisionsWindow);
document.getElementById("close_skills_vision").addEventListener('click', hideVisionsWindow);
function hideVisionsWindow (){ document.getElementById("skills_vision_window").classList.toggle("hide");}

document.getElementById("skills_programming_button").addEventListener('click', hideProgrammingWindow);
document.getElementById("close_skills_programming").addEventListener('click', hideProgrammingWindow);
function hideProgrammingWindow (){ document.getElementById("skills_programming_window").classList.toggle("hide");}

//document.getElementById("skills_managment_button").addEventListener('click', hideManagmentWindow);
document.getElementById("close_skills_managment").addEventListener('click', hideManagmentWindow);
function hideManagmentWindow (){ document.getElementById("skills_managment_window").classList.toggle("hide");}

document.getElementById("skills_idioms_button").addEventListener('click', hideIdiomsWindow);
document.getElementById("close_skills_idioms").addEventListener('click', hideIdiomsWindow);
function hideIdiomsWindow (){ document.getElementById("skills_idioms_window").classList.toggle("hide");}

//document.getElementById("skills_web_button").addEventListener('click', hideWebWindow);
document.getElementById("close_skills_web").addEventListener('click', hideWebWindow);
function hideWebWindow (){ document.getElementById("skills_web_window").classList.toggle("hide");}


const BLUE_BUTTONS_HTMLCOLL = document.getElementsByClassName("button_blue");
let BLUE_BUTTONS_ARRAY = Array.from(BLUE_BUTTONS_HTMLCOLL);
const LETS_WORK_TEXT = document.getElementById("letswork_text");



ABOUT_ANIMATION_CONTAINER.addEventListener('click',dissolve); //INICIO

let i , section;
$ARROW_RIGHT.addEventListener('click', toggleHideProjects )
$ARROW_LEFT.addEventListener('click', toggleHideProjects )

$GRID_CONTROLS.addEventListener('click', toggleHideProjects);
$GRID_VISION.addEventListener('click', toggleHideProjects);
$GRID_COBOTS.addEventListener('click', toggleHideProjects);

$CLOSE_BUTTON_PROJECTS.addEventListener('click', () => SECTION_PROJECTS_WINDOW.classList.toggle("hide"));
// BLUE_BUTTONS_ARRAY.map((element)=> element.addEventListener('click', togglehide));
// $CLOSE_BUTTON_SKILLS_ARRAY.map((element)=> element.addEventListener('click', togglehide));




// function togglehide(){


// }

function updateProjectsWindowElements(numeroProjecto){

    document.getElementById("section_pojects_window_title").innerHTML = section[numeroProjecto].titulo;
    document.getElementById("section_pojects_window_image").src = section[numeroProjecto].imagen
    document.getElementById("section_projects_window_description").innerHTML = section[numeroProjecto].descipcion;
    document.getElementById("boton"+numeroProjecto).classList.add("circuloActivo");
}


function toggleHideProjects(){
    if(this.classList[1]=="projects_grid_item") {
        SECTION_PROJECTS_WINDOW.classList.toggle('hide');

        if(this.id == $GRID_CONTROLS.id) {section = controls}
        if(this.id == $GRID_VISION.id) {section = vision}
        if(this.id == $GRID_COBOTS.id) {section = cobots}


        $CIRCLE_BUTTON_DIV.innerHTML = "";
        let j=0;
        section.forEach( () => { $CIRCLE_BUTTON_DIV.innerHTML = $CIRCLE_BUTTON_DIV.innerHTML+`<i id=boton${j} class="fas fa-circle circle_button  section_pojects_window_buttons_circles"></i>`;
        j++})
        i = 0;
        updateProjectsWindowElements(i);
    }

    if(this.id == $ARROW_RIGHT.id && i < section.length-1) {
        document.getElementById("boton"+i).classList.remove("circuloActivo");
        i++;
        updateProjectsWindowElements(i);
    }

    if(this.id == $ARROW_LEFT.id && i > 0) {
        document.getElementById("boton"+i).classList.remove("circuloActivo");
        i--;
        updateProjectsWindowElements(i);
    }

}


function dissolve(){
    if(window.innerWidth>730) { document.getElementById("header2").classList.remove("hide");} 
    else{  $MENU_BUTTON_HEADER.classList.remove("hide");  }

    ABOUT_ANIMATION_CONTAINER.classList.add("dissolve");
    HEADER_NAME.classList.add("dissolve");

    ABOUT_ANIMATION_CONTAINER.addEventListener('animationend', hideElementnZoom);
    HEADER_NAME.addEventListener('animationend', hideElement);


  // document.getElementById("header2").classList.remove("hide");
  //  $MENU_BUTTON_HEADER.classList.remove("hide")
    document.getElementById("section_aboutMe").classList.remove("hide");
    document.getElementById("section_projects").classList.remove("hide");
    document.getElementById("section_skills").classList.remove("hide");
    document.getElementById("section_letswork").classList.remove("hide");
    document.getElementById("section_form").classList.remove("hide");
    document.getElementById("footer").classList.remove("hide");

}

function hideElement(){
    this.classList.add('hide');
}

function hideElementnZoom(){
    this.classList.add('hide');
    
    BODY_HERO.classList.add("zoom") //// regresar a "zoom"
    BODY_HERO.addEventListener("animationend", hideElement);

    document.getElementById("html").classList.remove("overflow_hidden");
 
}

function ShowWebSite(){
    BODY_HERO.classList.add("hide");
    if(window.innerWidth>730) {   $MENU_BUTTON_HEADER.classList.add("hide");  }
    else{ document.getElementById("header2").classList.add("hide");}

}



function blink(){

    ABOUT_ANIMATION_BUTTON.style.borderColor = '#1bc8f7';
    setTimeout(() => {

        ABOUT_ANIMATION_BUTTON.style.borderColor = '#0086ac';
        setTimeout(() => {

            ABOUT_ANIMATION_BUTTON.style.borderColor = '#1bc8f7';
            setTimeout(() => {

                ABOUT_ANIMATION_BUTTON.style.borderColor = '#0086ac';
                setTimeout(() => {
                    blink();
                }, 2500);

            }, 150);

        }, 150);

    }, 200);

}

 setTimeout(() => {
     blink();
 }, 3500);


 AOS.init();



 class projecto
 {
   constructor(titulo, imagen, descripcion)
   {
     this.titulo = titulo;
     this.imagen = imagen;
     this.descipcion = descripcion;
   }

 }



let controls = [];
controls.push(new projecto ("Tire & Wheel Conveyor @Ford HSAP","src/images/controls1.png","<p>2019</p><br> During the Christmas shutdown at HSAP Finnal Assembly Plant my team was designited for the controls startup of the new tire and wheel conveyor. This new conveor was designed to be able to install the tires in the new Ford model (CX-430 Project). This Line was controlled by a <span class='blue_text'>GuardLogix 5570</span> running more than 30 motors via <span class='blue_text'>MOVIFIT®</span> for the different accumulation belts segments. "));
controls.push(new projecto ("CX-430 @Ford HSAP","src/images/controls2.png","<p>2019</p><br> In the summer shutdown. As controls team we were designated to update many conveyors and stations around the HSAP Finnal Assembly Plant. This included:<br> <ul> <li>Fascias new conveyor segment</li> <li>New Shuttle System</li>  <li>New IP Friction Drive System</li> <li>New stop at Fork tranfer</li> <li>New stop at WOPR Cell</li> <li>Relocation Of End of travels at VDL</li> <li>New CAL1 conveyor system</li></ul> "

));

let vision = [];
vision.push(new projecto ("8F project @Ford ITP","src/images/vision1.png","<p>2017</p><br> I was the leading machine vision systems engineer for the 8F transmition program for all the Hanwha Lines. I created more that <span class='blue_text'>40 aplications</span> including:<br><br> <ul> <li>Color Matching</li> <li>Parts Presence/Absence</li>  <li>Parts Correct Installation</li>  <li>2D/Data Matrix Read</li></ul><br> Using PC Based cameras running <span class='blue_text'>Ether inspect</span> and <span class='blue_text'>Cognex VisionPro</span>. I was responsable for the application analysis, the vision systems integration and capability studies to create reliable machine vision solutions"));
vision.push(new projecto ("Production Support Engineer @Ford ITP","src/images/vision2.png","<p>2018</p><br> Once OEMs finished the startup of their new lines at Ford ITP, for the 6F and 8F transmitions program. I remain to support the Machine Vision Systems for all the <span class='blue_text'>Asembly area</span> lines. I improved programs performance, implemented new inspections and trained Ford engineers to provide support once I left."));
vision.push(new projecto ("Machine Visions Startup @Ford Dragon","src/images/vision3.png","<p>2018</p><br> We were supporting <span class='blue_text'>Thysenkrup</span> team with the startup of the machine vision systems at Ford Dragon, during the first weeks of production. All camera programs were built in the OEM flor, so we needed to adjust them to inspect real production parts and deliver <span class='blue_text'>capability studies</span> for all of them"));
vision.push(new projecto ("Production Support Engineer @GM TTO","src/images/vision4.png","<p>2020</p><br> At GM Toledo, OH. I was supporting production with the machine vision systems. I had to keep line wunning everytime we had a trouble with any camera, keeping the capability of all the systems. <br><br>  <p>Because at that plant they have old and new vision systems cameras working together, I had to learn the different firmware versions and difference between all of them. I was in charge of 6F, 8F and machinning Areas.</p>"));

let cobots = [];
cobots.push(new projecto ("Oil Leak & Connectors latched @Ford Dragon","src/images/cobots.png","<p>2018</p><br> So far my favorite project. I was working for <span class='blue_text'>Micromatic</span>. They develop a system to inspect Oil leaks and connectors after motor cold test. In the first station cameras were using <span class='blue_text'>UV</span> light that made the oil looks green in the images. In the second stations cameras were looking for all the connectors to be latched. For that we were using <span class='blue_text'>4 Universal Robots UR3</span> to move cameras around the motors to take pictures of it. I was there as a vision systems engineer, controls guys left a few days after I arrived, and I had to learn how to operate the robots to improve the Field of view off all camera points."));


let scrollRef = 0;

window.addEventListener('scroll', function() {
  // increase value up to 10, then refresh AOS
  scrollRef <= 1 ? scrollRef++ : AOS.refresh();
});