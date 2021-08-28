import { User } from './models/User';

const user = User.buildUser({ id: 1 });
user.set({ name: 'New Name', age: 56 });
user.save();

setTimeout(() => {
	console.log(user);
}, 4000);
