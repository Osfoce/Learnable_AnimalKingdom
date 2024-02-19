class AnimalKingdom {
    constructor(){
        if(this.constructor == AnimalKingdom)
        {
            throw new Error('I am the boss... and immutable')
        }
    }
    vertebrates(){
        this.hasBackBone = true;
        this.hasEndoSkeleton = true;
        this.isMammal = true;
    }
    inVertebrates(){
        hasBackBone = false;
        hasEndoSkeleton = false;
        isMammal = false;
    }
    coldBlodded(){
        isAquatic = true;

    }
    warmBlodded(){
        isAquatic = false;
    }
}

class Mammal extends AnimalKingdom {
    vertebrates(){
        this.hasBackBone = true;
        this.hasEndoSkeleton = true;
        this.isMammal = true;
    }
    warmBlodded(){
        isAquatic = false;
    }
}

const peter = new Mammal

console.log(peter)
//  Still working on it

