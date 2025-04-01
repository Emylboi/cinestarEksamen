import { useRoutes } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import BackofficePage from "./pages/backoffice/BackofficePage";
import BackofficeBlogsPage from "./pages/backoffice/backofficePages/BackofficeBlogsPage";
import BoBlogsForm from "./components/backofficeComp/Blogs/outlet/BoBlogsForm";
import HomePage from "./pages/client/home/HomePage";
import Login from "./components/commonComp/Header/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import BackofficeMessagesPage from "./pages/backoffice/backofficePages/BackofficeMessagesPage";
import BackofficeReviewsPage from "./pages/backoffice/backofficePages/BackofficeReviewsPage";
import BoReviewsForm from "./components/backofficeComp/Reviews/outlet/BoReviewsForm";
import Header from "./components/commonComp/Header/Header";
import Footer from "./components/commonComp/Footer/Footer";
import BlogPage from "./pages/client/blog/BlogPage";
import FAQPage from "./pages/client/faq/FAQPage";
import ContactPage from "./pages/client/contact/Contactpage";
import SpecificBlogPage from "./pages/client/specificBlog/SpecificBlogPage";

function App() {
  const { signedIn, user } = useAuth();

  const isBackoffice = location.pathname.startsWith("/backoffice")

  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
    },
    {
      path: "/blog/:id",
      element: <SpecificBlogPage />,
    },
    {
      path: "/faq",
      element: <FAQPage />,
    },
    {
      path: "/kontakt",
      element: <ContactPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <div>NOT 404 FOUND</div>,
    },
    {
      path: "/backoffice",
      element: (
        //You're only able to navigate to backoffice, if you're signed in and your user role is "admin".
        <ProtectedRoute isAllowed={signedIn} role={user?.role}>
          <BackofficePage />
        </ProtectedRoute>
      ),
      children: [
      {
        path: "/backoffice/blogs",
        element: <BackofficeBlogsPage />,
        children: [
          {
            path: "/backoffice/blogs/add",
            element: <BoBlogsForm />,
          },
          {
            path: "/backoffice/blogs/edit/:id",
            element: <BoBlogsForm />,
          },
        ],
      },
      {
        path: "/backoffice/messages",
        element: <BackofficeMessagesPage />,
      },
      {
        path: "/backoffice/reviews",
        element: <BackofficeReviewsPage />,
        children: [
          {
            path: "/backoffice/reviews/add",
            element: <BoReviewsForm />,
          },
          {
            path: "/backoffice/reviews/edit/:id",
            element: <BoReviewsForm />,
          },
        ],
      },

  ]}
    
  ])

  return (
    <>
      <div>
        {!isBackoffice && <Header />}
        <div className="globale-page-wrapper">{routes}</div>
        {!isBackoffice && <Footer />}
        
      </div>
    </>
  )
}

export default App
