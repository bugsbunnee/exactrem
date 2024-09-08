'use client';

import React from 'react'
import Error from 'next/error';

const BlogNotFoundPage = () => {
  return (
    <Error statusCode={404} />
  )
}

export default BlogNotFoundPage