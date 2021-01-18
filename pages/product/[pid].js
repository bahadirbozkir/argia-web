import { useRouter } from 'next/router'
import React, { Component } from 'react';
import NavbarTwo from '../..//components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/Layouts/Footer';
import ProductsDetailsTab from '../../components/SingleProducts/ProductsDetailsTab';


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  const posts = await res.json();
  console.log(posts);

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { pid: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.pid}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

const Post = ({post}) => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner
        pageTitle="Ürünler"
        homePageUrl="/"
        homePageText="Ana Sayfa"
        activePageText="Ürünler"
        bgImgClass="item-bg1"
      />

      <section className="product-details-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="product-details-image">
                <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="product-details-desc">
                <h3>{post.Name}</h3>

                <div className="price">
                  <span className="new-price">{post.Price} ₺</span>
                  {/* <span className="old-price">$20.00</span> */}
                </div>

                <p>{post.ShortDescription}</p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <ProductsDetailsTab />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Post