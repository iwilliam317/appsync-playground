import React, { useEffect, useState } from 'react'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { withAuthenticator } from '@aws-amplify/ui-react';

import { API, graphqlOperation } from 'aws-amplify';

import { listBlogs as listBlogsQuery } from './graphql/queries';
import { createBlog as createBlogMutation } from './graphql/mutations';
import { deleteBlog as deleteBlogMutation } from './graphql/mutations';
Amplify.configure(awsconfig)



const App = () => {

  const [blogs, setBlogs] = useState([])
  const [blog, setBlog] = useState({})

  const listBlogs = async () => {
    const response = await API.graphql(graphqlOperation(listBlogsQuery))
    const blogs = response.data.listBlogs.items
    setBlogs(blogs)
  }

  const createBlog = async event => {
    event.preventDefault()
    if (blog.name){
      try {
        await API.graphql(graphqlOperation(createBlogMutation, { input: blog }));
        listBlogs()
        setBlog({})
        
      } catch (error) {
        console.log(error)
      }
    }
  }

  const deleteBlog = async blogId => {
    await API.graphql(graphqlOperation(deleteBlogMutation, { input: { id: blogId } }));
    listBlogs()
  }

  const handleChange = event => {
    setBlog({ [event.target.name]: event.target.value })

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AppSync Playground</h1>


      </header>
      <div>
        <button onClick={listBlogs}>List All Blogs </button>

        <ul>
          {blogs.map(blog => (
            <li key={blog.id}> {blog.name} <button onClick={() => deleteBlog(blog.id)}><small>Remove</small></button></li>
          ))}

        </ul>

      </div>
      <hr />
      <div>
        <form>
          <label htmlFor='name'>
            Blog:
            <input id='name' name='name' placeholder='type in here. E.g: Medium' onChange={handleChange}></input>

          </label>
          {blog.name}
          <button onClick={createBlog}>Create</button>
        </form>

      </div>
    </div>
  );
}

export default withAuthenticator(App)