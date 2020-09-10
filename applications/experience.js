const experienceData = [
    [
        '<span class="details_emphasis">User Interfaces</span> with emphasis on sport & performance concepts.',
        'Web development and responsive brand Landing Pages with leading technologies: <span class="details_emphasis">HTML, CSS, Sass Preprocessor, JavaScript and basic Vue.js</span>. Constantly enhancing tech competences.',
        'Brand commercial campaigns <span class="details_emphasis">graphics designing</span>, trade marketing and large format graphics.',
        '',
        ''
    ],
    [
        'Position & responsibilities of <span class="details_emphasis">Ecommerce Manager</span>.',
        '<span class="details_emphasis">Sales strategies</span> introducing and applying with emphasis on Marketing Performance traffic sources, including <span class="details_emphasis">Google AdWords, Business Facebook Ads, affiliate marketing, dynamic retargeting display ads, organic social media</span> and <span class="details_emphasis">dropshipping platforms</span>.',
        'Drawing up annual <span class="details_emphasis">ecommerce and marketing budget</span> with an indication of single months and possible adjustments.',
        'Weekly, monthly, quarterly, annualy <span class="details_emphasis">reports</span> including business areas such as sales, operational, financial results, effectiveness and competition <span class="details_emphasis">analysis</span>, etc.',
        'Ecommerce and marketing product exposure and <span class="details_emphasis">applying pre-planned marketing campaigns</span>.',
        'Odpowiedzialność za ekspozycję produktu na stronie www oraz wdrażanie zaplanowanych kampanii marketingowych.'
    ],
    [
        'Position & responsibilities of <span class="details_emphasis">Social Media Manager</span>.',
        'Planning, launching and <span class="details_emphasis">optimalization of Business Facebook Ads Campaigns</span>.',
        'Drawing up and <span class="details_emphasis">marketing plans execution</span>.',
        'Targeting online and brick & mortar clients via <span class="details_emphasis">Email & SMS Marketing</span>.',
        '<span class="details_emphasis">Copywriting</span> of affiliate, trade and partnership agreements, events and campaigns regulations and policies.'
    ],
    [
        '<span class="details_emphasis">Tasks planing</span>, team work organization, execution.',
        '<span class="details_emphasis">Organization and supervising</span> of sport and workshop events.',
        'Responsibility for <span class="details_emphasis">maintaining external relations</span> with agencies, partners and other co-working companies.',
        'Ecommerce costs and <span class="details_emphasis">deals negotiations</span>.',
        ''
    ]
];

const experienceBoxes = document.querySelectorAll('.experience_boxes_overlay .experience_box');
const experienceContainer = document.querySelector('.experience_details_container');
const experienceDetails = document.querySelectorAll('.experience_details .details_part');
const arrowBoxIcon = document.querySelectorAll('.corner_circle .icon-right');

let indexArr = []; //Array that will be filled with numbers of clicked boxes to differentiate what to do next (wheater hide box content or hide and show next one)

console.log(document.querySelector('.experience_overlay').offsetHeight);
// console.log(document.getElementById('scroll_about').);

experienceBoxes.forEach((box,index) => { //Interaction with each of experience boxes
    box.addEventListener('click', () => {

        let arrInsideNumber = indexArr[0]; //Variable needed to set background linear-gradient and color
        //When clicked NEVER BEFORE (e.g. after page refresh) arrInsideNumber is UNDEFINED because indexArr is EMPTY at first
        //...so we have to put through condition below
        if (arrInsideNumber !== undefined) {
            experienceBoxes[arrInsideNumber].setAttribute('style', 'background: #fff; color: #000');
            arrowBoxIcon[arrInsideNumber].setAttribute('style', 'transform: rotate(-45deg)');
        }
        
        //Hide previous content before showing next
        experienceContainer.classList.add('experience_details_container-reverse');
        experienceContainer.classList.remove('experience_details_container-forward');

        
        //If user clicks for A SECOND TIME already clicked box --------- 2 ----------
        if (indexArr[0] === index) { //"0" in this case means not box nr 0 BUT the first item of array which is clicked box nr
            
            indexArr = []; //Delete array items if users clicks second time |THE SAME| box
        }
        //If user clicks the box for A FIRST TIME --------- 1 ----------
        else {
            console.log(document.querySelector('.experience_overlay').offsetHeight);
            box.setAttribute('style', 'background: linear-gradient(-30deg, #3f9390, #225397); color: #fff');
            arrowBoxIcon[index].setAttribute('style', 'transform: rotate(90deg)');

            indexArr = []; //Delete array items if users clicks second time but |ANOTHER| box that we could...
            indexArr.push(index); //...push another value of next box
            setTimeout(() => {

                //Swap experience details content text regarding number of clicked box
                for(let i = 0; i<experienceDetails.length; i++) {
                    experienceDetails[i].innerHTML = experienceData[index][i];
                }
                //and then...
                //...show the content
                experienceContainer.classList.add('experience_details_container-forward');
                experienceContainer.classList.remove('experience_details_container-reverse');
            },150);
        }

        
    })
});