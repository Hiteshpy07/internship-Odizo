import React, { useState } from 'react';

export default function BlogCard({ title, content, author }) {
    return(
  <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl hover:border-blue-500 transition-colors shadow-lg">
    
    <h3 className="text-xl font-bold text-white mb-2 font-mono">{title}</h3>
    <p className="text-slate-400 text-sm mb-4 line-clamp-3 font-mono">{content}</p>
    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
      <span className="text-xs font-medium text-slate-500 font-mono">{author}</span>
    </div>
  </div>

);}


