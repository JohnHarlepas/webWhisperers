import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Blog extends Component {
    componentDidMount() {
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }
  render() {
    //Blog loop start
    const blogdata = this.props.blogsData.map((blog, index) => (
        <div className="col-md-6 col-lg-6" key={index}>
            <div className="blog-item">
                <Link to={blog.postLink} target="blank" className="blog-img"><img src={blog.postImage} alt="blog-one" /></Link>
                <div className="blog-info">
                    <div className="date-box">
                        {blog.date} <span className="month">{blog.month}</span>
                    </div>
                    <div className="title-meta">
                        <h2><Link to={blog.postLink}>{blog.posttitle}</Link></h2>
                        <div className="post-meta">
                            <ul>
                                <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blog.authorLink}>{blog.authorName}</Link></li>
                                <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blog.CommentsLink}>{blog.TotalComments}</Link></li>
                                <li><Icofont icon="icofont-tags" /> Tags: <Link to={blog.TagLink}>{blog.TagName}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>{blog.postContent}</p>
                </div>
            </div>
        </div>
    ));
    //Blog loop END
    return (
        <React.Fragment>
            <section id="blog" className="our-blog ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        {blogdata}
                        <div className="col-lg-12 col-md-12 all-post">
                            <div className="center-wrap">
                            <Link to={this.props.btnLink} className="btn-a">
                                {/* <div className="button">
                                    {this.props.BlogBtn} <Icofont icon="icofont-long-arrow-right" />
                                    <div className="mask"></div>
                                </div> */}
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </React.Fragment>
    );
  }
}
//Props Types
Blog.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    btnLink: PropTypes.string,
    BlogBtn: PropTypes.string,
    blogsData: PropTypes.array
};

//Default Props
Blog.defaultProps = {
    SectionbgTitle: "Blog",
    sectionTitle: "Our Blog",
    sectionDescription:
        "Web Whisperers believe that our clients should be well-informed prior to any decision they make. Read these informative articles to get an understanding of what challenges small businesses face in buying a website.",
    btnLink: "/blog-one",
    BlogBtn: "View All Post",
        blogsData: [
        {
            postImage: require("../assets/img/blog1.jpeg"),
            postLink: "/demand",
            date: "25",
            month: "Feb",
            posttitle: "How much does it cost to maintain a website?",
            postContent: "Your website is like your car. If you never check fluids or get a tune-up, it won’t work when you need it. Maintaining your website requires some effort and includes a price tag.",
            authorName: " Osborne",
            authorLink: "//demand",
            TotalComments: "06",
            CommentsLink: "/demand",
            TagName: "Costs",
            TagLink: "/demand", 
        },
        {
            postImage: require("../assets/img/blog2.jpeg"),
            postLink: "/future",
            date: "1",
            month: "May",
            posttitle: "Average Website Maintenance Costs in 2019",
            postContent: "Website maintenance costs are often unplanned for, and can add up quickly. If you ignore website maintenance to cut costs, you'll often end up paying website repair costs instead, which can be even pricier. ",
            authorName: "O'Connor",
            authorLink: "/future",
            TotalComments: "06",
            CommentsLink: "/future",
            TagName: "Costs",
            TagLink: "/future", 
        },
       

        {
            postImage: require("../assets/img/blog4.jpeg"),
            postLink: "/ticket",
            date: "15",
            month: "May",
            posttitle: "How Much Does a Website Cost?",
            postContent: "How much does a website cost? Is there such a thing as a website cost blueprint?These are probably some of the first questions for anyone who considers establishing their own web presence.",
            authorName: "Schaferhoff",
            authorLink: "/ticket",
            TotalComments: "06",
            CommentsLink: "/ticket",
            TagName: "lifestyle",
            TagLink: "/ticket", 
        },



        {
            postImage: require("../assets/img/blog3.jpeg"),
            postLink: "/automated",
            date: "1",
            month: "June",
            posttitle: "How Much Does It Cost To Build A Website For A Small Business?",
            postContent: "It all boils down to how much work is involved. Specifically, the 2 factors that determine how much work is involved are the size and complexity of your site.",
            authorName: "Brinker",
            authorLink: "/automated",
            TotalComments: "06",
            CommentsLink: "/automated",
            TagName: "lifestyle",
            TagLink: "/automated", 
        },
    ]
};

export default Blog;
