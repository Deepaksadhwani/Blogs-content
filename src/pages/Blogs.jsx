import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="top-10 mx-auto flex flex-col py-8 pt-20">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">No posts found.</p>
        </div>
      ) : (
        <div>
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              author={post.author}
              category={post.category}
              date={post.date}
              content={post.content}
              tags={post.tags}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
