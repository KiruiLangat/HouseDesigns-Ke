import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
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

    const imageMapping = {
        bungalows: "https://housedesigns.co.ke/bungalows.png",
        maisonettes: "https://housedesigns.co.ke/OurExpertise.jpg",
        apartments: "https://housedesigns.co.ke/apartments.jpg",
        tiny_homes: "https://housedesigns.co.ke/tinyhomes.jpg",
        default: "https://housedesigns.co.ke/defaultImage.jpg",
    }

    const subCategoryImageURL = imageMapping[sub_category_name] || imageMapping.default

    return (
        <div style={style} className='projects'>
            <Helmet>
            <title>{sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1)}</title>
            <meta name='description' content={`Explore Our ${sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1)} House Designs and House Plans in Kenya.`} />
            <meta property='og:title' content={sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1)} />
            <meta property='og:description' content={`Explore Our ${sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1)} House Designs and House Plans in Kenya.`} />
            <meta property='og:image' content={subCategoryImageURL} />
            <meta property='og:image:width' content='300' />
            <meta property='og:image:height' content='300' />
            <meta property='og:url' content={`https://housedesigns.co.ke/architecture/residentials/${sub_category_name.charAt(0).toUpperCase()+sub_category_name.slice(1)}`} />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1)} />
            <meta name='twitter:description' content={`Explore Our ${sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1)} House Designs and House Plans in Kenya.`} />
            <meta name='twitter:image' content={subCategoryImageURL} />
            <meta name='twitter:image:width' content='144' />
            <meta name='twitter:image:height' content='144' />
            <meta name='twitter:url' content={`https://housedesigns.co.ke/architecture/residentials/${sub_category_name.charAt(0).toUpperCase()+sub_category_name.slice(1)}`} />
            </Helmet>

            <h1 className='projects-title'>{sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1)}</h1>
            <div className='service-projects-container'>
                {projects.map(project => (
                    <div className='project-box1' key={project.id}> 
                        <Link to={`/${project.title}`}>
                            <div className='projects-img'>
                                <img src={project.project_img_url} alt='Project Loading' loading='lazy' onLoad={(e) => e.target.style.opacity = 1} />
                            </div>
                            <h2>{project.title}</h2>
                        </Link>
                    </div>
                ))}   
            </div>
            
        </div>
    )
}
