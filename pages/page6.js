import React from 'react';
import ManageContent from '../components/ManageContent';
import DeleteItem from '../components/Deleteitem';
import MyComponent from '../components/MyComponent';

const Page6 = () => {
  return (
    <div>
      <h1>Panel Administratorski</h1>
      <ManageContent collection="yourPosts" />
      <DeleteItem collection="wdzComments" />
      <MyComponent />
    </div>
  );
};

export default Page6;

