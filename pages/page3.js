import React from 'react';
import DisplayPosts from '../components/DisplayPosts';
import Comments from '../components/Comments';




const page3 = () => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Nasz blog</h1>
      <DisplayPosts collection="yourPosts" />
      <Comments collection="wdzComments"/>

    </div>
  );
};

export default page3;

