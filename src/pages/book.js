import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book3 from '../../static/books/book3.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'adam-paul-ishmael-1',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Books | Adam Paul Ishmael" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={``}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                  
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Acclaimed Writings of Truth`,
                                spanFirst: ` `,
                                imgSrc: Book3,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        This book is dedicated to explaining the Qur'an and the Bible in their true form regarding the subjects outlined. It allows both these books to say what it states when it comes to these subjects. The purpose is not to elevate one book over the other but to enrich the understanding of both books to the laymen from a layman. 

                                        </p>
                                    `,

                                ebooks: {
                                    barnes: 'https://www.barnesandnoble.com/w/the-city-of-the-sky-tj-keogh/1139629068?ean=9781648954191',
                                    amazon: 'https://www.amazon.ca/Acclaimed-Writings-Truth-Adam-Ishmael-ebook/dp/B0975VYQ1V/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1628018744&sr=1-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.ca/Acclaimed-Writings-Truth-Adam-Ishmael/dp/1648953107/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1628018744&sr=1-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-acclaimed-writings-of-truth-adam-paul-ishmael/1125086035?ean=9781524557416',
                                    booksamillion: 'https://www.booksamillion.com/p/Acclaimed-Writings-Truth/Adam-Paul-Ishmael/9781524557416?id=8255501074287',
                                }
                            }}
                        />
                   

            
                        <div className="commentSection" >
                           
                            <div id="disqus_thread" className="margin20">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;