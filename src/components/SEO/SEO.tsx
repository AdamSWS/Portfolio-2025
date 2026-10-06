"use client"

import Head from 'next/head'

type Props = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  noindex?: boolean
}

const siteUrl = 'https://ashaar.me'
const siteName = 'Adam Shaar — Portfolio'

export default function SEO({ title, description, pathname = '/', image = '/images/og.png', noindex }: Props) {
  const pageTitle = title ? `${title} · ${siteName}` : siteName
  const url = siteUrl + pathname

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description || 'Adam Shaar — machine learning, engineering, and product. Projects, resume, and contact.'} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description || 'Adam Shaar — machine learning, engineering, and product. Projects, resume, and contact.'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={siteUrl + image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AdamSWS" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description || 'Adam Shaar — machine learning, engineering, and product.'} />
      <meta name="twitter:image" content={siteUrl + image} />

      {noindex ? <meta name="robots" content="noindex" /> : null}
    </Head>
  )
}
