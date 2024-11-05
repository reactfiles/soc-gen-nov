class Person1{
    superpower = "I can Walk";
    constructor(hsp){
        this.superpower = hsp;
    }
};

class Person2{
    superpower = "I can Walk";
    constructor(hsp){
        this.superpower = hsp.toUpperCase();
    }
};

// export { Person1, Person2 }

// alias export 
// export { Person as Pson }

// default
export default Person1;