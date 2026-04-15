// //1.Promise - 회원가입  
// const DB = [];

// function saveDB(user) {
//     const oldDBLength = DB.length;
//     DB.push(user);
//     console.log(`${user.name} 저장 완료되었습니다.`);

//     return new Promise((resolve, reject) => {
//         if (DB.length > oldDBLength) {
//             resolve(user);
//         } else {
//             reject(new Error('저장에 실패했습니다.!'));
//         }
//     });
// }

// function sendEmail(user) {
//     console.log(`${user.email}으로 이메일을 발송했습니다.`);
    
//     return new Promise((resolve) => {
//         resolve(user);
//     });
// }

// function getResult(user) {
//     return new Promise((resolve) => {
//        resolve(`${user.name}님 등록 성공했습니다.`); 
//     });
// }

// function registerByPromise(user){
//     const result = saveDB(user).then(sendEmail).then(getResult)
//                                .catch((error) => new Error(error));
//     return result;
// }

// const myUser = { name: '손흥민', email: 'son@naver.com' };
// const result = registerByPromise(myUser);

// result.then(console.log);


//2.Promise - 회원가입 간략하게 
// const DB = [];

// function saveDB(user) {
//     const oldDBLength = DB.length;
//     DB.push(user);
//     console.log(`${user.name} 저장 완료되었습니다.`);

//     if (DB.length > oldDBLength) {
//         return Promise.resolve(user);
//     } else {
//         return Promise.reject(new Error('저장에 실패했습니다.!'));
//     }
// }

// function sendEmail(user) {
//     console.log(`${user.email}으로 이메일을 발송했습니다.`);
    
//     return Promise.resolve(user);
// }

// function getResult(user) {
//     return Promise.resolve(`${user.name}님 등록 성공했습니다.`); 
// }

// // //2-1. Promise 로 테스트
// // function registerByPromise(user){
// //     const result = saveDB(user).then(sendEmail).then(getResult)
// //                                .catch((error) => new Error(error));
// //     return result;
// // }

// // const myUser = { name: '손흥민', email: 'son@naver.com' };
// // const result = registerByPromise(myUser);

// // result.then(console.log);

// // 2-2. async await 로 테스트 
// async function registerByAsync(user){
//     try{
//         const savedUser = await saveDB(user);
//         const emailedUser = await sendEmail(savedUser);
//         const result = await getResult(emailedUser);
//         return result;
//     } catch(error) {
//         return new Error(error);
//     }
// }
// const myUser = { name: '손흥민', email: 'son@naver.com' };
// registerByAsync(myUser).then(console.log);


// //3.Promise - 영화정보
// const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

// fetch(url)      //브라우저가 지원하는 Promise 
//     .then((response) => {
//         return response.json();     // = Promise.resolve(response.jsom()) 
//     })
//     .catch(() => console.log('ERROR1', '요청에 실패했습니다.'))
//     .then((data) => {
//         if (!data) {
//             throw new Error('데이터가 없습니다.');
//         }
//         if (!data.articleList || data.articleList.length === 0) {
//             throw new Error('데이타가 없습니다.');
//         }
//         return data.articleList;    // = Promise.resolve(data.articleList)
//     })
//     .catch((error) => console.error('ERROR2', '에러 발생: ', error.message))
//     .then((articles) => {
//         //  return articles.map((article, idx) => {
//         //     return {title: article.title, rank: idx + 1};
//         //  });
//         return articles.map((article, idx) => ({title: article.title, rank: idx + 1})); // = Promise.resolve([{title:'', rank:1},...,{title:'', rank:100}])
//     })
//     .then((result) => {
//         for (let movie of result) {
//             console.log(`[${movie.rank}위] ${movie.title}`);
//         }
//     })
//     .catch((err) => {
//         console.log('ERROR3', '<<에러발생>>');
//         console.log(err);
//     });

async function fetchMovieData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('요청에 실패. 상태코드 : ' + response.status);
    }
    const data = await response.json();
    return data; 
}

function validateMovieData(data) {
    if (!data) {
        throw new Error('데이터가 없습니다.');
    }
    if (!data.articleList || data.articleList.length === 0) {
        throw new Error('데이타가 없습니다.');
    }
}

function extractMovieInfos(articleList) {
    return articleList.map((article, idx) => 
        ({ title: article.title, rank: idx + 1 })
    );
}

function displayMovies(movieInfos) {
    for (const movie of movieInfos) {
        console.log(`[${movie.rank}위] ${movie.title}`);
    }
}

const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

async function movies() {
    try {
        const data = await fetchMovieData(url);
        validateMovieData(data);
        const movieInfos = extractMovieInfos(data.articleList);
        displayMovies(movieInfos);
    } catch (err) {
        console.error('에러 발생: ', err.message);
    }
}

movies();