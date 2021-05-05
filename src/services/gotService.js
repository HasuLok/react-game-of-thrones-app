// создадим класс для общения с апи по GOT
export default class GotService {
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error (`Could not fetch ${url}, status ${res.status} `);
        }
        return await res.json(); 

    };
    getAllCharacters() {
        return this.getResource("/characters?page=5&pageSize=10"); // получаем всю 5 страницу с 10 героями 
    }
    // метод для получения одного персонажа по ид
    getCharacter(id){
        return this.getResource(`/characters/${id}`);
    }
}

// const got = new GotService();

// got.getAllCharacters()
//     .then(res => {
//         res.forEach((element) => {
//             return console.log(element.name)
//         });
//     });
// got.getCharacter(130)
//     .then(res => console.log(res));    


// const getResource = async (url) => {
//     const res = await fetch(url);
    // if(!res.ok){
    //     throw new Error (`Could not fetch ${url}, status ${res.status} `)
    // }

//     const some = await res.json();
//     return some;
// };



// getResource('https://jsonplaceholder.typicode.com/posts/1000')
// .then((res) => console.log('success', res))
// .catch(error => console.error(error));