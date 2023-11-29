import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar'
import BlogData from '../../components/blog/BlogData';
import './blogPage.css'
import blog from './blog.png'
import bhero from '../../assets/bhero.png'

function Blog() {
 
  const { id: contentId } = useParams();
  const location = useLocation();
  
  
  // Log the values to see what's going on
  console.log('ID from useParams:', contentId);
  console.log('Location State:', location.state);
  console.log('Content ID:', contentId);
  
  // Handle cases where contentId is not available
  if (!contentId) {
    return (
      <div>
        <p>ID from useParams: {contentId}</p>
        <p>Location State: {JSON.stringify(location.state)}</p>
        <p>Content ID: {contentId}</p>
        <div>No content available</div>
      </div>
    );
  }

  // Now, fetch the correct content using contentId
  const content = BlogData.find(blog => blog.id === parseInt(contentId));

  // Handle cases where content is not available
  if (!content) {
    return (
      <div>
        <div>No content available</div>
      </div>
    );
  }
  

  return (
    <div>
    <Navbar />

    <div className='custom-space'>
      <div className='custom-head'>
        <h1>Moroccool Blog Space</h1>   
      </div>                
      <div>
        <img className='custom-img-blog' src={blog} alt='' />
      </div>  
    </div>

    <div className="custom-blog-container">
      {/* Hero Section */}
      <div className="custom-hero-section">
        <div className="custom-hero-content">
          <img
            className="custom-hero-image"
            src={content.image}
            alt={content.title}
          />
          <div className="custom-hero-text">
            <h1 className="custom-hero-title">{content.title}</h1>
            <div className="custom-hero-info">
              <span>
                Author:
                <b className="custom-hero-author">
                  {content.author} 
                </b>
              </span>
              <span>{content.date}</span>
            </div>
            <p className="custom-single-post-desc">{content.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Blog;
