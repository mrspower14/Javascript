// // 2차원 array 가 되네
// const test1 = [
//   [1, 2],
//   [3, 4],
// ];
// console.log(test1);
// console.log(test1[0]);
// console.log(test1[1]);

// console.log(test1[0][0]);
// console.log(test1[0][1]);
// console.log(test1[1][0]);
// console.log(test1[1][1]);

// if (true) {
//   console.log("Test");
// }

// const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json1';
// fetch(url).then((response) => response.json())
//           .catch((e) => console.log('ERROR1', e))
//           .then((data) => {
//             if (!data) throw new Error('ERROR2');
//             if (!data.articleList || data.articleList.length === 0) throw new Error('ERROR3')
//             return data.articleList;
//           })
//           .then((articles) => {
//             return articles.map((article, idx) => {
//                 return {title: article.title, rank: idx + 1};
//             })
//           })
//           .catch((e) => console.log('ERROR4', e))
//           .then((result) => {
//             for (let movie of result)
//                 console.log(`[${movie.rank}위] ${movie.title}`);
//           })
//           .catch((e) => console.log('ERROR5', e));


// function waitOneSecond(msg) {
//     return new Promise((resolve, _) => {
//         setTimeout(() => resolve(`${msg}`), 1000);
//     });
// }
// async function countOneToTen() {
//     for (let x of [...Array(10).keys()]) {
//         console.log('X:', x);
//         let result = await waitOneSecond(`${x + 1}초 대기 중...`);
//         console.log(result);
//     }
//     console.log('완료');
// }
// countOneToTen();

