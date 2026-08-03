document.addEventListener("DOMContentLoaded", () => {
  // INITIAL SEED DATA
  const initialPosts = [
    {
      id: "1",
      title: "Building Scalable Frontend Architecture with Next.js & React",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      content:
        "Modern web applications require clean component separation, efficient state management, and seamless routing. During my academic projects and internship tasks at Saiket Systems, leveraging modular structure has drastically improved maintainability.\n\nKey takeaways include establishing reusable component trees, configuring client-side storage mechanisms, and implementing crisp glassmorphism UI layouts.",
      date: "Aug 2, 2026",
      readTime: "3 min read",
    },
    {
      id: "2",
      title: "Optimizing Web App Deployments & CI/CD Pipelines on Vercel",
      category: "Architecture",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      content:
        "Automated deployment pipelines play a vital role in modern software delivery. Connecting GitHub repositories with Vercel provides instant preview deployments for every push.\n\nWhether hosting full-stack applications or static SPA components, environment configurations and build triggers ensure continuous availability.",
      date: "Jul 28, 2026",
      readTime: "4 min read",
    },
  ];

  // DOM ELEMENTS
  const postsContainer = document.getElementById("postsContainer");
  const searchInput = document.getElementById("searchInput");
  const filterTags = document.getElementById("filterTags");
  const editorModal = document.getElementById("editorModal");
  const readerModal = document.getElementById("readerModal");
  const openEditorBtn = document.getElementById("openEditorBtn");
  const closeEditorBtn = document.getElementById("closeEditorBtn");
  const cancelEditorBtn = document.getElementById("cancelEditorBtn");
  const closeReaderBtn = document.getElementById("closeReaderBtn");
  const postForm = document.getElementById("postForm");
  const modalTitle = document.getElementById("modalTitle");

  let activeFilterTag = "all";

  // LOAD POSTS FROM LOCALSTORAGE OR SEED
  function getPosts() {
    const stored = localStorage.getItem("yishak_blog_posts");
    if (!stored) {
      localStorage.setItem("yishak_blog_posts", JSON.stringify(initialPosts));
      return initialPosts;
    }
    return JSON.parse(stored);
  }

  function savePosts(posts) {
    localStorage.setItem("yishak_blog_posts", JSON.stringify(posts));
  }

  // ESTIMATE READ TIME
  function calculateReadTime(text) {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 150);
    return `${minutes} min read`;
  }

  // RENDER POSTS TO DOM
  function renderPosts() {
    const posts = getPosts();
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm);
      const matchesTag =
        activeFilterTag === "all" || post.category === activeFilterTag;
      return matchesSearch && matchesTag;
    });

    postsContainer.innerHTML = "";

    if (filtered.length === 0) {
      postsContainer.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 40px;">No articles found matching your criteria.</p>`;
      return;
    }

    filtered.forEach((post) => {
      const card = document.createElement("div");
      card.className = "post-card";

      const defaultImg =
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";
      const imageUrl = post.image || defaultImg;

      card.innerHTML = `
        <img src="${imageUrl}" class="post-card-img" alt="${post.title}" />
        <div class="post-card-body">
          <div class="post-meta">
            <span class="post-category">${post.category}</span>
            <span>${post.readTime}</span>
          </div>
          <h3 onclick="openReader('${post.id}')">${post.title}</h3>
          <p>${post.content.substring(0, 110)}...</p>
          <div class="post-card-actions">
            <span style="font-size: 0.8rem; color: var(--text-muted);">${post.date}</span>
            <div class="action-btn-group">
              <button class="btn-icon" onclick="editPost('${post.id}')" title="Edit Article">✏️</button>
              <button class="btn-icon delete" onclick="deletePost('${post.id}')" title="Delete Article">🗑️</button>
            </div>
          </div>
        </div>
      `;
      postsContainer.appendChild(card);
    });
  }

  // SEARCH & FILTER LISTENERS
  searchInput.addEventListener("input", renderPosts);

  filterTags.addEventListener("click", (e) => {
    if (e.target.classList.contains("tag-btn")) {
      document
        .querySelectorAll(".tag-btn")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      activeFilterTag = e.target.getAttribute("data-tag");
      renderPosts();
    }
  });

  // OPEN EDITOR FOR CREATE
  openEditorBtn.addEventListener("click", () => {
    postForm.reset();
    document.getElementById("postId").value = "";
    modalTitle.textContent = "Create New Article";
    editorModal.classList.add("active");
  });

  // CLOSE EDIT MODAL
  const closeEditor = () => editorModal.classList.remove("active");
  closeEditorBtn.addEventListener("click", closeEditor);
  cancelEditorBtn.addEventListener("click", closeEditor);

  // SAVE POST (CREATE OR EDIT)
  postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("postId").value;
    const title = document.getElementById("postTitle").value;
    const category = document.getElementById("postCategory").value;
    const image = document.getElementById("postImage").value;
    const content = document.getElementById("postContent").value;

    let posts = getPosts();

    if (id) {
      // Edit existing
      posts = posts.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            title,
            category,
            image,
            content,
            readTime: calculateReadTime(content),
          };
        }
        return p;
      });
    } else {
      // Create new
      const newPost = {
        id: Date.now().toString(),
        title,
        category,
        image,
        content,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        readTime: calculateReadTime(content),
      };
      posts.unshift(newPost);
    }

    savePosts(posts);
    closeEditor();
    renderPosts();
  });

  // EDIT POST HANDLER
  window.editPost = function (id) {
    const posts = getPosts();
    const post = posts.find((p) => p.id === id);
    if (!post) return;

    document.getElementById("postId").value = post.id;
    document.getElementById("postTitle").value = post.title;
    document.getElementById("postCategory").value = post.category;
    document.getElementById("postImage").value = post.image || "";
    document.getElementById("postContent").value = post.content;

    modalTitle.textContent = "Edit Article";
    editorModal.classList.add("active");
  };

  // DELETE POST HANDLER
  window.deletePost = function (id) {
    if (confirm("Are you sure you want to delete this article?")) {
      let posts = getPosts();
      posts = posts.filter((p) => p.id !== id);
      savePosts(posts);
      renderPosts();
    }
  };

  // OPEN READER VIEW
  window.openReader = function (id) {
    const posts = getPosts();
    const post = posts.find((p) => p.id === id);
    if (!post) return;

    const readerBody = document.getElementById("readerBody");
    const defaultImg =
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

    readerBody.innerHTML = `
      <div class="reader-header">
        <span class="post-category">${post.category}</span> • <span>${post.readTime}</span>
        <h1>${post.title}</h1>
        <div class="reader-meta">Published on ${post.date} by Yishak Mekuannent</div>
      </div>
      <img src="${post.image || defaultImg}" class="reader-img" alt="${post.title}" />
      <div class="reader-text">${post.content}</div>
    `;

    readerModal.classList.add("active");
  };

  // CLOSE READER MODAL
  closeReaderBtn.addEventListener("click", () => {
    readerModal.classList.remove("active");
  });

  // INITIAL RENDER
  renderPosts();
});
