import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import MarkdownPath from "../blog-posts/1.md";

const BlogRecordPage = () => {
  const [pageContent, setPageContent] = React.useState(null);
  const { id } = useParams();

  // const path = React.lazy(() => import(`../blog-posts/${id}.md`));

  // console.log(MarkdownPath);
  // console.log(path);

  React.useEffect(() => {
    if (id) {
      import(`../blog-posts/${id}.md`).then((file) => {
        fetch(file.default).then((response) => {
          response.text().then((text) => {
            setPageContent(text);
          });
        });
      });
    }
  }, [id]);

  return (
    <div className='content-container'>
      {pageContent ? <ReactMarkdown children={pageContent} /> : <>Loading...</>}
    </div>
  );
};

export default BlogRecordPage;
