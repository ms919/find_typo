import { getGeneralQuiz, createAllItems } from "./store_logic.js";
import fixed from "~/const/const.js";

export const state = () => ({
	currentComponent: "PlayOdd",
	itemsPointer: 0,
	hintCount: [],
	dbData: [],
	allItems: [],
	startTime: 0,
	timeArr: [],
});

export const getters = {
	currentComponent: (state) => state.currentComponent,
	currentDesc: (state) => String(state.itemsPointer + 1) + "/5",
	itemsPointer: (state) => state.itemsPointer,
	hintCount: (state) => state.hintCount,
	dbData: (state) => state.dbData,
	currentItems: (state) => state.allItems[state.itemsPointer],
	allItems: (state) => state.allItems,
	startTime: (state) => state.startTime,
	timeArr: (state) => state.timeArr,
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
	addHintCount(state, pointer) {
		state.hintCount.push(pointer);
	},
	setDbData(state, dbData) {
		state.dbData = dbData;
	},
	setAllItems(state, allItems) {
		state.allItems = allItems;
	},
	setStartTime(state, time) {
		state.startTime = time;
	},
	addTimeArr(state, time) {
		state.timeArr.push(time);
	},
	clearData(state) {
		state.currentComponent = "PlayOdd";
		state.itemsPointer = 0;
		state.allItems = [];
		state.hintCount = [];
		state.dbData = [];
		state.timeArr = [];
	},
	clearTime(state) {
		state.startTime = 0;
	},
};

export const actions = {
	async getAllItems({ commit, getters, dispatch }) {
		// データ初期化
		dispatch("clearState");
		// DBから5問分ランダムに取得
		const dataArr = await getGeneralQuiz();
		console.log(dataArr);
		// 整形
		const result = createAllItems(dataArr);
		// 格納
		commit("setAllItems", result);
		commit("setDbData", dataArr);
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
		commit("clearData");
		commit("clearTime");
	},
	setStartTime({ commit }, time) {
		commit("setStartTime", time);
	},
	addTimeArr({ commit, getters }, endTime) {
		const timeArr = getters.timeArr;
		if (timeArr.length < fixed.NUM_OF_QUESTION) {
			commit("addTimeArr", endTime - getters.startTime);
		}
	},
	addHintCount({ commit, getters }, pointer) {
		if (getters.hintCount.length < fixed.NUM_OF_QUESTION) {
			commit("addHintCount", pointer);
		}
	},
};
