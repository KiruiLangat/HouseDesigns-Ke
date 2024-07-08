import React, {useState, useEffect} from 'react'
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
            <Header />
            <h1 className='projects-title'>{sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1)} Projects</h1>
            <div className='service-projects-container'>
                {projects.map(project => (
                    <div className='project-box1' key={project.id}> 
                        <Link to={`/residentials/${project.title}`}>
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
