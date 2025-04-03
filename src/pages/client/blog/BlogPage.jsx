import BlogNewsletter from "../../../components/pageComp/BlogPageComps/BlogNewsletter/BlogNewsletter";
import Blogs from "../../../components/pageComp/BlogPageComps/Blogs/Blogs";
import FooterInfo from "../../../components/commonComp/Footer/FooterInfo/FooterInfo";
import Hero from "../../../components/commonComp/Hero/Hero";

const BlogPage = () => {
    return(
        <>
            <Hero title="BLOG ARKIV" bc1="Forside" bc1Link="/" bc2="BLOG ARKIV"/>
            <Blogs/>
            <BlogNewsletter/>
            <FooterInfo/>
        </>
    )
}

export default BlogPage;