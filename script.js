document.addEventListener("DOMContentLoaded", () => {
  // INITIAL SEED DATA (12 ARTICLES)
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
    {
      id: "3",
      title:
        "Designing Interactive Exam Prep Apps for Computer Science Students",
      category: "WebDev",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      content:
        "Developing interactive study hubs—such as the SPM Exam Note and OS Exam Prep tools—requires prioritizing fast user interface responses and immediate feedback loops.\n\nBy leveraging timed mock question sets, score tracking algorithms, and clean typography layouts, students can test their knowledge seamlessly before university exit exams.",
      date: "Jul 21, 2026",
      readTime: "5 min read",
    },
    {
      id: "4",
      title:
        "Mastering Pure HTML & CSS: Building Responsive Drawers Without JS",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      content:
        "While JavaScript is essential for complex application state, pure CSS can handle interactive UI patterns like responsive navigation menus and modal drawers.\n\nUsing the checkbox hack technique (`:checked ~ .nav-menu`) combined with standard CSS transitions allows developers to create lightweight, fast-loading interfaces with zero JavaScript dependencies.",
      date: "Jul 15, 2026",
      readTime: "3 min read",
    },
    {
      id: "5",
      title: "Object-Oriented Design Patterns in Java & Modern Web Development",
      category: "Architecture",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      content:
        "Understanding Object-Oriented Programming (OOP) principles like encapsulation, inheritance, polymorphism, and abstraction forms the backbone of solid software engineering.\n\nApplying clean class structures in Java translates directly into writing modular, maintainable component logic in modern JavaScript and TypeScript web frameworks.",
      date: "Jul 10, 2026",
      readTime: "4 min read",
    },
    {
      id: "6",
      title: "Navigating Tech Internships & Building a Developer Brand",
      category: "Career",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      content:
        "Sharing your technical journey publicly through GitHub repositories, Vercel deployments, and LinkedIn project showcases creates proof of work for prospective employers.\n\nConsistent milestone tracking, engaging in internship tasks, and writing technical documentation help solidify complex web engineering concepts.",
      date: "Jul 05, 2026",
    },
    {
      id: "7",
      title: "Building RESTful APIs & Microservices with Node.js & Express",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      content:
        "Backend API design focuses on standardizing request handling, response status codes, and security authentication middleware.\n\nStructuring modular controllers, route handlers, and error boundaries in Node.js ensures robust server-side application logic capable of serving data to web and mobile clients.",
      date: "Jun 28, 2026",
    },
    {
      id: "8",
      title: "Relational vs NoSQL Databases: Structuring Data for Web Apps",
      category: "Database",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      content:
        "Choosing between relational SQL databases (like MySQL and PostgreSQL) and document-based NoSQL engines (like MongoDB) depends on application scalability requirements.\n\nWhile SQL ensures strict data integrity through foreign keys and ACID transactions, NoSQL provides dynamic schema flexibility ideal for rapid iterative development.",
      date: "Jun 20, 2026",
    },
    {
      id: "9",
      title: "Asynchronous JavaScript: Mastering Promises & Async/Await",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&q=80",
      content:
        "Managing asynchronous operations cleanly prevents callback hell and ensures non-blocking UI interactions.\n\nUsing ES6 Promises and modern `async/await` syntax allows developers to write asynchronous data-fetching logic that reads synchronously while handling network failures gracefully with `try...catch` blocks.",
      date: "Jun 14, 2026",
    },
    {
      id: "10",
      title:
        "Understanding Operating System Memory Management & Process Scheduling",
      category: "Architecture",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      content:
        "Delving into low-level computing concepts like virtual memory paging, CPU process scheduling algorithms (Round Robin, SJF), and deadlock prevention strategies gives developers deep context on resource allocation.\n\nThese core Computer Science principles directly inform optimization strategies when managing web worker threads and browser event loops.",
      date: "Jun 08, 2026",
    },
    {
      id: "11",
      title:
        "Preparing for Technical CS Exit Exams: Strategies & Practice Tools",
      category: "Career",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      content:
        "A structured study routine combining concept mapping, active recall practice, and timed mock tests is the most effective approach to mastering university exit exams.\n\nBuilding custom exam preparation tools allows students to review key topics across Operating Systems, Internet Programming, and Software Engineering on demand.",
      date: "May 30, 2026",
    },
    {
      id: "12",
      title: "Database Indexing & Query Optimization Techniques",
      category: "Database",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
      content:
        "As database tables grow to thousands of records, query execution performance depends heavily on proper indexing strategies.\n\nCreating B-Tree indexes on frequently queried columns reduces execution times from full-table scans down to logarithmic lookup times, boosting application response speed.",
      date: "May 22, 2026",
    },
  ];
  // THEME TOGGLE LOGIC
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const currentTheme = localStorage.getItem("yishak_blog_theme") || "dark";

  // Set initial theme on load
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeToggleBtn) themeToggleBtn.textContent = "🌙";
  }

  // Toggle button click handler
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      if (activeTheme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("yishak_blog_theme", "dark");
        themeToggleBtn.textContent = "🌙";
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("yishak_blog_theme", "light");
        themeToggleBtn.textContent = "☀️";
      }
    });
  }

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
