import React from "react";

const Card = ({ title, author, category, date, tags, content }) => {
  return (
    <div className="p-6 mx-auto w-11/12 rounded-lg bg-white shadow-md lg:w-3/4 xl:w-2/4">
      <h2 className="mb-4 text-3xl font-semibold lg:text-4xl">{title}</h2>
      <p className="text-lg text-gray-600">
        By <span className="text-blue-500">{author}</span> in{" "}
        <span className="text-green-500">{category}</span>
      </p>
      <p className="mt-1 text-sm text-gray-500">Posted on {date}</p>
      <p className="mt-6 leading-relaxed">{content}</p>
      <div className="mt-8 flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mb-2 mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
