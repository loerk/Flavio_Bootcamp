import { userRouter } from "next/router";

export default () => {
  const router = userRouter();

  return (
    <>
      <h1>Blog post</h1>
      <p>Post id: {router.query.id}</p>
    </>
  );
};
