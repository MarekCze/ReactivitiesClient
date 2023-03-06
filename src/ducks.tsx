export interface Duck {
	name: string;
	numLegs: number;
	makeSound: (sound: string) => void;
}

const myDuck: Duck = {
	name: 'lil ducky',
	numLegs: 2,
	makeSound: (sound: string) => console.log(sound)
}

const yourDuck: Duck = {
	name: 'ducky cheese',
	numLegs: 2,
	makeSound: (sound: string) => console.log(sound)
}

export const ducks = [myDuck, yourDuck];