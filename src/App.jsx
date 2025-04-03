import { useRoutes } from "react-router-dom";

import BackofficeBlogsPage from "./pages/backoffice/backofficePages/BackofficeBlogsPage";
import BackofficeMessagesPage from "./pages/backoffice/backofficePages/BackofficeMessagesPage";
import BackofficeReviewsPage from "./pages/backoffice/backofficePages/BackofficeReviewsPage";
import BackofficePage from "./pages/backoffice/BackofficePage";

import BoBlogsForm from "./components/backofficeComp/Blogs/outlet/BoBlogsForm";
import BoReviewsForm from "./components/backofficeComp/Reviews/outlet/BoReviewsForm";

import BlogPage from "./pages/client/blog/BlogPage";
import ContactPage from "./pages/client/contact/Contactpage";
import FAQPage from "./pages/client/faq/FAQPage";
import HomePage from "./pages/client/home/HomePage";
import SpecificBlogPage from "./pages/client/specificBlog/SpecificBlogPage";

import Footer from "./components/commonComp/Footer/Footer";
import Header from "./components/commonComp/Header/Header";
import Login from "./components/commonComp/Header/Login/Login";

import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth";


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
      path: "/contact",
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
