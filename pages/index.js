import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, {siteTitle} from '../components/layout'

const Home = () =>{
  return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi I'm Matthew and this is my first Next.js project. I will be using
					Next.js in future projects
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>

        <h2 className={utilStyles.headingMd}>Blog</h2>
        <Link href='/posts/first-post'>
          <a>This is my first post</a>
        </Link>
			</section>
		</Layout>
	)

}
    

export default Home

