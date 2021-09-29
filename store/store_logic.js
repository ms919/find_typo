import fixed from "~/const/const.js";

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const createAllItems = (quizObj) => {
	// quizObjを値渡し
	let itemsInfoArr = quizObj.concat();

	[...Array(fixed.NUM_OF_QUESTION)].map((_, i) => {
		// 各行の個数を決める
		itemsInfoArr[i].words_per_row = decideWordsPerRow(itemsInfoArr[i].correct);
		// タイポの場所を決める
		itemsInfoArr[i].typo_position = decideTypoPosition(
			fixed.MAX_ROW_NUM,
			itemsInfoArr[i].words_per_row
		);
		// 文字色を決める
		itemsInfoArr[i].color_of_words = decideWordsColor(
			itemsInfoArr[i].words_per_row
		);
	});
	console.log(itemsInfoArr);
	// 出来上がった情報オブジェクトを元に結果オブジェクトを生成
	return formatAllItems(itemsInfoArr);
};

const decideWordsPerRow = (correctStr) => {
	const max = fixed.MAX_WORD_NUM[correctStr.length];
	const min = max - 2;
	// ランダム関数で文字数決定(行数分ループ)
	let resArr = [];
	[...Array(fixed.MAX_ROW_NUM)].map((_, i) =>
		resArr.push(getRandomInt(min, max))
	);
	return resArr;
};

const decideTypoPosition = (maxRowNum, wordsPerRow) => {
	// ランダム関数で行位置を決定
	const rowNum = getRandomInt(0, maxRowNum - 1);
	// ランダム関数で何文字目かを決定
	const wordPosition = getRandomInt(0, wordsPerRow[rowNum] - 1);
	return { row: rowNum, col: wordPosition };
};

const decideWordsColor = (wordsPerRow) => {
	let resArr = [];
	let colorArr = [];
	let colorInfo = [];
	let classArr = [];
	// 文字色をつけるかどうか決める
	[...Array(fixed.MAX_ROW_NUM)].map((_, i) => {
		colorInfo = [];
		[...Array(wordsPerRow[i])].map(() => {
			colorInfo.push(getRandomInt(0, 1));
		});
		colorArr.push(colorInfo);
	});
	// 指定するクラス名を決める
	[...Array(fixed.MAX_ROW_NUM)].map((_, i) => {
		classArr = [];
		[...Array(wordsPerRow[i])].map((_, j) => {
			const classStr =
				colorArr[i][j] == 1
					? fixed.P_CLASS + " " + fixed.ITEM_CLASS_OBJ[getRandomInt(1, 7)]
					: fixed.P_CLASS;
			classArr.push(classStr);
		});
		resArr.push(classArr);
	});
	return resArr;
};

const formatAllItems = (itemsInfoArr) => {
	let arr = [];
	let baseAttrArr = [];
	let baseStrArr = [];
	let resArr = [];
	// 問題数×行×1行の単語数分、クラスと正解文字列を格納
	[...Array(fixed.NUM_OF_QUESTION)].map((_, i) => {
		arr = itemsInfoArr[i];
		baseAttrArr.push([]);
		baseStrArr.push([]);
		[...Array(fixed.MAX_ROW_NUM)].map((_, j) => {
			baseAttrArr[i].push([]);
			baseStrArr[i].push([]);
			[...Array(arr.words_per_row[j])].map((_, k) => {
				baseAttrArr[i][j].push(`class='${arr.color_of_words[j][k]}'`);
				baseStrArr[i][j].push(arr.correct);
			});
		});
	});
	console.log(baseAttrArr);
	console.log(baseStrArr);

	// タイポを反映させる
	let x = 0;
	let y = 0;
	[...Array(fixed.NUM_OF_QUESTION)].map((_, i) => {
		arr = itemsInfoArr[i];
		x = arr.typo_position.row;
		y = arr.typo_position.col;
		baseStrArr[i][x][y] = arr.typo;
		baseAttrArr[i][x][y] = `${baseAttrArr[i][x][y]} id='${fixed.TYPO_ID}'`;
	});
	console.log(baseAttrArr);
	console.log(baseStrArr);

	// pタグの文字列を作る
	[...Array(fixed.NUM_OF_QUESTION)].map((_, i) => {
		resArr.push([]);
		[...Array(fixed.MAX_ROW_NUM)].map((_, j) => {
			resArr[i].push([]);
			[...Array(itemsInfoArr[i].words_per_row[j])].map((_, k) => {
				resArr[i][j].push(
					`<p ${baseAttrArr[i][j][k]}>${baseStrArr[i][j][k]}</p>`
				);
			});
		});
	});

	return resArr;
};

export { getRandomInt, createAllItems };
