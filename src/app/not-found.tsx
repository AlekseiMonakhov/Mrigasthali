'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container">
      <div className="errorIcon" />
      <h1 className="title">
        <Link href="/">404</Link>
      </h1>
      <p className="description">Page not found</p>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 80vh;
          font-family: 'Arial', sans-serif;
        }
        
        .errorIcon {
          font-size: 100px;
          color: #f00303;
        }
        
        .title {
          font-size: 64px;
          margin: 20px 0;
          color: #080000;
        }
        
        .description {
          font-size: 24px;
          color: #040000;
        }
      `}</style>
    </div>
  );
}