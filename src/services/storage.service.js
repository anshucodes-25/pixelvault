
export class StorageService{

    static get(key){
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    static set(key,value){
       localStorage.setItem(key,JSON.stringify(value))
       return true;
    }

    static remove(key){
        localStorage.removeItem()
    }
}