import React, { useEffect, useState } from 'react'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { withAuthenticator } from '@aws-amplify/ui-react';

import { API, graphqlOperation } from 'aws-amplify';

import { listBlogs as listBlogsQuery} from './graphql/queries';
Amplify.configure(awsconfig)



const App = () => {

  const [blogs, setBlogs] = useState([])

  const listBlogs = async () => {
    const response = await API.graphql(graphqlOperation(listBlogsQuery))
    const blogs = response.data.listBlogs.items
    console.log(blogs)
    setBlogs(blogs)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AppSync Playground</h1>


        <button onClick={listBlogs}>List All Blogs </button>

        <ul>
          {blogs.map(blog => (
            <li key={blog.id}> {blog.name}</li>
          ))}

        </ul>
      </header>
    </div>
  );
}

export default withAuthenticator(App)