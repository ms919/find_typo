import frozen_const from '~/const/const.js';

export const state = () => ({
	currentComponent: "PlayOdd",
	itemsPointer: 1,
	// allItems: null,
	allItems: {
		1: {
			1: [
				"<p class='orange quiz-p'>abcde</p>",
				"<p class='quiz-p' id='typo'>typo</p>",
				"<p class='quiz-p lightblue'>abcde</p>",
			],
			2: ["<p class='pink quiz-p'>abcde</p>"],
		},
		2: {
			1: [
				"<p class='quiz-p' id='typo'>typo</p>",
				"<p class='quiz-p blue'>abcde</p>",
			],
			2: ["<p class='pink quiz-p'>abcde</p>"],
		},
		3: {
			1: [
				"<p class='pink quiz-p'>abcde</p>",
				"<p class='quiz-p skyblue' id='typo'>typo</p>",
			],
			2: ["<p class='green quiz-p'>abcde</p>", "<p class='quiz-p'>abcde</p>"],
		},
		4: {
			1: [
				"<p class='pink quiz-p'>abcde</p>",
				"<p class='quiz-p skyblue' id='typo'>typo</p>",
			],
			2: ["<p class='pink quiz-p'>abcde</p>"],
		},
		5: {
			1: [
				"<p class='orange quiz-p'>abcde</p>",
				"<p class='quiz-p' id='typo'>typo</p>",
				"<p class='quiz-p lightblue'>abcde</p>",
			],
			2: ["<p class='pink quiz-p'>abcde</p>"],
		},
	},
});

export const getters = {
	currentComponent: (state) => state.currentComponent,
	currentDesc: (state) => String(state.itemsPointer) + "/5",
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
};

export const actions = {
	getAllItems({ commit }) {
		// allItemsが空なら取得、値が入ってるなら空にするか聞く
		// DBから5問分ランダムに取得
		// 整形
		// 格納
		commit("setAllItems", allItems);
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
		confirm(frozen_const.TYPO_ID);
	},
};
