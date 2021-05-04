import aboutPage from '../views/about'
import landingPage from '../views/landing'
import projectPage from '../views/projects'
import blogPage from '../views/blog'
import contactPage from '../views/contact'

export default [
    {path: '/', component: landingPage},
    {path: '/about', component: aboutPage},
    {path: '/projects', component: projectPage},
    {path: '/blog', component: blogPage},
    {path: '/contact', component: contactPage}
]