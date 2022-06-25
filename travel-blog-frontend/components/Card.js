import { urlFor } from '../lib/sanity'
import Tag from './Tag'
import { forwardRef } from 'react'
import Image from 'next/image'
import Home from '../pages'

// eslint-disable-next-line react/display-name
const Card = forwardRef(({ onClick, href, post }, ref) => {
    const { title, publishedAt, mainImage, username, authorImage, categories } = post
    return (
        <div className="card-container" href={href} onClick={onClick} ref={ref}>
            <h2>{title}</h2>
            <p>Published on: {new Date(publishedAt).toDateString()}</p>
            <Image
                className="main-image"
                alt={title + 'image'}
                src={urlFor(mainImage)}
            />
            <hr />


            <div className='info-container'>
                <p>Posted by:k {username}</p>
                <Image
                    className='avatar'
                    alt={username + 'avatar'}
                    src={urlFor(authorImage)}
                />
            </div>
            <div className='tag-container'>
                {categories.map((category) => (
                    <>
                        {category && <Tag key={category} title={category?.title} />}
                    </>
                ))}
            </div>
        </div>
    )
})
Home.displayName = 'Travel Blog';

export default Card