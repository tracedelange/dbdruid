import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../blog-posts";

const BlogIndexPage = () => {
  return (
    <div className="content-container">
      <h3 style={{opacity: 0.85}}>
        Blog Posts
      </h3>
      <ul style={{ margin: 0 }}>
        {blogPosts.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                listStyle: "none",
                // padding: 10,
              }}
            >
              <Link
                to={"/blog/" + item.id}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  justifyContent: "flex-start",
                  padding: '3px'
                }}
              >
                <p style={{ margin: "0", padding: "0", marginRight: "2%", fontStyle: 'italic', color: 'black' }}>
                  {item.created_date}
                </p>
                <p style={{margin: "0", padding: "0"}}>-</p>
                <p style={{margin: "0", marginLeft: "2%", padding: "0"}}>{item.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogIndexPage;
