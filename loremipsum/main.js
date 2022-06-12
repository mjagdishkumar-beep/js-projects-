const text = [
    `Im baby keytar migas brooklyn chambray bitters. Tumblr tattooed chicharrones, put a bird on it semiotics brunch drinking vinegar neutra vice hot chicken wolf activated charcoal. Humblebrag kogi pour-over viral mlkshk mixtape synth, knausgaard pinterest bushwick bitters 8-bit biodiesel drinking vinegar kinfolk. Ennui literally bespoke mlkshk.`,
    `Swag deep v before they sold out, blue bottle waistcoat tilde freegan lomo hoodie kombucha literally prism. DIY umami seitan forage paleo. Chillwave man braid disrupt hashtag ugh. Raclette glossier knausgaard, lyft schlitz cred godard small batch fam hell of. Banh mi heirloom drinking vinegar keffiyeh +1 thundercats vegan pork belly.`,
    `VHS normcore food truck, swag direct trade kogi literally migas lyft farm-to-table locavore. Tote bag pabst occupy, pok pok craft beer four dollar toast distillery migas pinterest raclette literally narwhal mustache. Palo santo jean shorts selvage pop-up DSA leggings. Austin raw denim occupy plaid bespoke distillery.`,
    `Dreamcatcher actually hot chicken mumblecore, freegan everyday carry keytar 90's live-edge banjo paleo. Yes plz art party austin wolf cold-pressed try-hard. Fixie biodiesel chicharrones cold-pressed raw denim. Street art intelligentsia crucifix man braid, pop-up everyday carry letterpress narwhal kickstarter.`,
    `Trust fund food truck intelligentsia raclette PBR&B actually hoodie. PBR&B migas activated charcoal la croix paleo freegan authentic lumbersexual meditation. Gluten-free tattooed YOLO whatever, kale chips bespoke synth migas raw denim tacos cardigan hell of microdosing. 3 wolf moon kitsch lomo pour-over celiac before they sold out.`,
    `Marfa yr helvetica, waistcoat mixtape seitan four dollar toast pork belly kinfolk tbh actually scenester. Activated charcoal beard distillery, bespoke 8-bit small batch post-ironic put a bird on it selfies vexillologist tilde copper mug man braid kale chips pickled. Lyft tbh tumblr distillery. Franzen iceland cornhole waistcoat jean shorts biodiesel lo-fi aesthetic ramps. Butcher kinfolk next level, edison bulb godard pork belly coloring book skateboard brunch.`,
    `Edison bulb crucifix food truck brunch messenger bag affogato mumblecore. VHS lo-fi four loko organic williamsburg, migas 90's paleo typewriter +1 listicle hot chicken gastropub gochujang irony. Four dollar toast gochujang green juice, vexillologist vape shabby chic migas craft beer lumbersexual dreamcatcher adaptogen neutra. Gastropub green juice tousled, twee banh mi microdosing viral DIY tumblr lyft franzen bitters man braid.`,
    `Offal lo-fi glossier umami. Twee viral biodiesel disrupt small batch post-ironic YOLO offal. Four loko tumblr keffiyeh, pickled vaporware copper mug tumeric selfies scenester beard helvetica pug. Tote bag salvia echo park scenester chartreuse butcher pork belly paleo hammock yr lomo banjo fixie fingerstache disrupt.`,
    `Succulents banh mi unicorn knausgaard. Before they sold out live-edge tbh man bun succulents. Cardigan direct trade banh mi deep v, salvia 90's squid. Chartreuse iceland migas, chillwave pour-over chambray bespoke DSA schlitz. Chambray yuccie blue bottle helvetica truffaut glossier PBR&B af, ramps man bun.`,
    `Leggings air plant tbh cronut kinfolk lyft meh artisan. Fashion axe poke jianbing, vaporware butcher gentrify vegan waistcoat hella la croix disrupt taxidermy cornhole letterpress succulents. Scenester tonx lyft, prism hot chicken glossier celiac next level bicycle rights gluten-free praxis. Gentrify helvetica air plant listicle chartreuse mlkshk, semiotics bespoke tote bag next level hammock readymade kickstarter bicycle rights. Praxis selfies 90's gastropub, shoreditch palo santo ugh pok pok gentrify hot chicken try-hard.`,
]

const form = document.querySelector('.lorem-form');
const numofpara = document.querySelector('#numofpara');
const numofparaRange = document.querySelector('#numofparaRange');
const result = document.querySelector('.lorem-text');

function syncParaNumbers(e){
    const value = e.target.values;
    numofpara.value = value;
    numofparaRange.value = value;
}

form.addEventListener('submit', e =>{
    e.preventDefault();
    const value = parseInt(numofpara.value);
    let tempText = text.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
})

numofpara.addEventListener("input", syncParaNumbers);
numofparaRange.addEventListener("input", syncParaNumbers);
