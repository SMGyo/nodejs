// 10_async_await.js
async function getPostInfo(){//await 은 async를 같이 써야함
    let postList = await fetch('https://jsonplaceholder.typicode.com/posts') //postList
                         .then(res => res.json());
                         
    let postId = postList[0].id;
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`) //post
                     .then(res => res.json());

    let commentList = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`) //commentList
                            .then(res => res.json());
    post.comments = commentList;
    console.log(post);
}

getPostInfo(); //비동기
console.log('코드 종료');