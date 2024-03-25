// console.log("posts", posts);

const postListContainer = document.getElementById("post-list");
const paginationContainer = document.getElementById("pagination");

const itemsPerPage = 10;
const totalPages = Math.ceil(posts.length / itemsPerPage);
let currentPage = 1;

const createPaginationButton = (page) => {
  const pgBtn = document.createElement("button");
  pgBtn.innerText = page;
  pgBtn.addEventListener("click", () => {
    currentPage = page;
    renderPosts();
  });

  return pgBtn;
};

const createPostElement = (post) => {
  const { userId, id, title, body } = post;
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  postElement.innerHTML = `
            <h2>${id} ${title}</h2>
            <p>${body}</p>
        `;

  return postElement;
};

const renderPosts = () => {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const postsToRender = posts.slice(start, end);
  postListContainer.innerHTML = "";
  postsToRender.forEach((post) => {
    postListContainer.appendChild(createPostElement(post));
  });
};

const renderPagination = () => {
    paginationContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        paginationContainer.appendChild(createPaginationButton(i));
    }
};

const init = () => {
  renderPosts();
  renderPagination();
};

init();
