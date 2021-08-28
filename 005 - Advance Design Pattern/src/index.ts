import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5, 0]);
const characterCollection = new CharactersCollection('APdsfnkqongbk');
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(-5);
linkedList.add(1);
linkedList.add(20);

numberCollection.sort();
linkedList.sort();
characterCollection.sort();

console.log(numberCollection.data);
console.log(characterCollection.data);
console.log(linkedList.print());
