import { getRandomInt, getGeneralQuiz, createAllItems } from "./store_logic.js";

export const state = () => ({
	currentComponent: "PlayOdd",
	itemsPointer: 0,
	allItems: [],
});

export const getters = {
	currentComponent: (state) => state.currentComponent,
	currentDesc: (state) => String(state.itemsPointer + 1) + "/5",
	itemsPointer: (state) => state.itemsPointer,
	currentItems: (state) => state.allItems[state.itemsPointer],
	allItems: (state) => state.allItems,
};

export const mutations = {
	incrementItemsPointer(state) {
		++state.itemsPointer;
	},
	changeCurrentComponent(state, nextComponent) {
		state.currentComponent = nextComponent;
	},
	changeCurrentItems(state, nextIndex) {
		state.currentItems = state.allItems[nextIndex];
	},
	setAllItems(state, allItems) {
		state.allItems = allItems;
	},
	clearState(state) {
		state.currentComponent = "PlayOdd";
		state.itemsPointer = 0;
		state.allItems = [];
	},
};

export const actions = {
	async getAllItems({ commit, getters }) {
		// allItemsが空なら取得、値が入ってるなら空にするか聞く
		// DBから5問分ランダムに取得
		const obj = await getGeneralQuiz();
		console.log(obj);
		const quizObj = [
			{ correct: "abc", typo: "typo" },
			{ correct: "cdefg", typo: "typo" },
			{ correct: "hijklmn", typo: "typo" },
			{ correct: "opqr", typo: "typo" },
			{ correct: "stuvwx", typo: "typo" },
		];
		// 整形
		const result = createAllItems(quizObj);
		// 格納
		commit("setAllItems", result);
		console.log(getters.allItems);
	},
	gotoNext({ commit, getters }) {
		// 最初にポインタをインクリメント
		commit("incrementItemsPointer");
		// 更新したポインタに合わせてCurrentItemsを変更
		commit("changeCurrentItems", getters.itemsPointer);
		// コンポーネントを判定してセット
		const nextComponent =
			getters.currentComponent == "PlayOdd" ? "PlayEven" : "PlayOdd";
		commit("changeCurrentComponent", nextComponent);
	},
	clearState({ commit }) {
		commit("clearState");
	},
};
