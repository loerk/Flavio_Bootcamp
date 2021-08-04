import Link from "next/link";

const Blog = () => (
  <div>
    <style jsx>{`
      h1,
      a {
        font-size: 3rem;
      }
    `}</style>
    <h1>Blog</h1>
    <Link href="/">
      <a>Home page</a>
    </Link>
  </div>
);

export default Blog;
