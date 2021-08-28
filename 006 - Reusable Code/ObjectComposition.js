const onScoring = (state) => {
	const scores = () => {
		state.chances -= 1;
		state.goals += 1;
	};

	return { scores };
};

const onMissing = (state) => {
	const miss = () => {
		state.chances -= 1;
	};

	return { miss };
};

const Player = (state) => {
	return Object.assign(state, onScoring(state), onMissing(state));
};

const player = Player({ name: 'Ronaldo', chances: 10, goals: 0 });
console.log(player);
player.scores();
player.miss();
console.log(player);
