import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
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
                        <h2><Link to={blog.postLink} target="_blank">{blog.posttitle}</Link></h2>
                        <div className="post-meta">
                            <ul>
                                <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blog.authorLink} target="_blank">{blog.authorName}</Link></li>
                                <li><Icofont icon="icofont-speech-comments" /> Likes: <Link to={blog.CommentsLink} target="_blank">{blog.TotalComments}</Link></li>
                                <li><Icofont icon="icofont-tags" /> Tags: <Link to={blog.TagLink} target="_blank">{blog.TagName}</Link></li>
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
            <section id="blog" className="our-blog1 ptb-100">
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
Projects.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    btnLink: PropTypes.string,
    BlogBtn: PropTypes.string,
    blogsData: PropTypes.array
};

//Default Props
Projects.defaultProps = {
    SectionbgTitle: "Projects",
    sectionTitle: "Our Work",
    sectionDescription:
        "Web Whisperers believe that our clients should be well-informed prior to any decision they make. This includes getting an idea of what our talented developers are capable of producing. Please, take the time and look over past projects to get a better understanding of what Web Whisperers can do.",
    btnLink: "/blog-one",
    BlogBtn: "View All Post",
        blogsData: [
        {
            postImage: require("../assets/img/aceMobile1.jpeg"),
            postLink: "/aceMobile",
            date: "25",
            month: "Mar",
            posttitle: "Ace Mobile Auto Detailing",
            postContent: "The client had a website that was built over five years ago. The client came to JDH with the desire to create a website that would look modern and employ state-of-the-art functionality. In response, JDH designed and coded a website that incorporated a variety of updated features including: APIs, functional chatbox, and a database.",
            authorName: " Web Whisperers",
            authorLink: "//aceMobile",
            TotalComments: "15",
            CommentsLink: "/aceMobile",
            TagName: "Projects",
            TagLink: "/aceMobile", 
        },
        {
            postImage: require("../assets/img/opass1Pic.jpeg"),
            postLink: "/oPass1",
            date: "10",
            month: "Apr",
            posttitle: "O-Pass",
            postContent: "The client owned a series of parking garages in the DC metro area. The client noticed that customers would create bottlenecks at pay terminals and pay gates (exiting). The client wanted to create a method of collecting parking fees without using the pay gates or terminals. ",
            authorName: "Web Whisperers",
            authorLink: "/oPass1",
            TotalComments: "30",
            CommentsLink: "/oPass1",
            TagName: "Projects",
            TagLink: "/oPass1", 
        },
       

        {
            postImage: require("../assets/img/jdhDesignPic1.jpeg"),
            postLink: "/jdhDesign",
            date: "5",
            month: "May",
            posttitle: "JDH Design",
            postContent: "The client wanted to showcase his programming skills and projects. He came to use to design a webpage that would make an impression on future clients and employers. In response, Web Whisperers designed and coded a multi-page website that allowed customers to view many of his projects and provide background information on the client.",
            authorName: "Web Whisperers",
            authorLink: "/jdhDesign",
            TotalComments: "20",
            CommentsLink: "/jdhDesign",
            TagName: "Projects",
            TagLink: "/jdhDesign", 
        },



        {
            postImage: require("../assets/img/bookKids1.jpeg"),
            postLink: "/classBooks",
            date: "1",
            month: "June",
            posttitle: "Summer Reading List",
            postContent: "The client teaches 8th grade English at a local middle school. The client came to Web Whisperers with the desire to create an application that would allow her students to chose which books the class would read for summer break. Web Whisperers designed and coded a React-based Google Books Search app.",
            authorName: "Brinker",
            authorLink: "/classBooks",
            TotalComments: "11",
            CommentsLink: "/classBooks",
            TagName: "Projects",
            TagLink: "/classBooks", 
        },
    ]
};

export default Projects;
