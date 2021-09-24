export const state = () => ({
	itemsPointer: 0,
	currentItems: null,
	allItems: null,
});

export const getters = {
	currentDesc: (state) => String(state.itemsPointer + 1) + "/5",
	currentItems: (state) => state.currentItems,
	allItems: (state) => state.allItems,
};

export const mutations = {
	incrementItemsPointer(state) {
		++state.itemsPointer;
	},
	changeCurrentItems(state, nextIndex) {
		state.currentItems = allItems[nextIndex];
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
		const allItems = [
			[
				"<p class='orange quiz-p'>abcde</p>",
				"<p class='quiz-p' onclick='gotoNext'>typo</p>",
				"<p class='quiz-p lightblue'>abcde</p>",
			],
			[
				"<p class='pink quiz-p'>abcde</p>",
				"<p class='quiz-p'>abcde</p>",
				"<p class='quiz-p'>abcde</p>",
			],
		];
		// 格納
		commit("setAllItems", allItems);
	},
	gotoNext() {
		confirm("hoge");
	},
};

// const private = {
// 	formatItems() {},
// };
