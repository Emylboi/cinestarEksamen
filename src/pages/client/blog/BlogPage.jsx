import FooterInfo from "../../../components/commonComp/Footer/FooterInfo/FooterInfo";
import Hero from "../../../components/commonComp/Hero/Hero";
import Blogs from "../../../components/pageComp/BlogPageComps/Blogs/Blogs";

const BlogPage = () => {
    return(
        <>
            <Hero title="BLOG ARKIV"/>
            <Blogs/>
            <FooterInfo/>
        </>
    )
}

export default BlogPage;