export const state = () => ({
	currentComponent: "Rule",
	currentDesc: "Rule",
});

export const getters = {
  currentComponent: state => state.currentComponent,
  currentDesc: state => state.currentDesc
}

export const mutations = {
	changeCurrentComponent(state, { nextComponent, nextDesc }) {
		state.currentComponent = nextComponent;
		state.currentDesc = nextDesc;
	},
};
