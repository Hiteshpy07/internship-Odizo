import React, { useState } from 'react';
import BlogCard from './Blog.jsx';

export default function App() {
   const [blogs, setBlogs] = useState([
    { id: 1, title: "ODIZO-blog feature", content: "First post of the blog site", author: "Hitesh" }
  ]);
  const [formData, setFormData] = useState({ title: '', content: '', author: '' });


  const addBlog = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;

    const newBlog = {
      id: Date.now(),...formData
    };

    setBlogs([newBlog, ...blogs]);
    setFormData({ title: '', content: '', author: '' }); 
    };


  return (
<div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6">
      <div className=" mx-auto flex justify-between items-center mb-12 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-black text-white  font-mono">ODIZO</h1>
        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg  mr-5">
          <span className="text-slate-400 text-sm font-mono">Total Posts: </span>
          <span className="text-blue-400 font-bold text-lg font-mono">{blogs.length}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <section className="lg:col-span-1">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 sticky top-10">
            <h2 className="text-xl font-bold text-white mb-6 font-mono">Create New Post</h2>
            <form onSubmit={addBlog} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1 font-mono">Title</label>
                <input 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className=" text-xs font-semibold text-slate-500 uppercase mb-1 font-mono">Author</label>
                <input 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white"
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1 font-mono">Content</label>
                <textarea 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white h-32"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="Your blog content"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-blue-900/20 font-mono ">
                Publish Post
              </button>
            </form>
          </div>
        </section>

        
        <section className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map(blog => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </section>

      </div>
    </div>


  );
}