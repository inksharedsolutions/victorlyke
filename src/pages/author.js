import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="Author | Adam Paul Ishmael" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="Adam Paul Ishmael"/>
                            </div>

                            <div className="heading-quote">
                                <h4>
                                “He (Muhammad) did not see the Jews or the Christians for that matter as his enemy, but he wanted Muslims to emphasize the things they had in common with them”
                                </h4>
                                <span className="ata-span-fx">
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            The Idea of this book came to me after my voluntary assignment in Afghanistan and when I saw that Truth is appreciated and needed there too.  Plus I realized how they needed happiness forfilled too and they were/are tired of corruption, bad government, and war.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Adam Paul Ishmael</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;