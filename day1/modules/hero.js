import { Person } from "./person";
class Hero extends Person{
    title;
    #firstname;
    #lastname;
    static version = 1001;
    #power;
    constructor(htitle, hfname, hlname, hpower, hisp){
         super(hisp);
         this.title = htitle;
         this.#firstname = hfname;
         this.#lastname = hlname;
         this.#power = hpower;
    }
    fullname(){
     return this.#firstname+" "+this.#lastname;
    }
    set power(npower){
     this.#power = npower;
    }
    get power(){
     return this.#power;
    }
 };

 export { Hero };