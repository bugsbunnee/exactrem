'use client';

import React from 'react'
import Error from 'next/error';

const NoticeNotFound = () => {
  return (
    <Error statusCode={404} />
  )
}

export default NoticeNotFound