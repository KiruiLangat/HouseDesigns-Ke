import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Projects.css';
import '@fontsource/poppins'
import { Link } from 'react-router-dom';


const style = {
    fontFamily: 'Poppins',
};

const subCategoryMap = {
    bungalows: 1,
    maisonettes: 2,
    apartments: 3,
    tiny_homes: 4,
}

export default function Projects() {
    const[ projects, setProjects ] = useState([])
    const { sub_category_name } = useParams()

    useEffect(() => {
        const fetchProjects = async () => {
            try{
                const subCategoryId = subCategoryMap[sub_category_name]
                const response = await fetch(`/api/residentials/${subCategoryId}`)
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json()
            console.log(data)
            setProjects(data)
        } catch (error) {
            console.error(error) 
        }
        }
        fetchProjects();
    }, [sub_category_name]);

    return (
        <div style={style} className='projects'>
            <Helmet>
                <title>{projects.title}</title>
                <meta name='description'content={projects.excerpt} />
                <meta property='og:title' content={projects.title}/>
                <meta property='og:description' content= {projects.excerpt} />
                <meta property='og:image' content={projects.project_img_url} />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta property='og:url' content={`https://housedesigns.co.ke/architecture/residentials/${projects.title}`} />
                <meta name='twitter:card' content='summary' />
            </Helmet>
            <Header />
            <h1 className='projects-title'>{sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1)}</h1>
            <div className='service-projects-container'>
                {projects.map(project => (
                    <div className='project-box1' key={project.id}> 
                        <Link to={`/residentials/${sub_category_name}/${encodeURIComponent(project.title)}`}>
                            <div className='projects-img'>
                                <img src={project.project_img_url} alt='Project Loading' loading='lazy' onLoad={(e) => e.target.style.opacity = 1} />
                            </div>
                            <h2>{project.title}</h2>
                        </Link>
                    </div>
                ))}   
            </div>
            <Footer />
        </div>
    )
}
