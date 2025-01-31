import { useState } from "react";
import { PostComponent } from "./Posts";
import { NotificationImage } from "./NotificationImage";

const App = () => {
  const [posts, setPosts] = useState([]);

 const postComponents = posts.map((post) => (
   <PostComponent
     key={post.id} // Ensure 'id' is unique
     title={post.title}
     subtitle={post.subtitle}
     image={post.image}
     information={post.information}
     time={post.time}
   />
 ));
  function addPost() {
    setPosts([
      ...posts,
      {
        image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        time: "12m",
        title: "Akhilkumar",
        subtitle: "23,3424 followers",
        information:
          "want to win big Check out how these folks won $600 in bounties",
      },
    ]);
  }
  return (
    <div
      style={{
        backgroundColor: "#dfe6e9",
        height: "200vh",

      }}
    >
      <button onClick={addPost}>Add posts</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>{postComponents}</div>
          <br /><br />
          <div ><NotificationImage/></div>

        </div>
      </div>
    </div>
  );
};

export default App;
