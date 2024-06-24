import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/Layouts/Layout"
import { Home } from "../pages/Home/Home"
import { Experiences } from "../pages/Experiences/Experiences"
import { Projects } from "../pages/Projects/Projects"

export const AppRoutes:React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/experience" element={<Experiences/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}