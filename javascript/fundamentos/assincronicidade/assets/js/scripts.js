const BASE_URL_CAT = 'https://api.thecatapi.com/v1/images/search';
const BASE_URL_DOG = 'https://api.thedogapi.com/v1/images/search';
const catBtn = document.getElementById('change-cat');
const dogBtn = document.getElementById('change-dog')
const Img = document.getElementById('img')

const getCat = async() =>{
    try{
        const data = await fetch(BASE_URL_CAT);
        const json = await data.json();

        return json[0]["url"];

    } catch(e){
        console.log(e.message);
    }
};

const getDog = async() =>{
    try{
        const data = await fetch(BASE_URL_DOG);
        const json = await data.json();
        return json[0]["url"];
    } catch(e){
        console.log(e.message);
    }
};

const loadImgCat = async() =>{
    Img.src = await getCat();
}

const loadImgDog = async() =>{
    Img.src = await getDog();
}


catBtn.addEventListener('click', loadImgCat);
dogBtn.addEventListener('click', loadImgDog);


loadImgCat();