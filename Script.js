document.getElementById('postBlogButton').addEventListener('click', function () {
    // Get blog title and content
    const title = document.getElementById('blogTitle').value.trim();
    const content = document.getElementById('blogContent').value.trim();

    // Validate input
    if (title === '' || content === '') {
        alert('Please fill in both the title and content.');
        return;
    }

    // Create a new blog post element
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
    blogPost.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;

    // Append to the blog display section
    const blogDisplay = document.getElementById('blogDisplay');
    blogDisplay.appendChild(blogPost);

    // Clear the input fields
    document.getElementById('blogTitle').value = '';
    document.getElementById('blogContent').value = '';
});