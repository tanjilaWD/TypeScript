//built-in-data type: number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = 'Tanjila';
lastName = ' Khatun';
isActivated = true;

fullName = firstName.concat(lastName);

console.log(`Your id: ${userId}, userName:${fullName}, account activated: ${isActivated}`);

function display(): void{
    console.log('Hi I am Tanjila'); 
}
display();