import Link from "next/link";

const Index = () => (
  <div>
    <h1>Home page</h1>
    <style jsx>{`
      h1,
      a {
        font-size: 3rem;
      }
    `}</style>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
  </div>
);

export default Index;
